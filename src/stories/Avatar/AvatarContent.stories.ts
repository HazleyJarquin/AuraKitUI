import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../../components/Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    alt: "Avatar",
    mode: "Image",
    src: "https://avatars.githubusercontent.com/u/57446400?v=4",
    text: "Testing Text",
  },
  argTypes: {
    mode: {
      control: {
        type: "select",
        options: ["Text", "Image"],
        description: "The mode of the avatar.",
      },
    },
  },
};
