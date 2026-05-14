# Thread Completion Notification - Implementation Task

## Goal

Thread 작업 완료 시 **Toast + Browser Notification API**로 알림 표시

## Key Files

| File                                       | Purpose                                          |
| ------------------------------------------ | ------------------------------------------------ |
| `apps/web/src/components/ChatView.tsx`     | Main implementation - 완료 감지 effect 추가      |
| `apps/web/src/components/Sidebar.logic.ts` | `hasUnseenCompletion()` 함수 재사용              |
| `apps/web/src/components/ui/toast.tsx`     | `toastManager.add() 사용                         |
| `apps/web/src/uiStateStore.ts`             | `threadLastVisitedAtById`, `markThreadVisited()` |

## Implementation

### 1. ChatView.tsx에 Effect 추가

```typescript
// imports
import { toastManager } from "~/components/ui/toast";
import { hasUnseenCompletion } from "~/components/Sidebar.logic";

// ChatView 컴포넌트 내에 추가
useEffect(() => {
  if (!serverThread?.id) return;
  if (!latestTurnSettled) return;
  if (!activeLatestTurn?.completedAt) return;

  // 완료 상태 변화 감지 및 toast 표시
  const threadStatusInput = {
    hasActionableProposedPlan: activeThread?.hasActionableProposedPlan ?? false,
    hasPendingApprovals: activeThread?.hasPendingApprovals ?? false,
    hasPendingUserInput: activeThread?.hasPendingUserInput ?? false,
    interactionMode: activeThread?.interactionMode,
    latestTurn: activeLatestTurn,
    session: activeSession,
    lastVisitedAt: activeThreadLastVisitedAt,
  };

  if (hasUnseenCompletion(threadStatusInput)) {
    // Toast notification
    toastManager.add({
      type: "success",
      title: "Thread completed",
      description: activeThread?.title ?? "Your task is complete",
      threadRef: scopeThreadRef(serverThread.environmentId, serverThread.id),
      dismissAfterVisibleMs: 5000,
    });

    // Browser Notification API (OS native)
    if (Notification.permission === "granted") {
      new Notification("Thread completed", {
        body: activeThread?.title ?? "Your task is complete",
        icon: "/icon.png",
      });
    }
  }
}, [
  activeLatestTurn?.completedAt,
  activeThreadLastVisitedAt,
  latestTurnSettled,
  serverThread?.environmentId,
  serverThread?.id,
  activeThread,
  activeSession,
]);
```

### 2. Notification 권한 요청 (선택 - Sidebar.tsx)

Sidebar에 권한 요청 버튼/메뉴 추가:

```typescript
// 권한 요청 함수
const requestNotificationPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      toastManager.add({
        type: "success",
        title: "Notifications enabled",
      });
    }
  });
};
```

## Key Variables in ChatView.tsx

- `serverThread` - 현재 thread
- `activeLatestTurn` - 최신 turn (completedAt 포함)
- `activeThreadLastVisitedAt` - 마지막 방문 시간
- `latestTurnSettled` - turn이 settle 되었는지
- `activeSession` - session state

## Edge Cases

1. **이미 본 완료**: `hasUnseenCompletion()`이 자동 처리
2. **권한 없음**: Browser Notification은 skip, toast만 표시
3. **Page reload**: `lastVisitedAt` 업데이트되어 중복 알림 방지

## Test Plan

1. Thread 작업 실행 → 완료 시 toast + OS 알림 확인
2. Thread 재진입 → 알림 다시 표시 안 되는지 확인
3. 권한 거부 상태 → toast만 표시되는지 확인
