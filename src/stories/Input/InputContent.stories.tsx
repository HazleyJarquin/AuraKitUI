import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/Input";
import { useState } from "react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputStory = (args: any) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const Content: Story = {
  args: {
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "password", "email", "number"],
      },
    },
  },
  render: (args) => <InputStory {...args} />,
};
