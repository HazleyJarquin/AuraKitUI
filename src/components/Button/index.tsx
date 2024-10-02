import { Button as MaterialButton } from "@mui/material";
import { styleMode, styleModeDisabled } from "./types";
import React from "react";
interface Props {
  label: string;
  onClick: () => void;
  mode?: "primary" | "secondary" | "tertiary" | "text";
  style?: React.CSSProperties;
  disabled?: boolean;
}

export const Button = ({
  label,
  onClick,
  mode = "primary",
  style = {},
  disabled,
}: Props) => {
  return (
    <MaterialButton
      onClick={onClick}
      style={{
        ...(disabled ? styleModeDisabled[mode] : styleMode[mode]),
        borderRadius: "10px",
        textTransform: "none",
        ...style,
      }}
      disabled={disabled}
    >
      {label}
    </MaterialButton>
  );
};
