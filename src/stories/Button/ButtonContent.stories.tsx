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
    disabled: false,
  },
  argTypes: {
    label: {
      control: "text",
      description: "Texto mostrado en el botón",
    },
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al hacer click",
    },
    mode: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary", "text"],
      },
      description: "Estilo del botón (primario, secundario, etc.)",
    },
    disabled: {
      control: "boolean",
      description: "Desactiva el botón",
    },
  },
};
