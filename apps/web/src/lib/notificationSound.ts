import type { NotificationSound } from "@t3tools/contracts/settings";

const audioContextRef: { current: AudioContext | null } = { current: null };

function getAudioContext(): AudioContext {
  if (!audioContextRef.current) {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContextRef.current;
}

// Exhaustiveness check helper
const assertNever = (_value: never): never => {
  throw new Error(`Unexpected value: ${_value}`);
};

export function playNotificationSound(sound: NotificationSound): void {
  if (sound === "none") return;

  // Type narrowing: sound is now Exclude<NotificationSound, "none">
  type NonNoneSound = Exclude<NotificationSound, "none">;
  const soundToPlay = sound as NonNoneSound;

  try {
    const ctx = getAudioContext();
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    switch (soundToPlay) {
      case "default":
        oscillator.frequency.setValueAtTime(800, ctx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.2);
        break;
      case "chime":
        oscillator.frequency.setValueAtTime(523.25, ctx.currentTime);
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.5);
        break;
      case "pop":
        oscillator.frequency.setValueAtTime(600, ctx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);
        gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.1);
        break;
      case "bell":
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(880, ctx.currentTime);
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 1);
        break;
      default:
        return assertNever(soundToPlay);
    }
  } catch (e) {
    console.error("Failed to play notification sound:", e);
  }
}

export const NOTIFICATION_SOUND_OPTIONS = [
  { value: "none" as const, label: "None" },
  { value: "default" as const, label: "Default" },
  { value: "chime" as const, label: "Chime" },
  { value: "pop" as const, label: "Pop" },
  { value: "bell" as const, label: "Bell" },
] as const;
