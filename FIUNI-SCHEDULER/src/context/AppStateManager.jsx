import React from 'react';
import AppContext from './AppContext';
import { DummyData } from '../../data/DummyData';

useEffect(() => {
  this.setState({ nextSevenDays: this.state.tasks.filter(elem => Date.parse(elem.datetime) < new Date()), 
                  pending: this.state.tasks.filter(elem => elem.status === "in_progress")});
}, [this.state.tasks])
export default class GlobalState extends React.Component{
state = {
  tasks: DummyData,
  searchType: "date",
  nextSevenDays: DummyData,
  pending: [], 
  search: [],
}
 
addNewTask = (task) => {
  const list = [...this.state.tasks, task];
  this.setState({tasks: list});
};
 
deleteTask = (taskId) => {
  const list = this.state.tasks.filter(elem => elem.id != taskId)
  this.setState({tasks: list});
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
  this.setState({tasks: list})
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
  this.setState({ search: list})
}

resetSearch = () => {
  this.setState({ search: [] })
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
    addNewTask: this.addNewTask,
    deleteTask: this.deleteTask,
    searchTask: this.searchTask,
    resetSearch: this.resetSearch
   }}
  >
   {this.props.children}
  </AppContext.Provider>
 );
 }
}