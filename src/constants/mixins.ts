import { ANIM_FUNCTION, ANIM_NAMES } from "./animation";
import { COLORS_HEX } from "./colors";

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
            background: ${COLORS_HEX.WHITE};
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

export const SCALE_ANIMATION = (duration: number = 200) => `
  transition: ${duration}ms ${ANIM_FUNCTION.SMOOTH_BOUNCE} all;

  &.${ANIM_NAMES.SCALE}-enter-active,
  &.${ANIM_NAMES.SCALE}-exit {
    opacity: 1;
    transform: scale(100%) translateY(0);
  }

  &.${ANIM_NAMES.SCALE}-enter,
  &.${ANIM_NAMES.SCALE}-exit-active {
    opacity: 0;
    transform: scale(0) translateY(100%);
  }
`;

export const FADE_ANIMATION = (duration: number = 200) => `
  transition: ${duration}ms ${ANIM_FUNCTION.SMOOTH_BOUNCE} all;
  
  &.${ANIM_NAMES.FADE}-enter-active,
  &.${ANIM_NAMES.FADE}-exit {
    opacity: 1;
  }

  &.${ANIM_NAMES.FADE}-enter,
  &.${ANIM_NAMES.FADE}-exit-active {
    opacity: 0;
  }
`;
