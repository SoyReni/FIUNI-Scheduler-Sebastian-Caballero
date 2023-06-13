import React from "react";
import { View, Text } from "react-native";

const DashBoardListItem = (data) => {
    return (
        <View >
        <Text >{data}</Text>
        <Text 
        >
         delete
        </Text>
       </View>
    )
}

export default DashBoardListItem