import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../../components/Icon";
import { IconsTypes } from "../../shared/iconTypes/icons";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    name: "Plus",
    onClick: () => alert("Icon clicked"),
  },
  argTypes: {
    name: {
      control: {
        type: "select",
        options: IconsTypes.map((iconType) => iconType.type),
      },
    },
  },
};
