import { useEffect, useState } from "react";

export const TaskOverView = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:5555/api/tasks/")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
};
