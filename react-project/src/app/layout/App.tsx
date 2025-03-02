import { Fragment } from "@emotion/react/jsx-runtime";
import NavBar from "./NavBar";
import { CssBaseline } from "@mui/material";
import TaskDashBoard from "../../features/Tasks/TaskDashBoard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() { 
  const [tasks, setTasks] = useState<Task[]>([]);

  /*
  useEffect(() => {
    fetch("http://localhost:5555/api/tasks/")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);
  */

  useEffect(() => {
    axios.get<Task[]>("http://localhost:5555/api/tasks/")
      .then((response) => setTasks(response.data));
  }, []);

  
    return (
      <Fragment>
        <CssBaseline />
        <NavBar />
        <h1>Task Overview</h1>
        <TaskDashBoard tasks={tasks} />      
      </Fragment>
  )   
}



