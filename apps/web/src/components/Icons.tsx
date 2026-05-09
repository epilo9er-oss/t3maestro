import React, { type SVGProps, useId } from "react";
import { cn } from "~/lib/utils";

export type Icon = React.FC<SVGProps<SVGSVGElement>>;

export const GitHubIcon: Icon = (props) => (
  <svg {...props} viewBox="0 0 1024 1024" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      transform="scale(64)"
      fill="currentColor"
    />
  </svg>
);

export const GitIcon: Icon = (props) => (
  <svg {...props} viewBox="0 0 256 256">
    <path
      d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33"
      fill="#DE4C36"
    />
  </svg>
);

export const JujutsuIcon: Icon = (props) => {
  const groupId = `${useId().replaceAll(":", "")}-jj-a`;

  return (
    <svg {...props} viewBox="0 0 1024 1024">
      <defs>
        <g id={groupId}>
          <path
            d="M380.7 632.3s-14.3 56-50.3 55.5c-12.1-.2-29-10.9-47.1-26.8-34.2 82.7-98.5 239-108.5 268.6-8.9 26.5 13 52 38.2 56 36.4 5.7 49-18.1 49-18.1s13.6 40.7 37.6 39.7c29.9-1.2 34.6-33 34.6-33s11.4 23.8 26.8 23.2c38.4-1.4 41.7-102.9 43.8-135.6 3.8-57.5 6.3-135.4 7.8-190.1-9 6.7-16.5 10.7-21.3 9.9-16.1-2.7-10.6-49.3-10.6-49.3z"
            fill="#42acde"
          />
          <path
            d="M403.7 75.1c-89.7-.3-201.5 32.6-200.6 99.6 1.3 87.4 52.2 62.4 41.2 111.2-4.9 21.6-59.9 49.8-65.5 153.8 2.8.7 5.3 1 7.2 1.2 14.2.7 29.9-26.3 29.9-26.3s9.5 38 35 38 50.7-26.3 50.7-26.3 15 30.3 39.6 32c20 1.6 34-8 34-8s.8 15 14.6 14c13.9-1.2 37.6-27.8 37.6-27.8 16.5 30.3 31.9 21 54.7 5.1 0 0 6.2 26.6 36.8 23.7 6-.6 12.3-1 18.5-1.5l.9-11.6c2-58.8-20.4-129.8-50.4-183-21.7-38.7-52.5-83.4-49.6-107.3 3.5-28.3 46.7-28.4 46.7-28.4l-48.5-16 24-37a279.7 279.7 0 0 0-56.8-5.4Z"
            fill="#2f9fdf"
          />
          <path
            d="M215.9 414.6s-15.7 27-30 26.3c-1.8-.1-4.3-.5-7-1.2l-.3 3c-2.3 52 7.7 100.3 29.7 132 35.1 50.7 92.6 112.6 122 113 36.1.6 50.4-55.4 50.4-55.4s-5.5 46.6 10.6 49.3c16 2.6 62.4-46.7 87.9-79.5 15.8-20.5 52-82.3 58.2-138.3-6.2.4-12.4 1-18.5 1.5-30.6 3-36.8-23.7-36.8-23.7-22.8 16-38.2 25.2-54.7-5 0 0-23.7 26.5-37.6 27.6-13.8 1.1-14.6-13.8-14.6-13.8s-14 9.5-34 8c-24.5-1.8-39.6-32.1-39.6-32.1s-25.2 26.3-50.7 26.3c-25.5 0-35-38-35-38z"
            fill="#0e254f"
          />
          <path
            d="M309.5 418.5a1.5 1.5 0 0 0-.7 0c-.6.2-1.1.8-1.5 1.8a34.7 34.7 0 0 0 4 16.6c5.5 10.6 12.4 22 23.3 27.6 4 2 8.5 3.5 12.5 3.3a36 36 0 0 0 12.5-2.3c4-2 7.6-3.8 10.8-6.2 6-4.4 7.6-6.5 7.6-9.8 0-3.3-2.7-3.5-7.6-.5-5 3-14.6 6.1-18.8 6.1-11.2 0-21.2-8-33.1-26.4-4.3-6.6-7.1-9.9-9-10.2zm174 5c-1.2-.2-2.4.4-3.8 1.7-2.3 2.3-2.7 4-2.6 10.7.5 9 4.8 19.2 11.8 24.6 4.4 3.3 13.2 6 20.4 5.8 6.8-1.1 18.8-6.6 15.3-10.3-2-1.6-5 .7-9.9.7-10.6 0-15.3-3.4-19.6-9-3.8-5-5.4-8.7-7.2-16.8-1.1-4.6-2.6-7.1-4.4-7.4zm-67.5 2.2a1 1 0 0 0-.4 0c-.4.1-.7.4-1.2.9-2.4 2-2.5 5.1-.2 12.6a41.4 41.4 0 0 0 25.3 22c7.6 1.7 14.5.6 20.3-2.7 3.8-2.4 5.3-5 4.4-7.3-4.8-2.9-7.7-1-13.3-1A39.5 39.5 0 0 1 424 435c-4.8-5.9-7-9.3-8-9.4zm-199 .8c-1 .3-1.4 2.7-1 7.2.3 5.3 1.3 8.2 4 12 3 4.5 11.5 11 14.7 11.7 2.5 1 6.9 2.3 10.7 2.3 3.8 0 8-.6 11.2-1.3 3.2-.7 6.8-2 10.3-4l1.3-.7c4-2.1 8-5.1 10.9-7.9l1.4-1.2c6.3-5.4 9.9-10.7 9.9-14.6 0-2.4-5.3-.5-14 5-16 9.8-31.1 13.2-40.9 9l-2.2-1.3-8.8-7.7a32.9 32.9 0 0 1-3.6-4.8c-1.4-2.2-2.5-3.4-3.3-3.7a1 1 0 0 0-.5 0z"
            fill="#71beea"
          />
          <path
            d="M221.6 468.8c-.5 0-.8.1-1.1.4-.3.2-.5.6-.6 1.2a10 10 0 0 0 .6 5.1 55 55 0 0 0 28.3 28.9 42.4 42.4 0 0 0 16.4 2c6.1-.2 12.3-1.4 16.6-3.4a48.3 48.3 0 0 0 13.7-10.6c.9-1 1.3-2 1.3-2.3 0-.6 0-.9-.3-1-.3-.3-.7-.4-1.6-.4-1.8 0-4.9.8-9.7 2.3-6.2 1.9-12.7 3-18.5 3.1-7.8.2-10.2-.4-17-3.7-4.5-2.2-12-7.7-17.7-12.8a232 232 0 0 0-7.2-6.3 63 63 0 0 0-2.4-2 12 12 0 0 0-.7-.4h-.1zm214.8 13.6c-.2 0-.5.7-.7 1.8v4a32 32 0 0 0 2.7 9.9 38.5 38.5 0 0 0 49.1 19.3c5.2-2.3 10-6.4 13-10.5 1.4-2.1 2.5-4.3 3-6.2.5-1.9.4-3.6-.3-4.9-.4-.8-.9-1.4-1.3-1.7-.3-.3-.6-.3-1-.2-.9.2-2.3 1.4-4.3 3.8-5 6.2-12.8 9.5-22.6 9.4-6.2 0-11-1.1-16-4.4-5-3.2-10.4-8.6-18-17.3-.8-1-1.7-2-2.5-2.4l-1-.6c-.1 0-.2 0 0 0zm-33.6 4.2-.6.2-1.4.7a53.5 53.5 0 0 0-4 2.5c-8 5.5-15.6 8.3-23.9 8.4-8.3 0-17.2-2.7-28-8.2a42 42 0 0 0-7.3-3c-2-.5-3.1-.5-3.6-.2-.2.1-.3.3-.4.6 0 .3 0 .8.2 1.5.4 1.3 1.4 3.1 3.1 5.5 4 5.4 10.5 10.1 19.7 14 9.3 3.9 23.8 3.5 32.4-1a42 42 0 0 0 9.1-6.5c2.6-2.6 4.5-6.5 5.3-9.6.5-1.5.6-3 .4-3.8 0-.4-.2-.7-.4-.9-.1-.2-.3-.2-.6-.2zm-132.5 30.8c-.3 0-.4 0-.5.2l-.1.5c0 .5.4 1.7 1.2 3.1a87.3 87.3 0 0 0 13.5 16.2c17 15.6 34.6 20.7 49 14.4a33.3 33.3 0 0 0 19-23c.4-2 .1-3.1-.2-3.5-.2-.2-.5-.3-1-.3l-1.7.5a24 24 0 0 0-5.7 4.6c-7.7 8-14.6 12-23 11.4-8.3-.4-18-5.2-31.7-14.3-5.2-3.4-9.4-6-12.5-7.6a15.5 15.5 0 0 0-6.3-2.2zm109.4 0c-.2 0-.3 0-.5.2-.1 0-.3.3-.4.7a9 9 0 0 0 0 3.3c.4 2.9 1.6 6.7 3.5 10.3 11 20.5 29.4 30.5 46.8 25.7a37.3 37.3 0 0 0 15.6-10c4.4-4.6 7.4-9.9 7.4-13.8 0-1.3-.1-2.3-.4-2.7 0-.3-.2-.4-.3-.4h-.5c-.6 0-1.5.4-2.7 1.2a57 57 0 0 0-4.7 3.7c-9 7.7-16.9 11.2-25.1 10-8.2-1.3-16.7-7.1-27-17.7a159.8 159.8 0 0 0-10.6-9.8 9.8 9.8 0 0 0-.9-.6l-.2-.1zm-140.2 43.5c-1 0-1.6.2-1.8.5-.2.4-.3 1 0 2.1.8 2.2 3.1 5.6 7.1 9.6a78.2 78.2 0 0 0 27.4 17.9c9.7 3.8 16.7 4.1 23.4 1.1 5.5-2.5 8.4-6.1 8.4-10.4a4 4 0 0 0-.4-2c-.3-.4-.6-.6-1-.7-.9-.1-2.5.4-4.6 1.8-2.7 2-6.4 2.3-11.3 1.2-5-1.2-11.3-3.8-19.5-8-8-4-17.5-9-21.3-11-2.9-1.4-5-2-6.4-2.1zm160.1 2.8c-.6-.1-1.7.2-3.1 1-1.4 1-3.2 2.3-5.2 4.1a58 58 0 0 1-12.7 8.7c-5.9 2.7-8.6 3.2-18.3 3.2-12.6 0-17.2-1.6-29.9-11.2a21 21 0 0 0-6.4-3.8c-.5 0-.5 0-.7.2-.2.3-.3 1-.3 2 0 2.2 1.5 5.7 3.8 9.2 2.4 3.4 5.7 7 9.2 9.5 8.1 6 14.3 7.8 26.2 7.4a34 34 0 0 0 18.3-4.1 51 51 0 0 0 13.1-9.8c3.8-3.8 6.5-8 7-10.7.4-2 .4-3.5.2-4.5a2 2 0 0 0-.5-1 1 1 0 0 0-.7-.2zm-2 21.4c-.5 0-.6 0-.8.4-.2.4-.3 1.2-.3 2.4 0 3.2 1.7 7.3 4.4 11 2.7 4 6.3 7.4 10 9.5a35 35 0 0 0 21.3 4.8c11-.9 17.8-3.4 23.8-12.6 1.5-2.5 2-4.8 1.4-6.7-.2-.7-.4-1.1-.8-1.4-.3-.2-.6-.3-1.2-.3-1 0-2.6.7-4.7 2.1-6 4.3-12 6.1-19.9 6.2-8.8 0-16.3-3-26.2-11-3.6-2.8-6-4.3-7-4.4zM290 605.5c-.6.3-.9.5-1 1a9 9 0 0 0 .1 3.3c1.8 11 13 25 24.4 30.2 8.5 4 20 4 28.5 0 7.7-3.5 16-11.1 19-17.3a25 25 0 0 0 2.2-6.3c.1-.7.1-1.3 0-1.6 0-.4-.2-.6-.4-.7-.3-.2-1.3-.2-2.8.5-1.6.7-3.6 2-6 4-10 8.2-18.6 12.1-27 11.4-8.6-.7-16.9-6-26.4-15.9a82.6 82.6 0 0 0-7.6-7.1 10 10 0 0 0-2-1.4c-.5-.2-.8-.2-1-.1z"
            fill="#309fdf"
          />
          <path
            d="M290 125.7a61.4 61.4 0 0 0-19 2.3c-19.9 5.7-33.5 15.8-36.5 52.2-3 36.6-18 45.5-20.3 46.7 14.7 26.7 38 24.5 30.1 59-2.4 11-17.6 23.5-32.8 46.5 34-27 56.4-48 99.6-100.5 0 0 39-47.6 25.1-77a52 52 0 0 0-46.1-29.2z"
            fill="#e9f2f1"
          />
          <path
            d="M288.5 120.8c-8.1 0-16.7 1.4-25.6 5.3-22.5 9.9-25 20.3-29.1 37a96.8 96.8 0 0 0-1.4 24.6 178 178 0 0 0-16.5-31.6s-19 19.8-36.5 18.6c-22.9-1.7-34 2-44.8 9.8-25.4 18.5-21.2 43.8-21.2 43.8s17.6-1.8 40.5 1c20.3 2.7 37.4 4.3 61.3 2.6 8.5-.6 15.8-10 19.3-19 4.5-4 2.9-22 4.8-24.5 3-3.4 8-4.7 10.6-5.2 3.7-.7 4.3 1.5 4.7 2.8a31 31 0 0 0 60.5-3.2c1-4.4 9-5 15.9-4.5 7 0 .9 15.9-1.7 22.3-5.4 13.2-24.9 39-24.9 39l124.3-85s-45.8 22-61.5 20c-19.7-2.3-25.7-34.8-43.2-44-9.9-5.1-22-9.6-35.5-9.8zm1.4 9.4a48.2 48.2 0 0 1 40.6 23.5c3.7 7.1 6.2 17-.3 20.2-7.6 3.7-14.7.7-15.5-2.8a31 31 0 0 0-30.2-24.1 30 30 0 0 0-30.8 27.4c-.4 5.2-9.1 7.7-12.7 3.7-2.7-3 1.7-16.8 3.7-22 6.2-16.2 27.8-25.7 45.2-26zm5.6 27.8a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm-22 29a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm40 523.4c-2.6-1.8-15.1 23.5-20 59-6.8 49-8.3 63.2-14.2 96-6 32.7-12.6 66.3-13.4 73.7-.6 4.8-1.7 19-.6 20.1 3.2 3.3 14.7-31.7 16.8-42 2-10.3 7.7-40.7 14.2-86.9 6.4-46.1 8.5-69.6 13.1-91.5 4.7-22 6.7-26.6 4.2-28.4zm66.3-27c-4.1-1.3-10.5 24.6-13.1 37.8-5.6 28.6-6.2 64-8.4 87a1099 1099 0 0 1-12 87.4c-2.7 15-8 29.4-9.8 44.6-1 9-5.2 26-.2 27.3 5.2 1.5 15.4-36.5 20-55.7 8.1-32.9 10.7-65.6 14.2-99.3 3.3-30.7 4.6-62.8 6.5-93.6.7-18.5 5.1-34.5 2.8-35.6z"
            fill="#0e254f"
          />
        </g>
      </defs>
      <rect width="1024" height="1024" rx="270" fill="#a7bcd9" />
      <use href={`#${groupId}`} transform="matrix(-1 0 0 1 1024 0)" />
      <use href={`#${groupId}`} />
    </svg>
  );
};

