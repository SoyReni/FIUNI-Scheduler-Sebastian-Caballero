import React from "react";
import { SDashCardContainer, SDashCardContent, SDashCardTitle, STitleText } from "./styles/StyledDashBoard";
import { Text } from "react-native";

const Pending = () => {
    return(
        <SDashCardContainer>
            <SDashCardTitle>
               <STitleText>Tareas Pendientes</STitleText>
            </SDashCardTitle>
            <SDashCardContent>
                <Text>Hola</Text>
            </SDashCardContent>
        </SDashCardContainer>
    )
}

export default Pending