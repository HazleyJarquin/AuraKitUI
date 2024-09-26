import React from "react";
import { contentTypes, Icons } from "../../shared/iconTypes/icons";

interface IconProps {
  name: keyof typeof contentTypes;
  size?: number;
  color?: string;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "black",
  onClick,
}) => {
  const IconComponent = Icons[contentTypes[name]];

  return IconComponent ? (
    <div>
      <IconComponent size={size} color={color} onClick={onClick} />
    </div>
  ) : (
    <div>Icono no encontrado</div>
  );
};
