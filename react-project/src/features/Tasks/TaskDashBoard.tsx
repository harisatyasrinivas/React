import { List, ListItem, ListItemText } from "@mui/material";

interface TaskDashBoardProps {
  tasks: Task[];
}

export default function TaskDashBoard({ tasks }: TaskDashBoardProps) {
  return (
    <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText>{task.name}</ListItemText>
          </ListItem>
        ))}
    </List>
  );
}
