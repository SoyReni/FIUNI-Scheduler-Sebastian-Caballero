import React from 'react';
import Context from './context';
import { DummyData } from '../../data/DummyData';

useEffect(() => {
  this.setState({ nextSevenDays: this.state.tasks.filter(elem => Date.parse(elem.datetime) < new Date()), 
                  pending: this.state.tasks.filter(elem => elem.status === "in_progress")});

  return () => {
    second
  }
}, [this.state.tasks])
export default class GlobalState extends React.Component{
state = {
  tasks: DummyData,
  nextSevenDays: [],
  pending: [], 
}


 
addNewTask = (task) => {
  const list = [...this.state.tasks, task];
  this.setState({tasks: list});
};
 
deleteTask = (taskId) => {
  this.setState(this.state.tasks.splice(taskId,1));
};

render(){
 return (
  <Context.Provider 
   value={{
    tasks: this.state.tasks,
    nextSevenDays: this.state.nextSevenDays,
    pending: this.state.pending,
    addNewTask: this.addNewTask,
    deleteTask: this.deleteTask
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 }
}