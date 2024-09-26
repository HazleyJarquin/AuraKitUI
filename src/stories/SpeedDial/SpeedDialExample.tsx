import { SpeedDial } from "../../components/SpeedDial";

interface SpeedDialExampleProps {
  mode?: "primary" | "secondary" | "tertiary";
}

export const SpeedDialExample = ({ mode }: SpeedDialExampleProps) => {
  const actions = [
    {
      icon: "ArrowLeft" as const,
      name: "Go back",
      onClick: () => alert("ArrowLeft clicked"),
    },
    {
      icon: "Delete" as const,
      name: "Delete",
      onClick: () => alert("Delete clicked"),
    },
    {
      icon: "ArrowUp" as const,
      name: "Go up",
      onClick: () => alert("ArrowUp clicked"),
    },
  ];

  return <SpeedDial actions={actions} speedDialIcon="Plus" mode={mode} />;
};
