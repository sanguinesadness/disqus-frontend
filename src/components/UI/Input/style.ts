import styled from "styled-components";
import Colors from "constants/colors";

export const Label = styled.div`
  padding: 0 15px;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div``;

interface InputProps {
  error?: boolean;
}

export const Input = styled.input<InputProps>`
  border: 1px solid #ebebeb !important;
  border-radius: 10px;
  padding: 8px 15px;
  width: 100%;
  font-weight: 300;
  ${(props) =>
    props.error &&
    `
  box-shadow: 0 0 5px #FF0000;
  border-color: ${Colors.RED};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  &:hover ${InputWrapper} ${Input} {
    caret-color: black;
  }
`;
