// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, setFilter, selectTasks } from '../redux/tasksSlice';
import TaskCard from '../components/TaskCard';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const tasks = useSelector(selectTasks);  // Ensure the correct selector is used
  const filter = useSelector((state) => state.tasks.filter);  // Correct filter state
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle && taskDescription && taskDueDate) {
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        description: taskDescription,
        dueDate: taskDueDate,
        completed: false,
      };
      dispatch(addTask(newTask));
      setTaskTitle('');
      setTaskDescription('');
      setTaskDueDate('');
    }
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));  // Dispatch the filter action
  };

  return (
    <div className="dashboard">
      <div className="task-form">
        <TextField
          label="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <TextField
          label="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <TextField
          type="date"
          label="Due Date"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        />
        <Button onClick={handleAddTask} variant="contained">
          Add Task
        </Button>
      </div>

      <div className="task-filters">
        <FormControl>
          <InputLabel>Filter</InputLabel>
          <Select
            value={filter}  // Fetch filter from Redux state
            onChange={handleFilterChange}  // Handle filter change
          >
            <MenuItem value="all">All Tasks</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="overdue">Overdue</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
