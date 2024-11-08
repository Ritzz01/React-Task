import React, { useState } from "react";

function TodoOne() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addElement = () => {
    if (!input.trim()) return;
  
    setTask((prevTasks) =>
      editIndex !== null
        ? prevTasks.map((task, index) => (index === editIndex ? input : task))
        : [...prevTasks, input]
    );
  
    setEditIndex(null);
    setInput("");
  };

  const editElement = (index) => {
    setInput(task[index]); // Set the input field with the task text
    setEditIndex(index);   // Set the edit index to the current index
  };

  const deleteElement = (index) => {
    setTask(task.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setInput("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={handleChange}
      />
      <button onClick={addElement}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {task.map((ele, index) => (
          <li key={index}>
            {ele}
            <button onClick={() => editElement(index)}>Edit</button>
            <button onClick={() => deleteElement(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoOne;