export const GitLabIcon: Icon = (props) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <path
      d="m31.46 12.78-.04-.12-4.35-11.35A1.14 1.14 0 0 0 25.94.6c-.24 0-.47.1-.66.24-.19.15-.33.36-.39.6l-2.94 9h-11.9l-2.94-9A1.14 1.14 0 0 0 6.07.58a1.15 1.15 0 0 0-1.14.72L.58 12.68l-.05.11a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48 6.67-5h.02a8.09 8.09 0 0 0 2.7-9.36Z"
      fill="#E24329"
    />
    <path
      d="m31.46 12.78-.04-.12a14.75 14.75 0 0 0-5.86 2.64l-9.55 7.24 6.09 4.6 6.67-5h.02a8.09 8.09 0 0 0 2.67-9.36Z"
      fill="#FC6D26"
    />
    <path
      d="m9.9 27.14 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48-6.1-4.6-6.07 4.6Z"
      fill="#FCA326"
    />
    <path
      d="M6.44 15.3a14.71 14.71 0 0 0-5.86-2.63l-.05.12a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 6.1-4.6-9.56-7.24Z"
      fill="#FC6D26"
    />
  </svg>
);

export const AzureDevOpsIcon: Icon = (props) => {
  const id = useId().replaceAll(":", "");
  const gradientA = `${id}-azure-a`;
  const gradientB = `${id}-azure-b`;
  const gradientC = `${id}-azure-c`;

  return (
    <svg {...props} viewBox="0 0 96 96">
      <defs>
        <linearGradient
          id={gradientA}
          x1="-1032.17"
          x2="-1059.21"
          y1="145.31"
          y2="65.43"
          gradientTransform="matrix(1 0 0 -1 1075 158)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#114a8b" />
          <stop offset="1" stopColor="#0669bc" />
        </linearGradient>
        <linearGradient
          id={gradientB}
          x1="-1023.73"
          x2="-1029.98"
          y1="108.08"
          y2="105.97"
          gradientTransform="matrix(1 0 0 -1 1075 158)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity=".3" />
          <stop offset=".07" stopOpacity=".2" />
          <stop offset=".32" stopOpacity=".1" />
          <stop offset=".62" stopOpacity=".05" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={gradientC}
          x1="-1027.16"
          x2="-997.48"
          y1="147.64"
          y2="68.56"
          gradientTransform="matrix(1 0 0 -1 1075 158)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3ccbf4" />
          <stop offset="1" stopColor="#2892df" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientA})`}
        d="M33.34 6.54h26.04l-27.03 80.1a4.15 4.15 0 0 1-3.94 2.81H8.15a4.14 4.14 0 0 1-3.93-5.47L29.4 9.38a4.15 4.15 0 0 1 3.94-2.83z"
      />
      <path
        fill="#0078d4"
        d="M71.17 60.26H29.88a1.91 1.91 0 0 0-1.3 3.31l26.53 24.76a4.17 4.17 0 0 0 2.85 1.13h23.38z"
      />
      <path
        fill={`url(#${gradientB})`}
        d="M33.34 6.54a4.12 4.12 0 0 0-3.95 2.88L4.25 83.92a4.14 4.14 0 0 0 3.91 5.54h20.79a4.44 4.44 0 0 0 3.4-2.9l5.02-14.78 17.91 16.7a4.24 4.24 0 0 0 2.67.97h23.29L71.02 60.26H41.24L59.47 6.55z"
      />
      <path
        fill={`url(#${gradientC})`}
        d="M66.6 9.36a4.14 4.14 0 0 0-3.93-2.82H33.65a4.15 4.15 0 0 1 3.93 2.82l25.18 74.62a4.15 4.15 0 0 1-3.93 5.48h29.02a4.15 4.15 0 0 0 3.93-5.48z"
      />
    </svg>
  );
};

