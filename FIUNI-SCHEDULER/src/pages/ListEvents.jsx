import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ListEvensScreen from "../screens/ListEventsScreen";

const Stack = createNativeStackNavigator();

const ListEvents = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="List screen"
                component={ListEvensScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default ListEvents;