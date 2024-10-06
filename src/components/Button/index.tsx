import { Button as MaterialButton } from "@mui/material";
import { styleMode, styleModeDisabled } from "./types";
import React from "react";

interface Props {
  id?: string;
  label: string;
  onClick?: () => void;
  mode?: "primary" | "secondary" | "tertiary" | "text";
  style?: React.CSSProperties;
  disabled?: boolean;
}

export const Button = ({
  id,
  label,
  onClick,
  mode = "primary",
  style = {},
  disabled,
}: Props) => {
  return (
    <MaterialButton
      id={id}
      onClick={onClick}
      data-testid="custom-button"
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
