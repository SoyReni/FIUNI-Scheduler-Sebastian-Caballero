import React from "react";
import { SDashCardContainer, SDashCardContent, SDashCardTitle, STitleText } from "./styles/StyledDashBoard";
import { Text } from "react-native";

const Search = () => {
    return (
        <SDashCardContainer>
            <SDashCardTitle>
               <STitleText>Buscar eventos</STitleText>
            </SDashCardTitle>
            <SDashCardContent>
                <Text>Hola</Text>
            </SDashCardContent>
        </SDashCardContainer>
    )
}

export default Search 