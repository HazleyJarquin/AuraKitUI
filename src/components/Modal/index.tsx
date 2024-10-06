import React from "react";
import { Box, Modal as MUIModal } from "@mui/material";
import { IconButton } from "../IconButton";
import { colors } from "../../theme/colors";

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  borderRadius: "8px",
  p: 4,
};

export const Modal = ({ open, onClose, children, title }: Props) => {
  return (
    <MUIModal
      open={open}
      onClose={onClose}
      sx={{
        backdropFilter: "blur(8px)",
      }}
    >
      <Box sx={style}>
        <Box
          display="flex"
          justifyContent={title ? "space-between" : "flex-end"}
          alignItems="center"
        >
          {title && <h2 style={{ color: colors.accent["500"] }}>{title}</h2>}
          <IconButton
            icon="Close"
            iconSize={24}
            mode="quaternary"
            iconColor={colors.accent["500"]}
            onClick={onClose}
          />
        </Box>
        <Box>{children}</Box>
      </Box>
    </MUIModal>
  );
};
