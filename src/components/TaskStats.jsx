import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TaskStats = ({ title, value }) => {
  return (
    <Card style={{ padding: 20 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default TaskStats;
