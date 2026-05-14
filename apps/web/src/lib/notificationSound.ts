import type { NotificationSound } from "@t3tools/contracts/settings";

const audioContextRef: { current: AudioContext | null } = { current: null };

function getAudioContext(): AudioContext {
  if (!audioContextRef.current) {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContextRef.current;
}

interface ToneOptions {
  freq: number;
  startTime: number;
  duration: number;
  gainPeak: number;
  type?: OscillatorType;
}

function playTone(ctx: AudioContext, options: ToneOptions): void {
  const { freq, startTime, duration, gainPeak, type = "sine" } = options;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(freq, startTime);

  gainNode.gain.setValueAtTime(0, startTime);
  gainNode.gain.linearRampToValueAtTime(gainPeak, startTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

export function playNotificationSound(sound: NotificationSound): void {
  if (sound === "none") return;

  try {
    const ctx = getAudioContext();
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const now = ctx.currentTime;

    switch (sound) {
      case "default": // Cabin Call chime
        playTone(ctx, { freq: 587.33, startTime: now, duration: 0.88, gainPeak: 0.28 });
        playTone(ctx, { freq: 493.88, startTime: now + 1.03, duration: 0.88, gainPeak: 0.28 });
        break;
      case "beep":
        playTone(ctx, { freq: 800, startTime: now, duration: 0.1, gainPeak: 0.3 });
        break;
      case "bell":
        playTone(ctx, { freq: 880, startTime: now, duration: 1, gainPeak: 0.3 });
        break;
      case "chime": // Seatbelt chime
        playTone(ctx, { freq: 523.25, startTime: now, duration: 1.2, gainPeak: 0.28 });
        break;
      case "pop":
        playTone(ctx, { freq: 600, startTime: now, duration: 0.05, gainPeak: 0.2 });
        break;
      case "turbulence-chime":
        playTone(ctx, { freq: 493.25, startTime: now, duration: 1.2, gainPeak: 0.28 });
        playTone(ctx, { freq: 493.25, startTime: now + 1.2, duration: 1.2, gainPeak: 0.26 });
        break;
    }
  } catch (e) {
    console.error("Failed to play notification sound:", e);
  }
}

export const NOTIFICATION_SOUND_OPTIONS = [
  { value: "none" as const, label: "None" },
  { value: "default" as const, label: "Default" },
  { value: "beep" as const, label: "Beep" },
  { value: "bell" as const, label: "Bell" },
  { value: "chime" as const, label: "Chime" },
  { value: "pop" as const, label: "Pop" },
  { value: "turbulence-chime" as const, label: "Turbulence Chime" },
] as const;
