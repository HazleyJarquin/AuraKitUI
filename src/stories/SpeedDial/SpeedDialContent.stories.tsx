import type { Meta, StoryObj } from "@storybook/react";
import { SpeedDialExample } from "./SpeedDialExample";

const meta = {
  title: "Components/SpeedDial",
  component: SpeedDialExample,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SpeedDialExample>;

export default meta;

type Story = StoryObj<typeof meta>;

const Description = () => (
  <div>
    <p>if you want to use SpeedDial you must follow this action format:</p>
    <pre>
      {`const actions = [
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
];`}
    </pre>
    <p>Always you have to add "as const" when you type the icon</p>
  </div>
);

export const DescriptionStory: Story = {
  render: () => <Description />,
};

export const Content: Story = {
  args: {
    mode: "primary",
  },
  argTypes: {
    mode: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"],
      },
    },
  },
};

Content.storyName = "Content";
DescriptionStory.storyName = "Description";
