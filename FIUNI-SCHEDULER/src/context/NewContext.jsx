import { createContext, useEffect, useState } from "react";
import { DummyData } from "../../data/DummyData";

const today = new Date()
const seventh = new Date(Date.now() + 8 * 24 * 60 * 60 * 1000)

const initialState = {
};

export const ApplicationContext = createContext(initialState);

export const ApplicationContextProvider = (props) => {

    const [tasks, setTasks] = useState(DummyData.sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)))
    const [searchType, setSearchType] = useState("date")
    const [nextSevenDays, setNextSevenDays] = useState(DummyData.filter(elem => (Date.parse(elem.datetime) >= today && Date.parse(elem.datetime) <= seventh && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)))
    const [pending, setPending] = useState(DummyData.filter(elem => elem.status === "in_progress" && elem.type === "task"))
    const [selectedType, setSelectedType] = useState('activity')
    const [search, setSearch] = useState([])
    const [filteredList, setFilteredList] = useState(DummyData.filter(elem =>  elem.type === "activity"  ))
    const [nextIndex, setNextIndex] = useState(13)
    
    useEffect(() => {
      setNextSevenDays(tasks.filter(elem => (Date.parse(elem.datetime) >= today && Date.parse(elem.datetime) <= seventh && elem.type === "reminder")).sort((a,b) => Date.parse(a.datetime) - Date.parse(b.datetime)))
      setPending(tasks.filter(elem => elem.status === "in_progress" && elem.type === "task"))
      setFilteredList(tasks.filter(elem =>  elem.type === selectedType  ))
      setNextIndex(nextIndex + 1)
    }, [tasks])

    useEffect(() => {
      getFilteredList(selectedType)
    }, [selectedType])
    
   
    const addNewTask = (task) => {
        let list = [...tasks, task];
        setTasks(list)
    }
    
    const deleteTask = (taskId) => {
        let list = tasks.filter(elem => elem.id != taskId)
        setTasks(list)
    }
    
    const editTask = (taskId, task) => {
        let index = tasks.findIndex(elem => elem.id === taskId)
        let list = tasks
        list[index] = task
        setTasks(list)
    }
    
    const searchTask = (datetime, title) => {
        let sType = "date"
        let list = []
        if(datetime !== undefined && title === "") {
            list = tasks.filter(elem => { elem.datetime.slice(0,10) === datetime.slice(0,10)})
            sType = "date"
        } else if (!datetime === undefined && title !== "") {
            list = tasks.filter(elem => { elem.title.includes(title)})
            sType= "name"
        } else if (datetime !== undefined && title !== "") {
            list =  tasks.filter(elem => { (Date.parse(elem.datetime) === Date.parse(datetime)) && elem.title.includes(title)})
            sType = "date_name" 
        } else list = []
        setSearch(list)
        setSearchType(sType)  
    }
    
    const resetSearch = () => { setSearch([]) }
    
    const getFilteredList = (type) => {
        let list = tasks.filter(elem =>  elem.type === type )
        setFilteredList(list)
    }
    
    const contextApi = {
        tasks,
        searchType,
        nextSevenDays,
        pending,
        selectedType,
        search,
        setSelectedType,
        filteredList,
        nextIndex,
        addNewTask,
        deleteTask,
        editTask,
        searchTask,
        resetSearch,
        getFilteredList
    }
    return (
        <ApplicationContext.Provider value={contextApi}>
        {props.children}
        </ApplicationContext.Provider>
    );
};