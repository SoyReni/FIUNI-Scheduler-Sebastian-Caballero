import React from 'react';

export default React.createContext({
  tasks: [],
  nextSevenDays: [],
  pending: [],
  addNewTask : (task) => {},
  deleteTask : (taskId) => {}
});