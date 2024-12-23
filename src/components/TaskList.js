import React, { useState } from "react";
import RemoveTask from "./RemoveTask";
import CompleteTask from "./CompleteTask";

function TaskList({ tasks, completeTask, removeTask, editTask }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };

  const saveEdit = () => {
    editTask(editingIndex, editingText);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <button className="save-btn" onClick={saveEdit}>Save</button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <button className="edit-btn" onClick={() => startEditing(index)}>Edit</button>
              <CompleteTask index={index} completeTask={completeTask} />
              <RemoveTask index={index} removeTask={removeTask} />
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
