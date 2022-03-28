import React, { FC, useEffect, useState } from "react";
import { TSvgIcon } from "types/svg.icon";
import * as SC from "./style";
import { ButtonColor, ButtonTypes } from "./types";

interface ButtonProps {
  onClick?: () => void;
  text?: string;
  icon?: TSvgIcon;
  color?: ButtonColor;
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({ text, icon, color, onClick, fullWidth }) => {
  const Icon = icon;
  const [type, setType] = useState<ButtonTypes>(ButtonTypes.TEXT_AND_ICON);

  useEffect(() => {
    if (text && icon) setType(ButtonTypes.TEXT_AND_ICON);
    if (text && !icon) setType(ButtonTypes.TEXT_ONLY);
    if (!text && icon) setType(ButtonTypes.ICON_ONLY);
    if (!text && !icon) setType(ButtonTypes.EMPTY);
  }, []);

  if (type === ButtonTypes.EMPTY) {
    return <></>;
  }

  return (
    <SC.Button color={color} onClick={onClick} fullWidth={fullWidth}>
      {Icon && (
        <SC.IconWrapper>
          <Icon />
        </SC.IconWrapper>
      )}
      {text && <SC.Text>{text}</SC.Text>}
    </SC.Button>
  );
};

export default Button;
