import type { Meta, StoryObj } from "@storybook/react";
import { SpeedDial } from "../../components/SpeedDial";
import { IconsTypes } from "../../shared/iconTypes/icons";

const meta = {
  title: "Components/SpeedDial",
  component: SpeedDial,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SpeedDial>;

export default meta;

type Story = StoryObj<typeof meta>;

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

export const Content: Story = {
  args: {
    mode: "primary",
    actions: actions,
    speedDialIcon: "Plus",
  },
  argTypes: {
    actions: {
      description:
        "Always add (as const) to the icon,\n" +
        "example: {icon: 'ArrowLeft' as const,\n",
    },
    mode: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"],
      },
    },
    speedDialIcon: {
      control: {
        type: "select",
        options: IconsTypes.map((iconType) => iconType.type),
      },
    },
  },
};
