import axios from "axios";
import { useEffect, useState } from "react";

export const TaskOverView = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  /*
  useEffect(() => {
    fetch("http://localhost:5555/api/tasks/")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);
  */

  useEffect(() => {
    axios
      .get<Task[]>("http://localhost:5555/api/tasks/")
      .then((response) => setTasks(response.data));
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
};
