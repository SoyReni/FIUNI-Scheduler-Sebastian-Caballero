import React, {Component} from "react";
import { SDashCardContainer, SDashCardContent, SDashCardTitle, STitleText, SVerTodos } from "./styles/StyledDashBoard";
import AppContext from "../context/AppContext";
import DashBoardListItem from "./DashBoardListItem";

export default class Pending extends Component {
  
    static contextType = AppContext;
    render(){

        return (
            <SDashCardContainer>
                <SDashCardTitle>
                <STitleText>Tareas Pendientes</STitleText>
                </SDashCardTitle>
                <SDashCardContent
                        scrollEnabled={true}
                    >
                        {this.context.pending.map((item, index) => (
                            (index <= 3) && <DashBoardListItem key={item.id} data={item} />
                        ))}
                    </SDashCardContent>
                <SVerTodos>Ver Todos...</SVerTodos>
            </SDashCardContainer>
        )
    }
}