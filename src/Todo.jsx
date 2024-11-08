import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (input.trim() === "") return; // Ignore empty input
    if (editIndex !== null) {
      // Update existing task if in edit mode
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? input : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setTasks([...tasks, input]);
    }
    setInput(""); // Clear input
  };

  const editTask = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setInput("");
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter task"
      />
      <button onClick={addTask}>{editIndex !== null ? "Update" : "Add"}</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
