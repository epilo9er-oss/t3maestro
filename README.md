# Synapse 🧠

> [!IMPORTANT]
> Synapse는 개인적인 AI 실험을 위한 기능적 런타임입니다.
> [T3Code](https://github.com/pingdotgg/t3code)를 기반으로 포크되었으며, 
> **개인 AI 프로젝트를 위한** 에이전트 상태 관리 및 관찰 가능한 실행 흐름에 초점을 맞추고 있습니다.

# 🚀 Overview

Synapse는 T3 Code의 견고한 구조를 바탕으로 구축된 멀티 에이전트 오케스트레이션 레이어입니다. 단순한 코드 실행을 넘어, 복잡하게 얽힌 에이전트 간의 워크플로우를 체계적으로 조율하고 실행 전 과정을 투명하게 관제하는 것을 목표로 합니다.

Core Capabilities
- Agentic State Management: 분산된 에이전트들 사이의 정교한 상태 유지 및 데이터 전이 최적화
- High Observability: 복잡한 추론 및 실행 단계를 실시간 시각화하여 운영의 명확성 확보
- Structured Orchestration: 비결정적인 AI 에이전트의 동작을 사전에 정의된 논리에 따라 정밀하게 제어

# 🛠 Getting Started (Upstream: T3 Code)

Synapse는 [T3Code](https://github.com/pingdotgg/t3code)의 구동 방식을 따르므로, 원본 프로젝트의 환경 설정이 필요합니다.

## Prerequisites

> [!WARNING]
> 사용 전 아래 서비스 중 하나 이상을 로컬에 설치하고 인증해야 합니다:
>
> - Codex: [Codex CLI](https://developers.openai.com/codex/cli) 설치, `codex login` 실행
> - Claude: [Claude Code](https://claude.com/product/claude-code) 설치, `claude auth login` 실행
> - OpenCode: [OpenCode](https://opencode.ai) 설치, `opencode auth login` 실행

# 💻 Local Development

개인적인 워크플로우 최적화 및 로컬 빌드를 위한 설정 방법입니다:

```bash
# 의존성 설치 (Bun 사용 권장)
bun install .

# (Optional) mise 를 사용하여 개발 도구를 관리하는 경우
mise install
```

> [!NOTE]
> 본 프로젝트는 개인적인 용도로 리팩토링 중인 포크 저장소입니다. 
> 공식적인 기여나 최신 업데이트 사항은 원본 저장소인 
> [T3Code](https://github.com/pingdotgg/t3code)를 확인해 주시기 바랍니다.

# 📝 Reference & Notes

- Observability Guide: 상세 내용은 [docs/observability.md](./docs/observability.md)를 참조하세요.
- Project Status: 본 프로젝트는 개발 초기 단계이며, 개인적인 실험 위주로 진행되므로 예기치 않은 버그가 발생할 수 있습니다.
- Contributions: Synapse의 방향성에 공감하는 기여는 언제나 환영합니다. 이슈를 제기하거나 PR을 보내기 전에 [CONTRIBUTING.md](./CONTRIBUTING.md)를 먼저 확인해 주세요.
- Original Project: [T3Code](https://github.com/pingdotgg/t3code)의 훌륭한 기반에 감사를 표하며, **T3Code의 공식 커뮤니티 지원**은 [Discord](https://discord.gg/jn4EGJjrvv)에서 확인 가능합니다.
