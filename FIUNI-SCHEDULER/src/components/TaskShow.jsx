import React, { useContext, useReducer } from "react";
import { View, Text } from "react-native";
import { SITemCheckd, SItemContainer, SItemDate, SItemDescription, SItemMore, SItemTitle, SItemTitleContainer } from "./styles/StyledListEvents";
import { GetDateData } from "../services/DateManager";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { reducer } from "../context/AppReducer";
import { AppContext } from "../context/AppState";
import { ApplicationContext } from "../context/NewContext";

const TaskShow = ({data}) => {
    const {editTask} = useContext(ApplicationContext);
    
    const updateStatus=()=>{
        let newStatus = data.status === "done" ? "in_progress" : "done"
        let myData = {...data, status: newStatus};
        editTask(data.id, myData)
    }
    const date = GetDateData(data.datetime) ?? null;
    const isTask = data.type === "task";
    const title = data.title.length > 24 ? `${data.title.slice(0, 24)}...` : data.title; 
    const type = data.type;
    const isChecked = data.status === "done";
    

    return (
        <SItemContainer>
            <SItemTitleContainer>
                <SItemTitle type={type} isTask={isTask}>{title}</SItemTitle>
                {!isTask && 
                    <SItemDate type={type}>
                        {date.niceDate}
                    </SItemDate>}
            </SItemTitleContainer>
            <SItemDescription>{data.description}</SItemDescription>
            <SItemMore type={type}>Ver evento...</SItemMore>
            {isTask && <SITemCheckd
                size={45}
                fillColor="#F7A831"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "#F7CA88" }}
                innerIconStyle={{ borderWidth: 3,}}
                isChecked={isChecked}
                onPress={updateStatus}
            />}
        </SItemContainer>
    )
}

export default TaskShow;