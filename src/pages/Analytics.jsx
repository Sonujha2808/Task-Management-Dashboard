// src/pages/Analytics.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/Analytics.css';

const Analytics = () => {
  const tasks = useSelector((state) => state.tasks.tasks);  // Fetch tasks from Redux store

  // Prepare the data for bar chart and pie chart
  const taskStats = {
    totalTasks: tasks.length,
    completedTasks: tasks.filter(task => task.completed).length,
    pendingTasks: tasks.filter(task => !task.completed).length,
  };

  // Bar chart data (tasks completed vs. pending)
  const barChartData = [
    { name: 'Completed', value: taskStats.completedTasks },
    { name: 'Pending', value: taskStats.pendingTasks },
  ];

  // Pie chart data (task categories)
  const pieChartData = [
    { name: 'Completed', value: taskStats.completedTasks },
    { name: 'Pending', value: taskStats.pendingTasks },
  ];

  const COLORS = ['#4CAF50', '#FF9800']; // Green for completed, Orange for pending

  return (
    <div className="analytics">
      <div className="analytics-cards">
        <Card className="analytics-card">
          <CardContent>
            <Typography variant="h6">Total Tasks</Typography>
            <Typography variant="h4">{taskStats.totalTasks}</Typography>
          </CardContent>
        </Card>

        <Card className="analytics-card">
          <CardContent>
            <Typography variant="h6">Completed Tasks</Typography>
            <Typography variant="h4">{taskStats.completedTasks}</Typography>
          </CardContent>
        </Card>

        <Card className="analytics-card">
          <CardContent>
            <Typography variant="h6">Pending Tasks</Typography>
            <Typography variant="h4">{taskStats.pendingTasks}</Typography>
          </CardContent>
        </Card>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
