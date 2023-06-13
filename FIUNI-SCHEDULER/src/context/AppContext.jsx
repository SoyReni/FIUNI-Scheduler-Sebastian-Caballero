import React from 'react';
import { DummyData } from '../../data/DummyData';

export default React.createContext({
  tasks: DummyData,
  searchType: "date",
  nextSevenDays: [],
  pending: [],
  search: [],
  addNewTask  : (task) => {},
  deleteTask  : (taskId) => {},
  editTask    : (task, id) =>{},
  searchTask  : (date, name) => {},
  resetSearch : () => {}
});