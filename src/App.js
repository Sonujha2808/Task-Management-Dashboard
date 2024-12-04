// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';  // Ensure correct store import
import Dashboard from './pages/Dashboard';
import TaskDetails from './pages/TaskDetails';
import Analytics from './pages/Analytics';  // Import the Analytics component
import Header from './components/Header';
import Sidebar from './components/Sidebar';  // Import Sidebar

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header /> {/* Make sure the Header is rendering */}
        <Sidebar /> {/* Sidebar for navigation */}
        <div style={{ marginLeft: 240, padding: '20px' }}> {/* Content area adjusted for sidebar */}
          <Routes>
            <Route path="/tasks" element={<Dashboard />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
            <Route path="/analytics" element={<Analytics />} />  {/* Add Analytics route */}
            <Route path="/" element={<h1>Welcome to Task Management</h1>} />
            <Route path="/dashbord" element={<div><h1>Welcome to Task Management</h1><><br/></><h2>Click on Task Button for adding Tasks</h2><h2>Click on Analytics Button for Vishuals Representation</h2></div>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
