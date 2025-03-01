const express = require("express");
const cors = require("cors");
const app = express();
const port = 5555;

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} name
 * @property {string} date
 * @property {string} description
 * @property {string} status
 */

// Sample Data (In-memory storage) - Activities
let tasks_list = [
    { id: 1, name: "Learn React", date: "2025-03-02", description: "Learn React for full stack postions ", status: "Pending" },
    { id: 2, name: "Learn dotnet", date: "2025-03-05", description: "Learn dotnet for full stack postions", status: "Created" },
    { id: 3, name: "finalise the Resume", date: "2025-03-07", description: "Prepare resume for security clearance", status: "Created" }
  ];

// GET API - Fetch tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks_list);
});

// POST API - Add new task
app.post("/api/task", (req, res) => {
  const newItem = { id: data.length + 1, ...req.body };
  tasks_list.push(newItem);
  res.status(201).json({ message: "Item added", item: newItem });
});

// PUT API - Update an existing item
app.put("/api/task/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  data[index] = { id, ...req.body };
  res.json({ success: true, message: "Item updated", item: data[index] });
});

// DELETE API - Remove an item
app.delete("/api/task/:id", (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter(item => item.id !== id);
  res.json({ message: "Item deleted" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
    