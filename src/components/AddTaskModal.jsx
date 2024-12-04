import React, { useState } from "react";
import './styles/AddTaskModal.css';  // Import the updated CSS

const AddTaskModal = ({ onAddTask, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = () => {
    if (title && description && dueDate) {
      onAddTask({ title, description, dueDate });
      onClose();
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Task</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
        placeholder=""
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleSubmit}>Add Task</button>
          <button onClick={onClose} className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
