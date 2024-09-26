import { Button as MaterialButton, ButtonProps } from "@mui/material";
import { styleMode, styleModeDisabled } from "./types";

interface CustomButtonProps extends Omit<ButtonProps, "variant"> {
  label: string;
  onClick: () => void;
  mode?: "primary" | "secondary" | "tertiary" | "text";
  style?: React.CSSProperties;
}

export const Button = ({
  label,
  onClick,
  mode = "primary",
  style = {},
  disabled,
}: CustomButtonProps) => {
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
