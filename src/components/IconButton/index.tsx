import { IconButton as MUIIconButton } from "@mui/material";
import { Icon } from "../Icon";
import { contentTypes } from "../../shared/iconTypes/icons";
import { colors } from "../../theme/colors";
import React from "react";
interface IconButtonProps {
  icon: keyof typeof contentTypes;
  iconSize?: number;
  iconColor?: string; // Agregamos la propiedad iconColor
  onClick?: () => void;
  mode?: "primary" | "secondary" | "tertiary" | "quaternary";
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const IconButton = ({
  icon,
  onClick,
  iconSize,
  iconColor, // La incluimos en las props
  mode = "primary",
  disabled = false,
  style = {},
}: IconButtonProps) => {
  const iconButtonStyleNoDisabled = {
    primary: {
      backgroundColor: colors.accent[500],
      color: "white",
    },
    secondary: {
      backgroundColor: "transparent",
      color: colors.accent[500],
      border: `1px dashed ${colors.accent[500]}`,
    },
    tertiary: {
      backgroundColor: "transparent",
      color: colors.accent[500],
      border: `1px solid ${colors.accent[500]}`,
    },
    quaternary: {
      backgroundColor: "transparent",
      color: colors.accent[500],
    },
  };

  const iconButtonStyleDisabled = {
    primary: {
      backgroundColor: colors.neutral[400],
      color: "white",
    },
    secondary: {
      backgroundColor: "transparent",
      color: colors.neutral[400],
      border: `1px dashed ${colors.neutral[400]}`,
    },
    tertiary: {
      backgroundColor: "transparent",
      color: colors.neutral[400],
      border: `1px solid ${colors.neutral[400]}`,
    },
    quaternary: {
      backgroundColor: "transparent",
      color: colors.neutral[400],
    },
  };

  const finalIconColor = iconColor
    ? iconColor
    : disabled
    ? iconButtonStyleDisabled[mode].color
    : iconButtonStyleNoDisabled[mode].color;

  return (
    <MUIIconButton
      style={{
        ...(disabled
          ? iconButtonStyleDisabled[mode]
          : iconButtonStyleNoDisabled[mode]),
        borderRadius: "10px",
        ...style,
      }}
      aria-label="iconButton"
      onClick={onClick}
      disabled={disabled}
    >
      <Icon name={icon} size={iconSize} color={finalIconColor} />
    </MUIIconButton>
  );
};
