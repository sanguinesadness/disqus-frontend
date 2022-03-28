import { AnimationFunctions } from "./anim.functions";
import Colors from "./colors";

export const FLEX_CENTERED = (direction?: string) => `
    display: flex;
    flex-direction: ${direction || "row"};
    justify-content: center;
    align-items: center;
`;

export const FLEX_START = (direction?: string) => `
    display: flex;
    flex-direction: ${direction || "row"};
    justify-content: flex-start;
    align-items: center;
`;

export const FLEX_SPACE_BETWEEN = (direction?: string) => `
    display: flex;
    flex-direction: ${direction || "row"};
    justify-content: space-between;
    align-items: center;
`;

export const TEXT_ELLIPSIS = (showFull?: boolean) => `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${
      showFull
        ? `&:hover {
            transition: 400ms ease all;
            background: ${Colors.WHITE};
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            white-space: wrap;
            overflow: visible;
            padding: 5px 10px;
            position: absolute;
        }`
        : ""
    }
`;

export const SCALE_ONHOVER = (duration?: number, scale?: number) => `
    transition: ${duration || 300}ms ease all;
    &:hover {
        transform: scale(${scale || 0.95});
    }
`;

export const SCALE_ONCLICK = (duration?: number, scale?: number) => `
    transition: ${duration || 300}ms ease all;
    &:active {
        transform: scale(${scale || 0.95});
    }
`;

export const CARD_SHADOW = () => `
  background: #FFFFFF;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

export const SCALE_ANIMATION = (
  duration: number = 200,
  from: "top" | "center" | "bottom"
) => `
  transition: ${duration}ms ${AnimationFunctions.SMOOTH_BOUNCE} all;
  transform-origin: ${from};

  &.scale-in-enter-active,
  &.scale-in-exit {
    opacity: 1;
    transform: ${
      from === "top" || from === "bottom" ? "scaleY(100%)" : "scale(100%)"
    };
  }

  &.scale-in-enter,
  &.scale-in-exit-active {
    opacity: 0;
    transform: ${
      from === "top" || from === "bottom" ? "scaleY(0)" : "scale(0)"
    };
  }
`;

export const FADE_ANIMATION = (duration: number = 200) => `
  transition: ${duration}ms ${AnimationFunctions.SMOOTH_BOUNCE} all;
  
  &.fade-enter-active,
  &.fade-exit {
    opacity: 1;
  }

  &.fade-enter,
  &.fade-exit-active {
    opacity: 0;
  }
`;
