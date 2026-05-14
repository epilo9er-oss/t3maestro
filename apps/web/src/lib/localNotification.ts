import type { NotificationSound } from "@t3tools/contracts/settings";
import { playNotificationSound } from "./notificationSound";

export interface LocalNotificationOptions {
  title: string;
  body: string;
  icon?: string;
  silent?: boolean;
}

export interface NotificationPermissionState {
  permission: NotificationPermission;
  isSupported: boolean;
}

/**
 * Check if the Notification API is supported in the current environment.
 */
export function isNotificationSupported(): boolean {
  return typeof Notification !== "undefined";
}

/**
 * Get the current notification permission state.
 * Returns "default" if notifications are not supported.
 */
export function getNotificationPermission(): NotificationPermission {
  if (!isNotificationSupported()) return "default";
  return Notification.permission;
}

/**
 * Request notification permission from the user.
 * Returns the permission state after the request.
 */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!isNotificationSupported()) return "default";
  return await Notification.requestPermission();
}

/**
 * Show a local notification with the given options.
 * Silently does nothing if notifications are not supported or permission is not granted.
 */
export function showLocalNotification(options: LocalNotificationOptions): void {
  if (!isNotificationSupported()) return;
  if (Notification.permission !== "granted") return;

  const notificationOptions: NotificationOptions = {
    body: options.body,
    silent: options.silent ?? false,
  };

  if (options.icon !== undefined) {
    notificationOptions.icon = options.icon;
  }

  void new Notification(options.title, notificationOptions);
}

/**
 * Show a thread completion notification with sound.
 * Combines sound playback with OS notification.
 */
export function showThreadCompletionNotification(title: string, sound: NotificationSound): void {
  playNotificationSound(sound);
  showLocalNotification({
    title: "Thread completed",
    body: title,
    icon: "/icon.png",
    silent: true,
  });
}
