import React from "react";
import { View, Text } from "react-native";
import LastSevenDays from "../components/LastSevenDays";
import Pending from "../components/Pending";
import Search from "../components/Search";

const DashBoardScreen = () => {
    return (
        <View>
            <LastSevenDays/>
            <Pending/>
            <Search/>
        </View>

    )
}

export default DashBoardScreen;