import styled from "styled-components";

export const Label = styled.div`
  padding: 0 15px;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div``;

interface InputProps {
  concealed?: boolean;
}

export const Input = styled.input<InputProps>`
  border: 1px solid #ebebeb !important;
  border-radius: 10px;
  padding: 8px 15px;
  width: 100%;
  font-weight: 300;
`;

export const Wrapper = styled.div`
  width: 100%;
  &:hover ${InputWrapper} ${Input} {
    caret-color: black;
  }
`;
