import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "../../components/Navbar";
import { Icon } from "../../components/Icon";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    onBackIconClick: () => alert("Back icon clicked!"),
    title: "Title",
    actions: (
      <div style={{ display: "flex", gap: "10px" }}>
        <Icon
          name="Delete"
          color="white"
          size={20}
          onClick={() => alert("Action 1 clicked")}
          style={{ cursor: "pointer" }}
        />
        <Icon
          name="Person"
          color="white"
          size={20}
          onClick={() => alert("Action 2 clicked")}
          style={{ cursor: "pointer" }}
        />
      </div>
    ),
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: "800px" }}>
        <Story />
      </div>
    ),
  ],
};
