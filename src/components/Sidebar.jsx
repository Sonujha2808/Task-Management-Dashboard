import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { Link } from 'react-router-dom';  // Import Link for routing

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, route: '/dashbord' },
    { text: 'Tasks', icon: <TaskIcon />, route: '/tasks' },
    { text: 'Analytics', icon: <AnalyticsIcon />, route: '/analytics' },  // Assuming you want an analytics page
  ];

  return (
    <Drawer variant="permanent" style={{ width: 240 }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.route}> {/* Use Link component */}
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
