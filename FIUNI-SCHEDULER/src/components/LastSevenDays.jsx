import React, { useContext, useReducer } from "react";
import { SDashCardContainer, SDashCardContent, SDashCardTitle, STitleText, SVerTodos } from "./styles/StyledDashBoard";
import { AppContext } from "../context/AppState";
import DashBoardListItem from "./DashBoardListItem";
import { ApplicationContext } from "../context/NewContext";

const TasksList = () => {
    const {nextSevenDays} = useContext(ApplicationContext)
    
    return (
        <SDashCardContainer>
            <SDashCardTitle>
                <STitleText>En los próximos 7 dias</STitleText>
            </SDashCardTitle>
            <SDashCardContent scrollEnabled={true}>
                {nextSevenDays && nextSevenDays.map((item, index) => (
                     <DashBoardListItem key={item.id} data={item} />
                ))}
            </SDashCardContent>
        </SDashCardContainer>
    );
};

export default TasksList;