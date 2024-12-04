import { createSlice } from '@reduxjs/toolkit';

// Check if there's any tasks in localStorage and load them
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
  tasks: savedTasks,
  filter: 'all',  // Default filter set to 'all'
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Add a new task and store it in localStorage
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Save to localStorage
    },

    // Edit a task and update it in localStorage
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updatedTask };
        localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Save to localStorage
      }
    },

    // Delete a task and remove it from localStorage
    deleteTask: (state, action) => {
      const newTasks = state.tasks.filter(task => task.id !== action.payload);
      state.tasks = newTasks;
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Save to localStorage
    },

    // Toggle the completion status of a task and update it in localStorage
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Save to localStorage
      }
    },

    // Set the current filter (all, completed, pending, overdue)
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// A selector to filter tasks based on the current filter state
export const selectTasks = (state) => {
  const { tasks, filter } = state.tasks;
  switch (filter) {
    case 'completed':
      return tasks.filter((task) => task.completed);
    case 'pending':
      return tasks.filter((task) => !task.completed);
    case 'overdue':
      return tasks.filter((task) => new Date(task.dueDate) < new Date());
    default:
      return tasks;
  }
};

// Exporting actions for dispatching
export const { addTask, editTask, deleteTask, toggleTaskStatus, setFilter } = tasksSlice.actions;

// Exporting reducer to be used in the store
export default tasksSlice.reducer;
