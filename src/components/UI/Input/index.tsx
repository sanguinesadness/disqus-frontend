import React, { FC } from "react";
import { HTMLInputTypeAttribute } from "react";
import * as SC from "./style";

interface InputProps {
  value: string;
  label?: string;
  placeholder?: string;
  onValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  name?: string;
}

const Input: FC<InputProps> = ({
  label,
  value,
  placeholder,
  onValueChange,
  onKeyPress,
  type,
  name,
}) => {
  return (
    <SC.Wrapper>
      {label && <SC.Label>{label}</SC.Label>}
      <SC.InputWrapper>
        <SC.Input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onValueChange}
          onKeyPress={onKeyPress}
        />
      </SC.InputWrapper>
    </SC.Wrapper>
  );
};

export default Input;
