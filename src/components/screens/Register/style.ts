import Colors from "constants/colors";
import { CARD_SHADOW } from "constants/mixins";
import styled from "styled-components";

export const RegisterPage = styled.div`
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
  padding-top: 7vh;
  font-size: 1.1em;
`;

export const Form = styled.div`
  ${CARD_SHADOW()}
  margin: 20px 0;
  width: 800px;
  padding: 40px 50px;
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
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
