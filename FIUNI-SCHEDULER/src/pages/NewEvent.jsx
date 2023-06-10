import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NewEventScreen from "../screens/NewEventScreen";


const Stack = createNativeStackNavigator();

const NewEvent = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="New Event"
                component={NewEventScreen}
            />
        </Stack.Navigator>
    )
}

export default NewEvent;