export const BitbucketIcon: Icon = (props) => {
  const id = useId().replaceAll(":", "");
  const gradientId = `${id}-bitbucket-a`;

  return (
    <svg {...props} viewBox="8.4 14.39 2481.29 2231.21">
      <path fill="none" d="M989.97,1493.09h518.05l125.04-730.04H852.22L989.97,1493.09z" />
      <path
        fill="#2684FF"
        d="M88.92,14.4C45.02,13.83,8.97,48.96,8.41,92.86c-0.06,4.61,0.28,9.22,1.02,13.77l337.48,2048.72 c8.68,51.75,53.26,89.8,105.74,90.24h1619.03c39.38,0.5,73.19-27.9,79.49-66.78l337.49-2071.78c7.03-43.34-22.41-84.17-65.75-91.2 c-4.55-0.74-9.15-1.08-13.76-1.02L88.92,14.4z M1509.99,1495.09H993.24l-139.92-731h781.89L1509.99,1495.09z"
      />
      <linearGradient
        id={gradientId}
        gradientUnits="userSpaceOnUse"
        x1="945.1094"
        y1="1524.8389"
        x2="944.4923"
        y2="1524.1893"
        gradientTransform="matrix(1996.6343 0 0 -1480.3047 -1884485.625 2258195)"
      >
        <stop offset="0.18" stopColor="#0052CC" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
      <path
        fill={`url(#${gradientId})`}
        d="M2379.27,763.06h-745.5l-125.12,730.42H992.31l-609.67,723.67c19.32,16.71,43.96,26,69.5,26.21h1618.13 c39.35,0.51,73.14-27.88,79.44-66.72L2379.27,763.06z"
      />
    </svg>
  );
};

