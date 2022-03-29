import { ANIM_FUNCTION } from "constants/animation";
import { KEYFRAME_NAMES, EXPAND_KEYFRAMES } from "constants/css.keyframes";
import Colors from "constants/colors";
import { CARD_SHADOW } from "constants/mixins";
import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;
`;

export const LogoWrapper = styled.div`
  width: 250px;

  svg {
    width: 100%;
  }
`;

export const Label = styled.div`
  overflow: hidden;
  margin-top: 7vh;
  font-size: 1.1em;
  animation: ${KEYFRAME_NAMES.SCALE_IN} ${ANIM_FUNCTION.SMOOTH_BOUNCE} 300ms;
`;

export const Form = styled.div`
  margin: 20px 0;
  width: 600px;
  padding: 40px 50px;
  ${CARD_SHADOW()}
  ${EXPAND_KEYFRAMES("login-form-expand", 800, 600, 300)}
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
`;

export const Link = styled.div`
  display: flex;
  color: ${Colors.GRAY};

  span {
    margin-right: 5px;
  }
`;
