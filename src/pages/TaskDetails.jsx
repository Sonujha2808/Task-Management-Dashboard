// src/pages/TaskDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
  const { id } = useParams();
  // Fetch the task by ID from the Redux store
  return (
    <div>
      <h1>Task Details</h1>
      <p>Details for task ID: {id}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TaskDetails;
