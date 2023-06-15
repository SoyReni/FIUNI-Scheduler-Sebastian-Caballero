import React, { createContext } from 'react';
import { DummyData } from '../../data/DummyData';

export default createContext({
  tasks: DummyData.sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
  searchType: "date",
  nextSevenDays: DummyData.filter(elem => (Date.parse(elem.datetime) > new Date() && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
  pending: DummyData.filter(elem => elem.status === "in_progress" && elem.type === "task"), 
  search: [],
  filteredList: DummyData.filter(elem =>  elem.type === "activity"  ),
  addNewTask  : (task) => {},
  deleteTask  : (taskId) => {},
  editTask    : (task, id) =>{},
  searchTask  : (date, name) => {},
  resetSearch : () => {},
  setFilteredList : (type) => {},
});

