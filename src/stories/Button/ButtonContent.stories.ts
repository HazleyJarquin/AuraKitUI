import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    label: "Click me",
    onClick: () => alert("Button clicked"),
    mode: "primary",
  },
  argTypes: {
    onClick: { action: "clicked" },
    mode: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary", "text"],
      },
    },
    disabled: { control: "boolean" },
  },
};
