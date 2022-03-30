import styled from "styled-components";
import { COLORS_HEX, COLORS_RGB } from "constants/colors";
import { FLEX_CENTERED } from "constants/mixins";
import { ButtonColor } from "./types";

export const IconWrapper = styled.div`
  margin-right: 15px;
  ${FLEX_CENTERED()}
  svg {
    height: 20px;
    width: 20px;
  }
`;

export const Text = styled.div`
  ${FLEX_CENTERED()}
  text-align: center;
  width: 100%;
`;

interface ButtonProps {
  color?: ButtonColor;
  fullWidth?: boolean;
  light?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  cursor: pointer;
  padding: 10px 40px;
  border-radius: 10px;
  fill: ${COLORS_HEX.WHITE};
  color: ${COLORS_HEX.WHITE};
  background: ${COLORS_HEX.GRAY};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
  transition: 200ms ease all;
  font-weight: 400;
  max-height: 45px;
  ${(props) => (props.fullWidth ? `width: 100%;` : ``)}
  &:active {
    transform: scale(0.97);
  }
  ${(props) =>
    props.color === "green" &&
    `
    background: ${COLORS_HEX.GREEN};
    color: ${COLORS_HEX.WHITE};
    fill: ${COLORS_HEX.WHITE};
  `}

  ${(props) =>
    props.color === "green" &&
    props.light &&
    `
    background: rgba(${COLORS_RGB.GREEN}, 0.07);
    border: none;
    box-shadow: none;
    color: ${COLORS_HEX.GREEN};
    fill: ${COLORS_HEX.GREEN};
  `}

  ${(props) =>
    props.color === "red" &&
    `
    background: ${COLORS_HEX.RED};
    color: ${COLORS_HEX.WHITE};
    fill: ${COLORS_HEX.WHITE};`}
    ${(props) =>
    props.color === "transparent" &&
    `
      background: ${COLORS_HEX.TRANSPARENT};
      color: ${COLORS_HEX.BLACK};
      fill: ${COLORS_HEX.BLACK};
      box-shadow: none;
      &:hover {
        box-shadow: none;
        background: ${COLORS_HEX.LIGHT_GRAY};
      }
      `}
`;
