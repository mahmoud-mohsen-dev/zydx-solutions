import * as React from "react";

import { IconSvgProps } from "@/types";

export const StarIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      {...props}
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0.227295L16.3202 9.40934L24.9456 5.49844L19.2135 13.0374L27.649 17.3426L18.1809 17.5614L20.0744 26.8409L14 19.5748L7.92563 26.8409L9.81914 17.5614L0.351009 17.3426L8.78655 13.0374L3.05436 5.49844L11.6798 9.40934L14 0.227295Z"
        fill="url(#paint0_linear_136_691)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_136_691"
          x1="14"
          y1="0.227295"
          x2="14"
          y2="28.2273"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#663ACD" />
          <stop offset="1" stopColor="#D0C2F0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

type WaveUnderlineProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  width?: number;
  height?: number;
};

export const WaveUnderline: React.FC<WaveUnderlineProps> = ({
  size = 88, // width
  width,
  height,
  ...props
}) => {
  // keep aspect ratio (88:12)
  const finalWidth = size || width || 88;
  const finalHeight = height || finalWidth / (88 / 12);

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 88 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M87 3.52648C81.3958 9.06132 73.9572 15.8731 68.9914 5.93397C64.6068 -2.84219 57.6882 1.72547 51.5843 7.0374C49.7576 8.62711 46.5319 11.1899 43.8329 10.6152C41.3167 10.0794 39.1522 6.25399 36.9503 4.86397C32.3923 1.98669 24.8291 6.34117 20.3784 7.73959C13.8672 9.78542 7.81678 11.6586 1 10.749"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const TickSquare: React.FC<IconSvgProps> = ({
  size = 18,
  width,
  height,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      d="M6.53449 16.221H10.7786C14.3154 16.221 15.7301 14.8063 15.7301 11.2695V7.02544C15.7301 3.48868 14.3154 2.07397 10.7786 2.07397H6.53449C2.99773 2.07397 1.58303 3.48868 1.58303 7.02544V11.2695C1.58303 14.8063 2.99773 16.221 6.53449 16.221Z"
      stroke="#663ACD"
      strokeWidth="1.06103"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.65031 9.14756L7.65211 11.1494L11.6628 7.14575"
      stroke="#663ACD"
      strokeWidth="1.06103"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TickCircle = () => {
  return (
    <div className="bg-violet-light flex h-[34px] w-[34px] items-center justify-center rounded-full">
      <TickSquare />
    </div>
  );
};

export const ArrowTopRight = ({
  size = 18,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg fill="none" height={size || height} width={size || width} {...props}>
    <path
      d="M4.50003 14.25L14.25 4.5M14.25 4.5V13.86M14.25 4.5H4.89003"
      stroke="currentColor"
      strokeWidth="1.125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EducareEkt = ({
  size = 37,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg fill="none" height={size || height} width={size || width} {...props}>
    <path
      d="M13.0001 8.61792L17.0501 12.6679C17.6501 13.2679 18.8501 13.2679 19.4501 12.6679L23.5001 8.61792C24.5501 7.56792 23.8001 5.61792 22.3001 5.61792H14.2001C12.7001 5.76792 11.9501 7.56792 13.0001 8.61792Z"
      stroke="#663ACD"
      strokeWidth="2.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.0001 29.3176L17.0501 25.2676C17.6501 24.6676 18.8501 24.6676 19.4501 25.2676L23.5001 29.3176C24.5501 30.3676 23.8001 32.3176 22.3001 32.3176H14.2001C12.7001 32.1676 11.9501 30.3676 13.0001 29.3176Z"
      stroke="#663ACD"
      strokeWidth="2.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.55002 18.218L6.85002 12.968C7.30002 12.068 8.50002 11.918 9.25002 12.668L14.5 17.918C15.1 18.518 15.1 19.418 14.5 20.018L9.25002 25.268C8.50002 26.018 7.45002 25.868 6.85002 24.968L3.55002 19.718C3.10002 19.268 3.10002 18.668 3.55002 18.218Z"
      stroke="#663ACD"
      strokeWidth="2.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32.95 18.2178L29.65 12.9678C29.2 12.2178 28 12.0678 27.25 12.6678L22 17.9178C21.4 18.5178 21.4 19.4178 22 20.0178L27.25 25.2678C28 26.0178 29.05 25.8678 29.65 24.9678L32.95 19.7178C33.4 19.2678 33.4 18.6678 32.95 18.2178Z"
      stroke="#663ACD"
      strokeWidth="2.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// export const Logo: React.FC<IconSvgProps> = ({
//   size = 36,
//   width,
//   height,
//   ...props
// }) => (
//   <svg
//     fill="none"
//     height={size || height}
//     viewBox="0 0 32 32"
//     width={size || width}
//     {...props}
//   >
//     <path
//       clipRule="evenodd"
//       d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
//       fill="currentColor"
//       fillRule="evenodd"
//     />
//   </svg>
// );

// export const TwitterIcon: React.FC<IconSvgProps> = ({
//   size = 24,
//   width,
//   height,
//   ...props
// }) => {
//   return (
//     <svg
//       height={size || height}
//       viewBox="0 0 24 24"
//       width={size || width}
//       {...props}
//     >
//       <path
//         d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// };

// export const GithubIcon: React.FC<IconSvgProps> = ({
//   size = 24,
//   width,
//   height,
//   ...props
// }) => {
//   return (
//     <svg
//       height={size || height}
//       viewBox="0 0 24 24"
//       width={size || width}
//       {...props}
//     >
//       <path
//         clipRule="evenodd"
//         d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
//         fill="currentColor"
//         fillRule="evenodd"
//       />
//     </svg>
//   );
// };

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

// export const HeartFilledIcon = ({
//   size = 24,
//   width,
//   height,
//   ...props
// }: IconSvgProps) => (
//   <svg
//     aria-hidden="true"
//     focusable="false"
//     height={size || height}
//     role="presentation"
//     viewBox="0 0 24 24"
//     width={size || width}
//     {...props}
//   >
//     <path
//       d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
//       fill="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={1.5}
//     />
//   </svg>
// );

// export const SearchIcon = (props: IconSvgProps) => (
//   <svg
//     aria-hidden="true"
//     fill="none"
//     focusable="false"
//     height="1em"
//     role="presentation"
//     viewBox="0 0 24 24"
//     width="1em"
//     {...props}
//   >
//     <path
//       d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//     />
//     <path
//       d="M22 22L20 20"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//     />
//   </svg>
// );
