import React, { useContext, useEffect, useReducer, useState } from "react";
import {Text} from "react-native";
import { AppContext } from "../context/AppState";
import { SItemPicker, SItemTypeSelectorContainer } from "../components/styles/StyledListEvents";
import { SDashCardContent, Separator } from "../components/styles/StyledDashBoard";
import { radioButtons } from "../../data/UseFullData";
import RadioGroup from 'react-native-radio-buttons-group';
import { reducer } from "../context/AppReducer";
import TaskShow from "../components/TaskShow";

const TasksList = () => {
  const [state, dispatch] = useReducer(reducer, useContext(AppContext))
  const [selectedId, setSelectedId] = useState("activity");
  useEffect(() => {
    dispatch({
      type: "setFilteredList",
      data: {
        type: selectedId,
      }
    })
  }, [selectedId])
  
    
    return (
      <SDashCardContent>
        <SItemTypeSelectorContainer>
          <SItemPicker
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
          />
        </SItemTypeSelectorContainer>
        {state.filteredList.map((item, index) => (
          <TaskShow key={index} data={item}></TaskShow>
        ))}
        <Separator/>
      </SDashCardContent>
    );
  };
  
  export default TasksList;