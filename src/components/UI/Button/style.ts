import styled from "styled-components";
import Colors from "constants/colors";
import { FLEX_CENTERED } from "constants/mixins";
import { ButtonColor } from './types';

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
  fill: ${Colors.WHITE};
  color: ${Colors.WHITE};
  background: ${Colors.GRAY};
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
    background: ${Colors.GREEN};
    color: ${Colors.WHITE};
    fill: ${Colors.WHITE};
  `}
  ${(props) =>
    props.color === "red" &&
    `
    background: ${Colors.RED};
    color: ${Colors.WHITE};
    fill: ${Colors.WHITE};`}
    ${(props) =>
    props.color === "transparent" &&
    `
      background: ${Colors.TRANSPARENT};
      color: ${Colors.BLACK};
      fill: ${Colors.BLACK};
      box-shadow: none;
      &:hover {
        box-shadow: none;
        background: ${Colors.LIGHT_GRAY};
      }
      `}
`;