export const CursorIcon: Icon = ({ className, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 466.73 532.09"
    className={cn("fill-[#26251E] dark:fill-[#EDECEC]", className)}
  >
    <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z" />
  </svg>
);

export const TraeIcon: Icon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    {/* Back rectangle: left strip + bottom strip drawn separately — empty bottom-left corner is the gap between them */}
    <rect x="1" y="4" width="3" height="14" />
    <rect x="4" y="18" width="18" height="3" />
    {/* Front frame: top bar + right bar only — left and bottom are replaced by the back strips above */}
    <rect x="4" y="4" width="18" height="3" />
    <rect x="19" y="7" width="3" height="11" />
    {/* Two diamonds, offset slightly to the right within the open area */}
    <path d="M11 10L13 12L11 14L9 12Z" />
    <path d="M16 10L18 12L16 14L14 12Z" />
  </svg>
);

export const KiroIcon: Icon = (props) => (
  <svg {...props} viewBox="0 0 1200 1200" fill="none">
    <rect width="1200" height="1200" rx="260" fill="#9046FF" />
    <path
      d="M398.554 818.914C316.315 1001.03 491.477 1046.74 620.672 940.156C658.687 1059.66 801.052 970.473 852.234 877.795C964.787 673.567 919.318 465.357 907.64 422.374C827.637 129.443 427.623 128.946 358.8 423.865C342.651 475.544 342.402 534.18 333.458 595.051C328.986 625.86 325.507 645.488 313.83 677.785C306.873 696.424 297.68 712.819 282.773 740.645C259.915 783.881 269.604 867.113 387.87 823.883L399.051 818.914H398.554Z"
      fill="#fff"
    />
    <path
      d="M636.123 549.353C603.328 549.353 598.359 510.097 598.359 486.742C598.359 465.623 602.086 448.977 609.293 438.293C615.504 428.852 624.697 424.131 636.123 424.131C647.555 424.131 657.492 428.852 664.447 438.541C672.398 449.474 676.623 466.12 676.623 486.742C676.623 525.998 661.471 549.353 636.375 549.353H636.123Z"
      fill="#000"
    />
    <path
      d="M771.24 549.353C738.445 549.353 733.477 510.097 733.477 486.742C733.477 465.623 737.203 448.977 744.41 438.293C750.621 428.852 759.814 424.131 771.24 424.131C782.672 424.131 792.609 428.852 799.564 438.541C807.516 449.474 811.74 466.12 811.74 486.742C811.74 525.998 796.588 549.353 771.492 549.353H771.24Z"
      fill="#000"
    />
  </svg>
);

