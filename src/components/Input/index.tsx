import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Icon } from "../Icon";
import { colors } from "../../theme/colors";

interface Props {
  sx?: React.CSSProperties;
  placeholder?: string;
  label?: string;
  type: "text" | "password" | "email" | "number";
  slotPropPosition?: "start" | "end";
  slotPropsChildren?: React.ReactNode;
  endAdornment?: React.ReactNode;
  endAddornmentPosition?: "start" | "end";
  iconPasswordColor?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = ({
  sx,
  placeholder,
  label,
  type,
  slotPropPosition = "start",
  slotPropsChildren,
  endAddornmentPosition = "end",
  endAdornment,
  iconPasswordColor = "black",
  value,
  onChange,
  onBlur,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <TextField
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type === "password" ? (showPassword ? "text" : "password") : type}
      label={label}
      variant="outlined"
      placeholder={placeholder}
      style={{ color: "white" }}
      sx={{
        ...sx,
        width: "100%",
        marginTop: "20px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
            borderBottom: `2px solid ${colors.accent["500"]}`,
            color: "white",
          },
          "&:hover fieldset": {
            borderBottom: `2px solid ${colors.accent["500"]}`,
            color: "white",
          },
          "&.Mui-focused fieldset": {
            border: `2px solid ${colors.accent["500"]}`,
            color: colors.accent["500"],
          },
        },
        "& .MuiInputBase-input": {
          color: colors.accent["500"],
        },
        "& .MuiInputLabel-root": {
          color: colors.accent["500"],
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: colors.accent["500"],
        },
      }}
      slotProps={{
        input: {
          startAdornment: slotPropsChildren && (
            <InputAdornment position={slotPropPosition}>
              {slotPropsChildren}
            </InputAdornment>
          ),
          endAdornment:
            type === "password" ? (
              <InputAdornment position={"end"}>
                <Icon
                  style={{ cursor: "pointer" }}
                  name={showPassword ? "EyeSlash" : "Eye"}
                  color={iconPasswordColor}
                  onClick={handleClickShowPassword}
                />
              </InputAdornment>
            ) : (
              endAdornment && (
                <InputAdornment position={endAddornmentPosition}>
                  {endAdornment}
                </InputAdornment>
              )
            ),
        },
      }}
    />
  );
};
