import React, { Component } from "react";
import { FlatList } from "react-native";
import { SDashCardContainer, SDashCardContent, SDashCardTitle, STitleText } from "./styles/StyledDashBoard";
import AppContext from "../context/AppContext";
import DashBoardListItem from "./DashBoardListItem";

export default class TasksList extends Component {
  
    static contextType = AppContext;
    render(){

        return (
            <SDashCardContainer>
                <SDashCardTitle>
                    <STitleText>En los próximos 7 dias</STitleText>
                </SDashCardTitle>
                <SDashCardContent>
                    <FlatList
                        data={this.context.nextSevenDays}
                        renderItem={({item}) => <DashBoardListItem data={item} />}
                        keyExtractor={item => item.id}
                        />
                </SDashCardContent>
            </SDashCardContainer>
        )
    }
}
