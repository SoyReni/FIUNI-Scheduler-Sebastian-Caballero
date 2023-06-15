
import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./AppReducer";
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
export const AppContext = createContext(initialState);

export const StateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={{ state, dispatch }}> {children} </AppContext.Provider>      
}

export const useStateValue = () => useContext(AppContext);