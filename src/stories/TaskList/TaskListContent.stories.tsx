import type { Meta, StoryObj } from "@storybook/react";
import { TaskList } from "../../components/TaskList";
import { useState } from "react";

const meta = {
  title: "Components/TaskList",
  component: TaskList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    tasks: [
      { id: 1, title: "Task 1", isCompleted: false },
      { id: 2, title: "Task 2", isCompleted: true },
    ],
    onCompletedClick: () => alert("Task completed"),
    onDeleteClick: () => alert("Task deleted"),
  },
  argTypes: {
    tasks: {
      action: "array",
      description: "Lista de tareas",
    },
    onCompletedClick: {
      action: "completed",
      description: "Función que se ejecuta al completar una tarea",
    },
    onDeleteClick: {
      action: "deleted",
      description: "Función que se ejecuta al eliminar una tarea",
    },
  },
  decorators: [
    (Story, context) => {
      const { args } = context;
      const [tasks, setTasks] = useState(args.tasks);

      const handleCompletedClick = (id: number) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
          )
        );
      };

      const handleDeleteClick = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      };

      return (
        <div style={{ width: "500px" }}>
          <Story
            {...context}
            args={{
              ...args,
              tasks,
              onCompletedClick: handleCompletedClick,
              onDeleteClick: handleDeleteClick,
            }}
          />
        </div>
      );
    },
  ],
};
