import React from "react";
import { DummyData } from "../../data/DummyData";


  const initialState = {
    tasks: DummyData.sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
    searchType: "date",
    nextSevenDays: DummyData.filter(elem => (Date.parse(elem.datetime) > new Date() && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
    pending: DummyData.filter(elem => elem.status === "in_progress" && elem.type === "task"), 
    selectedType: 'activity',
    search: [],
    filteredList: DummyData.filter(elem =>  elem.type === "activity"  ),
    nextIndex: 13,
  };

  const reducer = (state, action) => {
    let list = []
    switch (action.type) {
      case "addNewTask":
        list = [...state.tasks, task];
        return {
            ...state,
            tasks: list,
            nextSevenDays: list.filter(elem => (Date.parse(elem.datetime) > new Date() && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
            pending: list.filter(elem => elem.status === "in_progress" && elem.type === "task"), 
            filteredList: list.filter(elem => { elem.type === state.selectedType} ),
            nextIndex: state.nextIndex + 1,
        };
      case "deleteTask":
        list = state.tasks.filter(elem => elem.id != action.taskId)
        return {
            ...state,
            tasks: list,
            nextSevenDays: list.filter(elem => (Date.parse(elem.datetime) > new Date() && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
            pending: list.filter(elem => elem.status === "in_progress" && elem.type === "task"), 
            filteredList: list.filter(elem => { elem.type === state.selectedType } ),
        };
      case "editTask":
        let index = state.tasks.findIndex(elem => elem.id === action.taskId)
        list = state.tasks
        list[index] = action.data
        return {
            ...state,
            tasks: list,
            nextSevenDays: list.filter(elem => (Date.parse(elem.datetime) > new Date() && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
            pending: list.filter(elem => elem.status === "in_progress" && elem.type === "task"), 
            filteredList: list.filter(elem => { elem.type === state.selectedType } ),
        };
      case "searchTask":
        let searchType = "date"
        if(action.data.datetime && !action.data.title) {
            list = state.tasks.filter(elem => { Date.parse(elem.datetime) === Date.parse(action.data.datetime)})
            searchType = "date"
          } else if (!action.data.datetime && action.data.title) {
            list = state.tasks.filter(elem => { elem.name.includes(action.data.title)})
            searchType= "name"
          } else if (action.data.datetime && action.data.title) {
            list =  state.tasks.filter(elem => { (Date.parse(elem.datetime) === Date.parse(action.data.datetime)) && elem.name.includes(action.data.title)})
            searchType = "date_name" 
          } 
          return({
            ...state, 
            searchType: searchType,
            search: list.sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime))})
      case "resetSearch":
        return({...state, search:[]})
      case "setFilteredList":
          list = state.tasks.filter(elem =>  elem.type === action.data.type )
          return({
            ...state,
            filteredList: list,
          })
      default:
        return state;
    }
  };


export {reducer, initialState};