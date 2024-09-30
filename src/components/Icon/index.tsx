import React from "react";
import { contentTypes, Icons } from "../../shared/iconTypes/icons";

interface IconProps {
  name: keyof typeof contentTypes;
  size?: number;
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Icon = ({
  name,
  size = 24,
  color = "black",
  onClick,
  style = {},
}: IconProps) => {
  const IconComponent = Icons[contentTypes[name]];

  return IconComponent ? (
    <>
      <IconComponent
        size={size}
        color={color}
        onClick={onClick}
        style={style}
      />
    </>
  ) : (
    <div>Icono no encontrado</div>
  );
};
