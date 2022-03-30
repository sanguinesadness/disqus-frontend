import { COLORS_HEX } from "constants/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  min-width: 500px;
`;

export const Header = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  color: ${COLORS_HEX.GREEN};
  font-weight: 600;
  font-size: 1.3em;
  text-align: center;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const Token = styled.span`
  font-family: "Fira Code", monospace;
`;

export const Illustration = styled.div`
  height: 200px;
  margin: 10px 0;

  svg {
    height: 100%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const Strong = styled.span`
  font-weight: 500;
`;
