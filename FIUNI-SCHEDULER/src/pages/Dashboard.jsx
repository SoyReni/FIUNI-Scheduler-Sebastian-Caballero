import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashBoardScreen from "../screens/DashBoardScreen";

const Stack = createNativeStackNavigator();

const DashBoard = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="DashBoard screen"
                component={DashBoardScreen}
            />
        </Stack.Navigator>
    )
}

export default DashBoard;