import styled from "styled-components";

import {
  CARD_SHADOW,
  FADE_ANIMATION,
  FLEX_CENTERED,
  FLEX_SPACE_BETWEEN,
} from "../../../constants/mixins";

export const ModalWrapper = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  ${FLEX_CENTERED()}
  ${FADE_ANIMATION(100)}
`;

export const Modal = styled.div`
  border-radius: 10px;
  padding: 30px;
  max-width: 80vw;
  ${CARD_SHADOW()}
`;

export const Header = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  text-align: center;
  width: 100%;
`;

export const Body = styled.div`
  padding: 30px 0;
`;

export const Footer = styled.div`
  ${FLEX_SPACE_BETWEEN("row")}
  gap: 10px;
  button {
    width: 100%;
  }
`;
