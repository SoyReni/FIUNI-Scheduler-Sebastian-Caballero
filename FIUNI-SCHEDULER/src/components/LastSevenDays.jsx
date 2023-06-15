import React, { useContext } from "react";
import { SDashCardContainer, SDashCardContent, SDashCardTitle, STitleText, SVerTodos } from "./styles/StyledDashBoard";
import { AppContext } from "../context/AppState";
import DashBoardListItem from "./DashBoardListItem";

const TasksList = () => {
    const context = useContext(AppContext);

    return (
        <SDashCardContainer>
            <SDashCardTitle>
                <STitleText>En los próximos 7 dias</STitleText>
            </SDashCardTitle>
            <SDashCardContent scrollEnabled={true}>
                {context.nextSevenDays.map((item, index) => (
                    index <= 3 && <DashBoardListItem key={item.id} data={item} />
                ))}
            </SDashCardContent>
            <SVerTodos>Ver Todos...</SVerTodos>
        </SDashCardContainer>
    );
};

export default TasksList;