import { COLORS_HEX } from "constants/colors";
import {
  FLEX_CENTERED,
  SCALE_ANIMATION,
  SCALE_ONCLICK,
} from "constants/mixins";
import { ToastType } from "stores/toastsStore";
import styled from "styled-components";

interface ToastProps {
  type: ToastType;
}

export const ToastsWrapper = styled.div`
  height: 10vh;
  width: 100vw;
  background: ${COLORS_HEX.TRANSPARENT};
  bottom: 40px;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Toast = styled.div<ToastProps>`
  position: relative;
  padding: 8px 20px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  font-weight: 400;
  ${FLEX_CENTERED()}
  ${SCALE_ANIMATION(300)}
  background: ${(props) => props.type === "success" && COLORS_HEX.GREEN};
  background: ${(props) => props.type === "error" && COLORS_HEX.LIGHT_RED};
  background: ${(props) => props.type === "info" && COLORS_HEX.SEA};
`;

export const Message = styled.div`
  color: ${COLORS_HEX.WHITE};
  padding: 0 75px;
`;

export const Icon = styled.div`
  position: absolute;
  right: 20px;
  cursor: pointer;
  ${FLEX_CENTERED()}
  ${SCALE_ONCLICK()}

  svg {
    width: 18px;
    height: 18px;
    fill: ${COLORS_HEX.WHITE};
  }
`;
