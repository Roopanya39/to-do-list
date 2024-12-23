import React, { useState } from "react";

function AddTask({ addTask }) {
  const [taskInput, setTaskInput] = useState("");

  const handleAdd = () => {
    if (taskInput.trim()) {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add item..."
      />
      <button className="add-btn" onClick={handleAdd}>
        add
      </button>
    </div>
  );
}

export default AddTask;