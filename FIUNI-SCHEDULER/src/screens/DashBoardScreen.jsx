import React from "react";
import { ScrollView } from "react-native";
import LastSevenDays from "../components/LastSevenDays";
import Pending from "../components/Pending";
import Search from "../components/Search";

const DashBoardScreen = () => {
    return (
        <ScrollView>
            <LastSevenDays/>
            <Pending/>
            <Search/>
        </ScrollView>

    )
}

export default DashBoardScreen;