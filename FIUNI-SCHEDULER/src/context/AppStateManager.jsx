import React from 'react';
import AppContext from './AppContext';
import { DummyData } from '../../data/DummyData';


export default class GlobalState extends React.Component{
state = {
  tasks: DummyData.sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
  searchType: "date",
  nextSevenDays: DummyData.filter(elem => (Date.parse(elem.datetime) > new Date() && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
  pending: DummyData.filter(elem => elem.status === "in_progress" && elem.type === "task"), 
  search: [],
  filteredList: DummyData.filter(elem => { elem.type === "activity" } ),
}
 
addNewTask = (task) => {
  const list = [...this.state.tasks, task];
  this.setState({
    tasks: list,
    nextSevenDays: list.filter(elem => (Date.parse(elem.datetime) > new Date() && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
    pending: list.filter(elem => elem.status === "in_progress" && elem.type === "task"), 
    filteredList: list.filter(elem => { elem.type === "activity" } ),
  });
};
 
deleteTask = (taskId) => {
  const list = this.state.tasks.filter(elem => elem.id != taskId)
  this.setState({
    tasks: list,
    nextSevenDays: list.filter(elem => (Date.parse(elem.datetime) > new Date() && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
    pending: list.filter(elem => elem.status === "in_progress" && elem.type === "task"), 
    filteredList: list.filter(elem =>  elem.type === "activity"  ),
  });
};

editTask = (task, id) =>{
  const list = this.state.tasks.map(elem => {
    if (elem.id === id) {
      elem.title = task.title
      elem.description = task.description
      elem.datetime = task.datetime
      elem.type = task.type
      elem.status = task.status
    }})
  this.setState({
    tasks: list,
    nextSevenDays: list.filter(elem => (Date.parse(elem.datetime) > new Date() && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)),
    pending: list.filter(elem => elem.status === "in_progress" && elem.type === "task"), 
    filteredList: list.filter(elem => { elem.type === "activity" } ),
  })
} 

searchTask = (date, name) => {
  const list = []
  if(date && !name) {
    list = this.state.tasks.filter(elem => { Date.parse(elem.datetime) === Date.parse(date)})
    this.setState({searchType: "date"})
  } else if (!date && name) {
    list = this.state.tasks.filter(elem => { elem.name.includes(name)})
    this.setState({searchType: "date_name"})
  } else if (date && name) {
    list =  this.state.tasks.filter(elem => { (Date.parse(elem.datetime) === Date.parse(date)) && elem.name.includes(name)})
    this.setState({ searchType: "name" })
  } 
  this.setState({ search: list.sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime))})
}

resetSearch = () => {
  this.setState({ search: [] })
}

setFilteredList = (type) => {
  this.setState({ filteredList: this.state.tasks.filter(elem =>  elem.type === type )})    
}

render(){
 return (
  <AppContext.Provider
   value={{
    tasks: this.state.tasks,
    nextSevenDays: this.state.nextSevenDays,
    pending: this.state.pending,
    searchType: this.searchType,
    search: this.search,
    filteredList: this.filteredList,
    addNewTask: this.addNewTask,
    deleteTask: this.deleteTask,
    searchTask: this.searchTask,
    resetSearch: this.resetSearch,
    setFilteredList: this.setFilteredList
   }}
  >
   {this.props.children}
  </AppContext.Provider>
 );
 }
}