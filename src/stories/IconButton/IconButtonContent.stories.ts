import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../../components/IconButton";
import { IconsTypes } from "../../shared/iconTypes/icons";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    icon: "Plus",
    onClick: () => alert("Icon clicked"),
    mode: "primary",
  },
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: IconsTypes.map((iconType) => iconType.type),
      },
    },
    mode: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary", "quaternary"],
      },
    },
  },
};
