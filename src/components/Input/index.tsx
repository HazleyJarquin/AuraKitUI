import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Icon } from "../Icon";

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
      style={{ color: "black" }}
      sx={{
        ...sx,
        width: "100%",
        marginTop: "20px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
            borderBottom: "2px solid #a5f3fc",
            color: "black",
          },
          "&:hover fieldset": {
            borderBottom: "2px solid #67e8f9",
          },
          "&.Mui-focused fieldset": {
            border: "2px solid #67e8f9",
          },
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
