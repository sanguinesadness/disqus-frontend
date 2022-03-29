import { ANIM_FUNCTION } from "./animation";

export enum KEYFRAME_NAMES {
  SCALE_IN = "scale-in",
  SCALE_OUT = "scale-out",
  SCALE_IN_X = "scale-in-x",
  SCALE_IN_Y = "scale-in-y",
  SCALE_OUT_X = "scale-out-x",
  SCALE_OUT_Y = "scale-out-y",
  ROTATE = 'rotate'
}

export const SCALE_IN_X = `
  @keyframes scale-in-x {
    0% {
      transform: scaleX(0);
    }

    100% {
      transform: scaleX(1);
    }
  }
`;

export const SCALE_OUT_X = `
  @keyframes scale-out-x {
    0% {
      transform: scaleX(1);
    }

    100% {
      transform: scaleX(0);
    }
  }
`;

export const SCALE_IN_Y = `
  @keyframes scale-in-y {
    0% {
      transform: scaleY(0);
    }

    100% {
      transform: scaleY(1);
    }
  }
`;

export const SCALE_OUT_Y = `
  @keyframes scale-out-y {
    0% {
      transform: scaleY(1);
    }

    100% {
      transform: scaleY(0);
    }
  }
`;

export const SCALE_IN = `
  @keyframes scale-in {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const SCALE_OUT = `
  @keyframes scale-out {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }
`;

export const ROTATE = `
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const EXPAND_KEYFRAMES = (
  name: string,
  widthFrom: number,
  widthTo: number,
  ms: number
) => `
  @keyframes ${name} {
    0% {
      width: ${widthFrom}px;
    }

    100% {
      width: ${widthTo}px;
    }
  }

  animation: ${name} ${ANIM_FUNCTION.SMOOTH_BOUNCE} ${ms}ms;
`;
