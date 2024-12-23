import React from "react";

function RemoveTask({ index, removeTask }) {
  return (
    <button className="remove-btn" onClick={() => removeTask(index)}>
      ❌
    </button>
  );
}

export default RemoveTask;