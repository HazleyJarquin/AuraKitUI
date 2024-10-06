import { Checkbox } from "@mui/material";
import { colors } from "../../theme/colors";
import { IconButton } from "../IconButton";
import { Icon } from "../Icon";

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

interface Props {
  tasks: Task[];
  onDeleteClick: (id: number) => void;
  onCompletedClick: (id: number) => void;
}

export const TaskList = ({ tasks, onCompletedClick, onDeleteClick }: Props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {tasks.length < 1 ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.1rem",
          }}
        >
          <Icon name="SadFace" color={colors.accent["500"]} size={100} />
          <h3 style={{ color: colors.accent["500"], fontWeight: "bold" }}>
            No hay tareas para mostrar
          </h3>
        </div>
      ) : (
        tasks.map((task) => {
          return (
            <div
              key={task.id}
              style={{
                background: colors.accent["500"],
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "8px",
                padding: "0.2rem",
                width: "100%",
              }}
            >
              <Checkbox
                checked={task.isCompleted}
                onChange={() => onCompletedClick(task.id)}
                style={{ color: "white" }}
              />

              <h3
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                  color: "white",
                }}
              >
                {task.title}
              </h3>

              <IconButton
                icon="Delete"
                iconSize={20}
                onClick={() => onDeleteClick(task.id)}
              />
            </div>
          );
        })
      )}
    </div>
  );
};
