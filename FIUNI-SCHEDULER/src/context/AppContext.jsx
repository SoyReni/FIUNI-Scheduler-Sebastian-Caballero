import React, { createContext } from 'react';
import { DummyData } from '../../data/DummyData';

export default React.createContext({
  tasks: DummyData.sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
  searchType: "date",
  nextSevenDays: DummyData.filter(elem => (Date.parse(elem.datetime) > new Date() && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
  pending: DummyData.filter(elem => elem.status === "in_progress" && elem.type === "task"), 
  search: [],
  addNewTask  : (task) => {},
  deleteTask  : (taskId) => {},
  editTask    : (task, id) =>{},
  searchTask  : (date, name) => {},
  resetSearch : () => {}
});