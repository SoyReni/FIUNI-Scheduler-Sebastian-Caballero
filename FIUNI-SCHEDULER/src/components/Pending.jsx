import React, { useContext, useReducer } from "react";
import { SDashCardContainer, SDashCardContent, SDashCardTitle, STitleText, SVerTodos } from "./styles/StyledDashBoard";
import DashBoardListItem from "./DashBoardListItem";
import { ApplicationContext } from "../context/NewContext";

function Pending() {
    const {pending} = useContext(ApplicationContext)
    
    return (
        <SDashCardContainer>
            <SDashCardTitle>
                <STitleText>Tareas Pendientes</STitleText>
            </SDashCardTitle>
            <SDashCardContent scrollEnabled={true}>
                {pending && pending.map((item, index) => (
                    <DashBoardListItem key={item.id} data={item} />
                ))}
            </SDashCardContent>
        </SDashCardContainer>
    );
}

export default Pending;



