import React from "react";
import { FlatList } from "react-native";
import { SDashCardContainer, SDashCardContent, SDashCardTitle, STitleText } from "./styles/StyledDashBoard";

const LastSevenDays = () => {
    
    return (
        <SDashCardContainer>
            <SDashCardTitle>
               <STitleText>En los próximos 7 dias</STitleText>
            </SDashCardTitle>
            <SDashCardContent>
            <FlatList
                data={null}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
            </SDashCardContent>
        </SDashCardContainer>
    )
}

export default LastSevenDays;