export const VisualStudioCode: Icon = (props) => {
  const id = useId();
  const maskId = `${id}-vscode-a`;
  const topShadowFilterId = `${id}-vscode-b`;
  const sideShadowFilterId = `${id}-vscode-c`;
  const overlayGradientId = `${id}-vscode-d`;

  return (
    <svg {...props} fill="none" viewBox="0 0 100 100">
      <mask id={maskId} width="100" height="100" x="0" y="0" maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M70.912 99.317a6.223 6.223 0 0 0 4.96-.19l20.589-9.907A6.25 6.25 0 0 0 100 83.587V16.413a6.25 6.25 0 0 0-3.54-5.632L75.874.874a6.226 6.226 0 0 0-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 0 0-5.318.236l-5.506 5.009a4.168 4.168 0 0 0-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 0 0 .004 6.162l5.506 5.01a4.162 4.162 0 0 0 5.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 0 0 2.143 1.4ZM75.015 27.3 45.11 50l29.906 22.701V27.3Z"
          clipRule="evenodd"
        />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path
          fill="#0065A9"
          d="M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z"
        />
        <g filter={`url(#${topShadowFilterId})`}>
          <path
            fill="#007ACC"
            d="m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z"
          />
        </g>
        <g filter={`url(#${sideShadowFilterId})`}>
          <path
            fill="#1F9CF0"
            d="M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z"
          />
        </g>
        <path
          fill={`url(#${overlayGradientId})`}
          fillRule="evenodd"
          d="M70.851 99.317a6.224 6.224 0 0 0 4.96-.19L96.4 89.22a6.25 6.25 0 0 0 3.54-5.633V16.413a6.25 6.25 0 0 0-3.54-5.632L75.812.874a6.226 6.226 0 0 0-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 0 0-5.317.236l-5.507 5.009a4.168 4.168 0 0 0-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 0 0 .004 6.162l5.507 5.009a4.162 4.162 0 0 0 5.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 0 0 2.143 1.4ZM74.954 27.3 45.048 50l29.906 22.701V27.3Z"
          clipRule="evenodd"
          opacity=".25"
          style={{ mixBlendMode: "overlay" }}
        />
      </g>
      <defs>
        <filter
          id={topShadowFilterId}
          width="116.727"
          height="92.246"
          x="-8.394"
          y="15.829"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="4.167" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id={sideShadowFilterId}
          width="47.917"
          height="116.151"
          x="60.417"
          y="-8.076"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="4.167" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient
          id={overlayGradientId}
          x1="49.939"
          x2="49.939"
          y1=".258"
          y2="99.742"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const VisualStudioCodeInsiders: Icon = (props) => {
  const id = useId();
  const maskId = `${id}-vscode-insiders-a`;
  const topShadowFilterId = `${id}-vscode-insiders-b`;
  const sideShadowFilterId = `${id}-vscode-insiders-c`;
  const overlayGradientId = `${id}-vscode-insiders-d`;

  return (
    <svg {...props} fill="none" viewBox="0 0 100 100">
      <mask id={maskId} width="100" height="100" x="0" y="0" maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M70.912 99.317a6.223 6.223 0 0 0 4.96-.19l20.589-9.907A6.25 6.25 0 0 0 100 83.587V16.413a6.25 6.25 0 0 0-3.54-5.632L75.874.874a6.226 6.226 0 0 0-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 0 0-5.318.236l-5.506 5.009a4.168 4.168 0 0 0-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 0 0 .004 6.162l5.506 5.01a4.162 4.162 0 0 0 5.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 0 0 2.143 1.4ZM75.015 27.3 45.11 50l29.906 22.701V27.3Z"
          clipRule="evenodd"
        />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path
          fill="#009a7c"
          d="M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z"
        />
        <g filter={`url(#${topShadowFilterId})`}>
          <path
            fill="#00b294"
            d="m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z"
          />
        </g>
        <g filter={`url(#${sideShadowFilterId})`}>
          <path
            fill="#24bfa5"
            d="M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z"
          />
        </g>
        <path
          fill={`url(#${overlayGradientId})`}
          fillRule="evenodd"
          d="M70.851 99.317a6.224 6.224 0 0 0 4.96-.19L96.4 89.22a6.25 6.25 0 0 0 3.54-5.633V16.413a6.25 6.25 0 0 0-3.54-5.632L75.812.874a6.226 6.226 0 0 0-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 0 0-5.317.236l-5.507 5.009a4.168 4.168 0 0 0-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 0 0 .004 6.162l5.507 5.009a4.162 4.162 0 0 0 5.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 0 0 2.143 1.4ZM74.954 27.3 45.048 50l29.906 22.701V27.3Z"
          clipRule="evenodd"
          opacity=".25"
          style={{ mixBlendMode: "overlay" }}
        />
      </g>
      <defs>
        <filter
          id={topShadowFilterId}
          width="116.727"
          height="92.246"
          x="-8.394"
          y="15.829"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="4.167" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id={sideShadowFilterId}
          width="47.917"
          height="116.151"
          x="60.417"
          y="-8.076"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="4.167" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient
          id={overlayGradientId}
          x1="49.939"
          x2="49.939"
          y1=".258"
          y2="99.742"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const VSCodium: Icon = (props) => {
  const id = useId();
  const gradientId = `${id}-vscodium-gradient`;

  return (
    <svg {...props} viewBox="0 0 100 100">
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          x2="100"
          y1="0"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#62A0EA" />
          <stop offset="1" stopColor="#1A5FB4" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M48.26 2.274C45.406 4.105 44.583 7.898 46.422 10.742C56.531 26.397 58.917 38.205 57.882 48.553C53.698 68.369 44.603 72.389 36.655 72.389C28.895 72.389 30.973 59.618 36.806 55.88C40.288 53.706 44.748 52.293 48.171 52.293C51.563 52.293 54.313 49.552 54.313 46.17C54.313 42.787 51.563 40.046 48.171 40.046C44.173 40.046 40.251 40.886 36.59 42.316C37.338 38.787 37.614 34.973 36.647 30.919C35.179 24.763 30.953 18.883 23.615 13.183C22.33 12.183 20.7 11.734 19.083 11.934C17.466 12.134 15.995 12.966 14.994 14.248C12.912 16.918 13.394 20.766 16.072 22.843C22.05 27.486 24.024 30.923 24.699 33.752C25.374 36.581 24.831 39.616 23.475 43.786C21.742 49.406 19.73 54.423 18.848 59.234C18.414 61.602 18.377 64.179 18.265 66.238C13.96 62.042 12.275 56.502 12.275 48.407C12.274 45.025 9.524 42.283 6.133 42.284C2.744 42.287-0.002 45.027-0.003 48.407C-0.003 59.463 3.23 69.983 11.895 77.001C19.739 84.474 39.686 81.712 39.686 93.709C39.686 97.095 44.642 98.743 48.033 98.743C51.511 98.743 55.888 96.418 55.888 93.709C55.888 80.097 70.233 71.824 93.848 71.86C97.24 71.865 99.992 69.126 99.997 65.744C100.003 62.361 97.259 59.614 93.867 59.608C92.252 59.606 90.678 59.661 89.126 59.753C91.766 53.544 92.937 46.708 92.695 39.324C92.583 35.943 89.745 33.293 86.356 33.403C82.963 33.513 80.305 36.346 80.416 39.729C80.736 49.397 80.374 58.03 73.171 62.581C71.123 63.874 68.742 64.996 66.484 64.996C68.237 60.228 69.561 55.195 70.103 49.77C70.449 46.308 70.486 42.195 70.091 39C69.478 34.05 68.738 28.436 70.617 24.207C72.305 20.565 76.087 19.04 81.64 19.04C85.029 19.037 87.775 16.296 87.776 12.917C87.778 9.534 85.031 6.79 81.64 6.787C73.388 6.787 67.133 11.13 63.587 16.377C61.733 12.417 59.475 8.336 56.747 4.112C55.866 2.747 54.478 1.788 52.887 1.443C52.099 1.272 51.285 1.257 50.491 1.399C49.697 1.542 48.939 1.839 48.26 2.274z"
      />
    </svg>
  );
};

export const Zed: Icon = (props) => {
  const id = useId();
  const clipPathId = `${id}-zed-logo-a`;

  return (
    <svg {...props} fill="none" viewBox="0 0 96 96">
      <g clipPath={`url(#${clipPathId})`}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9 6a3 3 0 0 0-3 3v66H0V9a9 9 0 0 1 9-9h80.379c4.009 0 6.016 4.847 3.182 7.682L43.055 57.187H57V51h6v7.688a4.5 4.5 0 0 1-4.5 4.5H37.055L26.743 73.5H73.5V36h6v37.5a6 6 0 0 1-6 6H20.743L10.243 90H87a3 3 0 0 0 3-3V21h6v66a9 9 0 0 1-9 9H6.621c-4.009 0-6.016-4.847-3.182-7.682L52.757 39H39v6h-6v-7.5a4.5 4.5 0 0 1 4.5-4.5h21.257l10.5-10.5H22.5V60h-6V22.5a6 6 0 0 1 6-6h52.757L85.757 6H9Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id={clipPathId}>
          <path fill="#fff" d="M0 0h96v96H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const OpenAI: Icon = ({ className, ...props }) => (
  <svg
    {...props}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 260"
    className={cn("fill-black dark:fill-white", className)}
  >
    <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z" />
  </svg>
);

export const ClaudeAI: Icon = ({ className, ...props }) => (
  <svg
    {...props}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 257"
    className={cn("fill-[#d97757]", className)}
  >
    <path d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z" />
  </svg>
);

export const Gemini: Icon = (props) => (
  <svg {...props} viewBox="0 0 296 298" fill="none">
    <mask
      id="gemini__a"
      width="296"
      height="298"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path
        fill="#3186FF"
        d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"
      />
    </mask>
    <g mask="url(#gemini__a)">
      <g filter="url(#gemini__b)">
        <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159" />
      </g>
      <g filter="url(#gemini__c)">
        <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5" />
      </g>
      <g filter="url(#gemini__d)">
        <ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5" />
      </g>
      <g filter="url(#gemini__e)">
        <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z" />
      </g>
      <g filter="url(#gemini__f)">
        <path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z" />
      </g>
      <g filter="url(#gemini__g)">
        <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z" />
      </g>
      <g filter="url(#gemini__h)">
        <path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z" />
      </g>
    </g>
    <defs>
      <filter
        id="gemini__b"
        width="464"
        height="390"
        x="-69"
        y="-46"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="18" />
      </filter>
      <filter
        id="gemini__c"
        width="265"
        height="273"
        x="-99"
        y="6"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" />
      </filter>
      <filter
        id="gemini__d"
        width="265"
        height="273"
        x="-113"
        y="12"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" />
      </filter>
      <filter
        id="gemini__e"
        width="299.5"
        height="329"
        x="-41.5"
        y="-130"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" />
      </filter>
      <filter
        id="gemini__f"
        width="299.5"
        height="329"
        x="-45"
        y="-153"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" />
      </filter>
      <filter
        id="gemini__g"
        width="299.5"
        height="329"
        x="-41"
        y="91"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" />
      </filter>
      <filter
        id="gemini__h"
        width="299.5"
        height="329"
        x="-39"
        y="132"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" />
      </filter>
    </defs>
  </svg>
);

const ANTIGRAVITY_ICON_DATA_URL =
  "data:image/png;base64,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";

export const AntigravityIcon: Icon = (props) => (
  <svg {...props} viewBox="0 0 128 128" fill="none">
    <image href={ANTIGRAVITY_ICON_DATA_URL} width="128" height="128" />
  </svg>
);

const FORK_ICON_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kctLQkEUhz8tScowqIWLCAlrZdEDpDZBSlQgIWbQa6O3qwY+LvcqIW2DtkJB1KbXov6C2gatg6AogmjRqnVRm4rbuRkYkWc4c775zZzDzBmwxzJK1qjvg2yuoEfHg97ZuXlvwyNOOmjFgSeuGNpoJBKmpr3dYLPiVY9Vq/a5f61pSTUUsDmFRxRNLwhPCIdXCprFm8JtSjq+JHws7NflgsLXlp6o8JPFqQp/WKzHoiGwtwh7U7848YuVtJ4Vlpfjy2aKys99rJe41NzMtMRO8XYMoowTxMskY4QI0M+wzAF6GKBXVtTI7/vOnyIvuYrMGiV0lkmRpoBf1KJUVyUmRVdlZChZ/f/bVyM5OFCp7gqC48E0X7qgYQM+y6b5vm+anwdQdw9nuWp+fg+GXkUvVzXfLrjX4OS8qiW24HQdPHdaXI9/S3Xi9mQSno+geQ5aL6FxodKzn30ObyG2Kl91Ads70C3n3YtfLHpnyzKj8LMAAAAJcEhZcwAACxMAAAsTAQCanBgAACAASURBVHic7L15uGVFeS/8e6vW2vvMp5tuvjC1YsvQQIPMBCci0WjEiIJEopIgEmeIRPkg8Ulyrxfv1cRPjAMGwfhxn5gYc2li1CTKlydinADxiSOIAUEQFOh5OHvvtare74+qt9a7aq/ToDZNI6f62b33WUOtWjW8w+8dClgqS2WpLJWlslSWylJZKktlqSyVpbJUlspSWSpLZakslaWyVJbKUlkqS2WpLJWlslSWylJZKktlqSyVpbJUlspSWSpLZak8Dgs91g1YKrus7O6x5N38vKXyKJQlAvD4Kzsbs5/3XFfZ2QL/ec8tlT2sFI91A5bKomWxBUuP4Pcj+fvhSr6Qd/b3I1n0S4RhDyxLEsCeU7rGghb5lt9d57uuXaz+nZXFFjxnv/Nj+fGuuhY7tlR2c1kiAI9debgFv7PfrWOrV68uLrzwwsMPOOCAY5YtW3ZIr9ebL8tytizL6V6vJ5/JXq83WZblZL/f7/d6vYl+v98DgOFwOBqNRoPhcDisqmphNBrJZ/toNNpeVdX2qqq2jkajzZs2bbr97rvv/saHPvShW++8884a40QgJxA7Ixy6LBGEx6AsEYDdWxbjyjtb5PIxF1544d7HHnvscXvvvfeRy5cvX7N8+fKnLF++/IAVK1asLIqi3B0vIKWu62r9+vUPbdy48d6NGzf+cOPGjbc9+OCD3/rGN77xjfe///0PAvAYJwqPlCAsEYPdVJYIwKNfuhb9YgveyO+zzz57/qUvfelvrlq16vn77rvv01asWLHv7Ozs7GIPYebWRx8jInjvW9fqb2NMuk6KMabdaKJ03hjTujYvW7du3bp+/fr777///m/ec889n7vuuuv+5ROf+MRmhIXdRRjQ8TfU8aXyKJUlAvDolIdb9AbZoj/llFOmzj///OcfeOCBzz/ggANOXLVq1Wpr7RhI671vLXT9t16U8rcscgDpvD6nj8k1+nd+rvVSkSgIQZDfeXHO1ffcc8+d995774133XXXv1599dXX33DDDTswThCESi0Rg91UlgjAriuLifdGfacFf9RRR/Uvuuii5xx44IEvXLVq1a8+6UlPOrgsy56uwHsP59xOF/lOG5QteP2761heZxcBWYzQ6HuFIBhj0keXqqpGP/rRj35wzz33fO2uu+7658svv/zfv/Wtbw3RJghCDDRR0GWJGOyCskQAfvHSZYrrEuvNXnvtVVx++eUvXLt27Xlr1qx55tTU1KSuyHufFv3DLW5gnAAstmAXu6Zr0Xdd21WPvj+vo4tQaGKQE4QdO3Ys3HbbbV/6zne+89cXXXTRP2/YsKFGmxB0qQvo+L1UfsayRAB+/tJlkssXvgFg3vve9x55wgknvOmwww57wYoVK1bITZrDO+dCRdmi29ki3hlXz8tiqoCur6v+nakDXarBIyEURARrbSdBWL9+/fpbb731X26++eYr/vAP//DbCARAPosBisASIfi5yhIB+NnLYgtfi/jmggsu2Pe000577Zo1a8548pOf/FS5QRZ7XdedCzsvO1u4+T2L6fRd9e1skS9WHslzF3v2zgiWqAtFUbSIwd13333Hbbfdtu6zn/3sRz7wgQ/cjzYh6JIMgCVC8DOVJQLwyMvOFr4BYI466qj+n/7pn75qzZo1rzz00EOPK4qiAMKEd86hqqpUQddClOOLcX1972IL7uepK7/3kUoUXRhC17mu+hd7JhGhKApYa1MddV3X3//+92+57bbbPv6Od7zjbyJesJhkkJrR2fCl0ipLBODhS9fCb3H7U045ZfqSSy75wxNP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"

export const ForkIcon: Icon = (props) => (
  <svg {...props} viewBox="0 0 128 128" fill="none">
    <image href={FORK_ICON_DATA_URL} width="128" height="128" />
  </svg>
);

export const OpenCodeIcon: Icon = (props) => (
  <svg {...props} viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#opencode__clip0_1311_94969)">
      <path className="dark:hidden" d="M24 32H8V16H24V32Z" fill="#CFCECD" />
      <path className="dark:hidden" d="M24 8H8V32H24V8ZM32 40H0V0H32V40Z" fill="#211E1E" />
      <path className="hidden dark:block" d="M24 32H8V16H24V32Z" fill="#4B4646" />
      <path className="hidden dark:block" d="M24 8H8V32H24V8ZM32 40H0V0H32V40Z" fill="#F1ECEC" />
    </g>
    <defs>
      <clipPath id="opencode__clip0_1311_94969">
        <rect width="32" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const GithubCopilotIcon: Icon = ({ className, ...props }) => (
  <svg
    {...props}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 208"
    className={cn("fill-black dark:fill-white", className)}
  >
    <path d="M205.3 31.4c14 14.8 20 35.2 22.5 63.6 6.6 0 12.8 1.5 17 7.2l7.8 10.6c2.2 3 3.4 6.6 3.4 10.4v28.7a12 12 0 0 1-4.8 9.5C215.9 187.2 172.3 208 128 208c-49 0-98.2-28.3-123.2-46.6a12 12 0 0 1-4.8-9.5v-28.7c0-3.8 1.2-7.4 3.4-10.5l7.8-10.5c4.2-5.7 10.4-7.2 17-7.2 2.5-28.4 8.4-48.8 22.5-63.6C77.3 3.2 112.6 0 127.6 0h.4c14.7 0 50.4 2.9 77.3 31.4ZM128 78.7c-3 0-6.5.2-10.3.6a27.1 27.1 0 0 1-6 12.1 45 45 0 0 1-32 13c-6.8 0-13.9-1.5-19.7-5.2-5.5 1.9-10.8 4.5-11.2 11-.5 12.2-.6 24.5-.6 36.8 0 6.1 0 12.3-.2 18.5 0 3.6 2.2 6.9 5.5 8.4C79.9 185.9 105 192 128 192s48-6 74.5-18.1a9.4 9.4 0 0 0 5.5-8.4c.3-18.4 0-37-.8-55.3-.4-6.6-5.7-9.1-11.2-11-5.8 3.7-13 5.1-19.7 5.1a45 45 0 0 1-32-12.9 27.1 27.1 0 0 1-6-12.1c-3.4-.4-6.9-.5-10.3-.6Zm-27 44c5.8 0 10.5 4.6 10.5 10.4v19.2a10.4 10.4 0 0 1-20.8 0V133c0-5.8 4.6-10.4 10.4-10.4Zm53.4 0c5.8 0 10.4 4.6 10.4 10.4v19.2a10.4 10.4 0 0 1-20.8 0V133c0-5.8 4.7-10.4 10.4-10.4Zm-73-94.4c-11.2 1.1-20.6 4.8-25.4 10-10.4 11.3-8.2 40.1-2.2 46.2A31.2 31.2 0 0 0 75 91.7c6.8 0 19.6-1.5 30.1-12.2 4.7-4.5 7.5-15.7 7.2-27-.3-9.1-2.9-16.7-6.7-19.9-4.2-3.6-13.6-5.2-24.2-4.3Zm69 4.3c-3.8 3.2-6.4 10.8-6.7 19.9-.3 11.3 2.5 22.5 7.2 27a41.7 41.7 0 0 0 30 12.2c8.9 0 17-2.9 21.3-7.2 6-6.1 8.2-34.9-2.2-46.3-4.8-5-14.2-8.8-25.4-9.9-10.6-1-20 .7-24.2 4.3ZM128 56c-2.6 0-5.6.2-9 .5.4 1.7.5 3.7.7 5.7 0 1.5 0 3-.2 4.5 3.2-.3 6-.3 8.5-.3 2.6 0 5.3 0 8.5.3-.2-1.6-.2-3-.2-4.5.2-2 .3-4 .7-5.7-3.4-.3-6.4-.5-9-.5Z" />
  </svg>
);

export const ACPRegistryIcon: Icon = ({ className, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 576 220"
    fill="none"
    className={cn("fill-black dark:fill-white", className)}
  >
    <path d="M568.003 115.821L517.278 27.9661C507.183 10.4816 489.084 0.0227367 468.894 0.0227367C448.727 0.0227367 430.674 10.4361 420.556 27.8752L343.251 161.749H242.755C236.23 161.749 230.386 158.384 227.135 152.745C223.861 147.106 223.861 140.376 227.135 134.715L277.861 46.8603C281.112 41.2216 286.955 37.8338 293.481 37.8338C300.006 37.8338 305.827 41.1988 309.101 46.8603L312.125 52.0897C313.353 54.2042 315.604 55.5002 318.036 55.5002C320.469 55.5002 322.743 54.1815 323.948 52.067L337.385 28.5118C338.795 26.0335 338.522 22.9413 336.703 20.7586C325.699 7.57131 309.874 0 293.322 0C292.662 0 292.003 0 291.321 0.0454733C272.04 0.75031 254.76 11.1864 245.074 27.9434L200.215 105.657L155.81 29.1484C145.465 11.2092 126.594 0.0227367 106.608 0.0227367C105.949 0.0227367 105.289 0.0227367 104.607 0.06821C85.3265 0.773047 68.0467 11.2092 58.3608 27.9661L7.65806 115.821C-6.25678 139.899 -0.868187 168.82 21.05 187.759C29.8945 195.422 41.6039 199.628 54.0181 199.628H148.648C151.081 199.628 153.332 198.332 154.56 196.217L168.52 172.026C169.748 169.911 169.748 167.319 168.52 165.205C167.292 163.09 165.041 161.794 162.608 161.794H56.0417C49.5163 161.794 43.6729 158.429 40.4216 152.79C37.1475 147.152 37.1475 140.422 40.4216 134.76L91.1471 46.9057C94.3985 41.2671 100.242 37.8793 106.767 37.8793C113.293 37.8793 119.113 41.2443 122.387 46.9057L194.826 172.526C195.031 172.89 195.258 173.208 195.531 173.526C198.76 178.665 202.83 183.485 207.786 187.782C216.631 195.444 228.34 199.651 240.754 199.651H321.424L315.581 209.769C314.353 211.883 314.353 214.475 315.581 216.59C316.809 218.704 319.059 220 321.492 220H349.436C351.868 220 354.119 218.704 355.347 216.59L364.396 200.901L367.17 196.468C367.17 196.468 367.261 196.331 367.284 196.263L453.274 46.9285C456.525 41.2898 462.369 37.902 468.894 37.902C475.42 37.902 481.263 41.2671 484.514 46.9285L535.24 134.783C538.491 140.422 538.514 147.174 535.24 152.813C531.988 158.452 526.145 161.84 519.62 161.84H418.669C416.236 161.84 413.985 163.136 412.757 165.25L398.774 189.442C397.546 191.556 397.546 194.148 398.774 196.263C400.002 198.377 402.253 199.673 404.686 199.673H518.21C539.81 199.673 559.295 188.237 569.026 169.843C578.053 152.79 577.666 132.623 567.981 115.843L568.003 115.821Z" />
  </svg>
);

export const PiAgentIcon: Icon = ({ className, ...props }) => (
  <svg {...props} viewBox="0 0 800 800" className={cn("fill-none", className)}>
    <rect width="800" height="800" rx="160" fill="#000" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M165.29 165.29H517.36V400H400V517.36H282.65V634.72H165.29ZM282.65 282.65V400H400V282.65Z"
    />
    <path fill="#fff" d="M517.36 400H634.72V634.72H517.36Z" />
  </svg>
);
