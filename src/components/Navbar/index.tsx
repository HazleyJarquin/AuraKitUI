import { AppBar, Toolbar, Typography } from "@mui/material";
import { Icon } from "../Icon";
import { colors } from "../../theme/colors";

interface Props {
  onBackIconClick: () => void;
  backIconColor?: string;
  navbarStyle?: React.CSSProperties;
  title: string;
  titleStyle?: React.CSSProperties;
  actions?: React.ReactNode;
}

export const Navbar = ({
  onBackIconClick,
  backIconColor = "white",
  navbarStyle = {
    background: colors.accent["500"],
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "none",
  },
  titleStyle = {
    color: "white",
  },
  title,
  actions,
}: Props) => {
  return (
    <AppBar position="static" style={{ boxShadow: "none" }}>
      <Toolbar style={navbarStyle}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Icon
            name="ArrowLeft"
            color={backIconColor}
            onClick={onBackIconClick}
            style={{ cursor: "pointer" }}
            size={20}
          />
          <Typography variant="h6" style={titleStyle}>
            {title}
          </Typography>
        </div>

        {actions && actions}
      </Toolbar>
    </AppBar>
  );
};
