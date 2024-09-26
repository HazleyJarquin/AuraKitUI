import * as React from "react";
import Box from "@mui/material/Box";
import {
  Backdrop,
  SpeedDial as MUISpeedDial,
  SpeedDialAction as MUISpeedDialAction,
} from "@mui/material";
import { Icon } from "../Icon";
import { contentTypes } from "../../shared/iconTypes/icons";
import { colors } from "../../theme/colors";

interface SpeedDialIconProps {
  actions: {
    icon: keyof typeof contentTypes;
    name: string;
    onClick: () => void;
  }[];
  speedDialIcon: keyof typeof contentTypes;
  mode?: "primary" | "secondary" | "tertiary";
  style?: React.CSSProperties;
}

export const SpeedDial = ({
  actions,
  speedDialIcon,
  mode = "primary",
  style = {},
}: SpeedDialIconProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const speedDialStyle = {
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
  };

  const iconColor = speedDialStyle[mode].color;

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Backdrop open={open} />
      <MUISpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<Icon name={speedDialIcon} color={iconColor} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          style: {
            ...speedDialStyle[mode],
            borderRadius: "10px",
            boxShadow: "none",
            ...style,
          },
        }}
      >
        {actions.map((action) => (
          <MUISpeedDialAction
            key={action.name}
            icon={<Icon name={action.icon} color={iconColor} />}
            tooltipTitle={action.name}
            onClick={action.onClick}
            FabProps={{
              style: {
                ...speedDialStyle[mode],
                borderRadius: "10px",
                boxShadow: "none",
                ...style,
              },
            }}
          />
        ))}
      </MUISpeedDial>
    </Box>
  );
};
