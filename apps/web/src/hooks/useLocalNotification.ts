import { useCallback, useSyncExternalStore } from "react";
import type { NotificationSound } from "@t3tools/contracts/settings";
import {
  getNotificationPermission,
  isNotificationSupported,
  requestNotificationPermission,
  showLocalNotification,
  showThreadCompletionNotification,
  type LocalNotificationOptions,
} from "~/lib/localNotification";

/**
 * Server snapshot for SSR - returns default values
 */
function getServerSnapshot(): NotificationPermission {
  return "default";
}

/**
 * Subscribe to permission changes via Notification API events
 */
function subscribe(callback: () => void): () => void {
  if (!isNotificationSupported()) return () => {};

  // Permission changes don't have an event, but we can poll on visibility change
  const handleVisibilityChange = () => {
    if (document.visibilityState === "visible") {
      callback();
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);
  return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
}

/**
 * Get current permission snapshot
 */
function getSnapshot(): NotificationPermission {
  return getNotificationPermission();
}

export interface UseLocalNotificationReturn {
  /** Whether the Notification API is supported in this environment */
  isSupported: boolean;
  /** Current permission state: "default", "granted", or "denied" */
  permission: NotificationPermission;
  /** Whether notifications can be shown (supported and granted) */
  canShowNotifications: boolean;
  /** Request notification permission from the user */
  requestPermission: () => Promise<NotificationPermission>;
  /** Show a local notification with the given options */
  showNotification: (options: LocalNotificationOptions) => void;
  /** Show a thread completion notification with sound */
  showThreadCompletion: (title: string, sound: NotificationSound) => void;
}

/**
 * React hook for managing local notifications.
 *
 * Provides permission state and notification triggering functionality.
 * Automatically subscribes to permission changes and updates React state.
 *
 * @example
 * ```tsx
 * const { requestPermission, showThreadCompletion, canShowNotifications } = useLocalNotification();
 *
 * const handleToggle = async (checked: boolean) => {
 *   if (checked) {
 *     await requestPermission();
 *   }
 * };
 *
 * const handleThreadComplete = (title: string) => {
 *   if (canShowNotifications) {
 *     showThreadCompletion(title, "default");
 *   }
 * };
 * ```
 */
export function useLocalNotification(): UseLocalNotificationReturn {
  const permission = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isSupported = isNotificationSupported();
  const canShowNotifications = isSupported && permission === "granted";

  const requestPermission = useCallback(() => {
    return requestNotificationPermission();
  }, []);

  const showNotification = useCallback((options: LocalNotificationOptions) => {
    showLocalNotification(options);
  }, []);

  const showThreadCompletion = useCallback((title: string, sound: NotificationSound) => {
    showThreadCompletionNotification(title, sound);
  }, []);

  return {
    isSupported,
    permission,
    canShowNotifications,
    requestPermission,
    showNotification,
    showThreadCompletion,
  };
}
