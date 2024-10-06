import type { Meta, StoryObj } from "@storybook/react";

import { ModalExample } from "./ModalExample";

const meta = {
  title: "Components/Modal",
  component: ModalExample,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ModalExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {},
  argTypes: {
    children: {
      description: "The content of the modal",
      type: { name: "React.ReactNode" },
      control: { type: "none" },
    },
    onClose: {
      description: "Function to close the modal",
      type: { name: "() => void" },
      control: { type: "none" },
    },
    open: {
      description: "Boolean to show or hide the modal",
      type: { name: "boolean" },
      control: { type: "none" },
    },
    title: {
      description: "Title of the modal",
      type: { name: "string" },
      control: { type: "none" },
    },
    width: {
      description: "Width of the modal",
      type: { name: "string" },
      control: { type: "none" },
    },
  },
};
