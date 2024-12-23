import React from "react";

function CompleteTask({ index, completeTask }) {
  return (
    <button className="complete-btn" onClick={() => completeTask(index)}>
     ✅
    </button>
  );
}

export default CompleteTask;