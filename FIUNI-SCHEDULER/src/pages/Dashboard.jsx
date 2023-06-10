import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashBoardScreen from "../screens/DashBoardScreen";
import ScreenHeader from "../components/ScreenHeader";

const Stack = createNativeStackNavigator();

const DashBoard = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="DashBoard screen"
                component={DashBoardScreen}
                options={{
                    headerTitle: (props) => <ScreenHeader name={"Bienvenido"} {...props}/>, 
                    headerStyle: {backgroundColor: 'rgba(0,0,0,0)'},
                    headerShadowVisible: false
                  }}
            />
        </Stack.Navigator>
    )
}

export default DashBoard;