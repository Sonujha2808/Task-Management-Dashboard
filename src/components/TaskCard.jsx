// src/components/TaskCard.jsx
import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskStatus } from '../redux/tasksSlice';
import '../styles/TaskCard.css';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <div>
        <Button onClick={() => dispatch(toggleTaskStatus(task.id))}>
          {task.completed ? 'Undo' : 'Mark as Completed'}
        </Button>
        <Button onClick={() => dispatch(deleteTask(task.id))} color="error">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
