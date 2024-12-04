Task Management Dashboard
Description
The Task Management Dashboard is a web-based application designed to help users manage tasks efficiently. It provides features to add, edit, delete, and track tasks with specific due dates and completion statuses. The dashboard is built with React, Redux, and Material-UI, allowing for a responsive and user-friendly interface. Additionally, tasks are stored in the browser's localStorage, ensuring persistence across sessions.

Features
Add Tasks: Users can add tasks with a title, description, and due date.
Task List: Displays a list of tasks with their details.
Task Filters: Tasks can be filtered by All, Completed, Pending, and Overdue.
Edit Tasks: Users can edit the task's details, including title, description, and due date.
Delete Tasks: Tasks can be deleted from the list.
Task Completion Toggle: Tasks can be marked as completed or pending.
Technologies Used
React.js: JavaScript library for building the user interface.
Redux: State management library to handle the app's state.
Material-UI: A popular React UI framework for responsive and stylish components.
localStorage: To store task data persistently in the browser.
CSS/SCSS: For styling the application, including responsive layouts.
Setup
Prerequisites
Before you start, make sure you have the following installed:

Node.js (v14 or higher)
npm (v6 or higher)
Installation Steps
Clone the repository:

bash
Copy code

git clone https://github.com/yourusername/task-management-dashboard.git
cd task-management-dashboard
Install dependencies:

Run the following command to install the necessary dependencies:

bash
Copy code
npm install
Start the development server:

After the dependencies are installed, run the following command to start the server:

bash
Copy code
npm start
This will start the development server and you can view the dashboard by navigating to http://localhost:3000 in your browser.


How It Works
Task Management
Add a Task: In the dashboard, users can input the task's title, description, and due date. When the "Add Task" button is clicked, the task is added to the Redux store and stored in the browser’s localStorage.

Task List: The dashboard displays all tasks that are saved in the state. Tasks are stored in the Redux state and retrieved from localStorage when the app is loaded. The tasks are displayed in the form of "Task Cards" showing their title, description, and due date.

Filtering Tasks: Users can filter tasks based on:

All: Show all tasks.
Completed: Show only completed tasks.
Pending: Show only tasks that are not completed.
Overdue: Show tasks whose due date has passed.
Editing Tasks: Clicking on a task will allow the user to edit the task’s details, including the title, description, and due date.

Delete Task: Tasks can be deleted from the list by clicking the delete button on each task card.

Task Completion: Tasks can be toggled between completed and pending by clicking on a checkbox or button.

Persistence with localStorage
Tasks are stored in the browser’s localStorage, so even if the page is refreshed, the tasks remain available.

Screenshots
Dashboard
![localhost_3000_tasks](https://github.com/user-attachments/assets/2e583937-fb0e-4583-a66c-58a91a57058a)

Add Task Modal
![image](https://github.com/user-attachments/assets/fa1b3d82-5334-43eb-b7b5-51aa30181f39)


Usage
Once the application is up and running, users can navigate to the Dashboard to manage tasks.
The task form is located at the top of the page, where users can add tasks.
The task list will display below the form, with options to edit, delete, or mark tasks as completed or pending.
Use the filter options to narrow down the task list based on the completion status or due dates.
Future Enhancements
Task Due Date Notifications: Notify users when a task is nearing its due date.
Task Sorting: Allow sorting tasks by due date, title, or status.
User Authentication: Add user login and registration to allow multiple users to manage their own tasks.
Analytics: Display charts or graphs to show task completion trends, overdue tasks, etc.
License
This project is licensed under the MIT License - see the LICENSE file for details.
