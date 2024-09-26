import { colors } from "../../../theme/colors";

export const styleMode = {
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
  text: {
    backgroundColor: "transparent",
    color: colors.accent[500],
  },
};

export const styleModeDisabled = {
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
  text: {
    backgroundColor: "transparent",
    color: colors.neutral[400],
  },
};
