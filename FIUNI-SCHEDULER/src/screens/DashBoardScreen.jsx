import React from "react";
import { ScrollView } from "react-native";
import LastSevenDays from "../components/LastSevenDays";
import Pending from "../components/Pending";
import Search from "../components/Search";
import { Separator } from "../components/styles/StyledDashBoard";

const DashBoardScreen = () => {
    return (
        <ScrollView>
            <LastSevenDays/>
            <Pending/>
            <Search/>
            <Separator/>
        </ScrollView>

    )
}

export default DashBoardScreen;