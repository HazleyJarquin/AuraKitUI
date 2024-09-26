import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.accent[500],
      light: colors.accent[300],
      dark: colors.accent[700],
      contrastText: colors.text.inverse,
    },
    secondary: {
      main: colors.secondary[500],
      light: colors.secondary[300],
      dark: colors.secondary[700],
      contrastText: colors.text.inverse,
    },
    error: {
      main: colors.error[500],
      light: colors.error[300],
      dark: colors.error[700],
    },
    warning: {
      main: colors.warning[500],
    },
    info: {
      main: colors.info[500],
    },
    success: {
      main: colors.success[500],
    },

    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.muted,
    },
  },
  shadows: [
    "none",
    "0px 1px 2px rgba(0, 0, 0, 0.05)",
    "0px 4px 6px rgba(0, 0, 0, 0.1)",
    "0px 10px 15px rgba(0, 0, 0, 0.15)",
    "0px 20px 25px rgba(0, 0, 0, 0.2)",
    "0px 25px 30px rgba(0, 0, 0, 0.25)",
    "0px 30px 35px rgba(0, 0, 0, 0.3)",
    "0px 35px 40px rgba(0, 0, 0, 0.35)",
    "0px 40px 45px rgba(0, 0, 0, 0.4)",
    "0px 45px 50px rgba(0, 0, 0, 0.45)",
    "0px 50px 55px rgba(0, 0, 0, 0.5)",
    "0px 55px 60px rgba(0, 0, 0, 0.55)",
    "0px 60px 65px rgba(0, 0, 0, 0.6)",
    "0px 65px 70px rgba(0, 0, 0, 0.65)",
    "0px 70px 75px rgba(0, 0, 0, 0.7)",
    "0px 75px 80px rgba(0, 0, 0, 0.75)",
    "0px 80px 85px rgba(0, 0, 0, 0.8)",
    "0px 85px 90px rgba(0, 0, 0, 0.85)",
    "0px 90px 95px rgba(0, 0, 0, 0.9)",
    "0px 95px 100px rgba(0, 0, 0, 0.95)",
    "0px 100px 105px rgba(0, 0, 0, 1)",
    "0px 105px 110px rgba(0, 0, 0, 1.05)",
    "0px 110px 115px rgba(0, 0, 0, 1.1)",
    "0px 115px 120px rgba(0, 0, 0, 1.15)",
    "0px 120px 125px rgba(0, 0, 0, 1.2)",
  ],
});
