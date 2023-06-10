import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NewEventScreen from "../screens/NewEventScreen";
import ScreenHeader from "../components/ScreenHeader";


const Stack = createNativeStackNavigator();

const NewEvent = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="New Event"
                component={NewEventScreen}
                options={{
                    headerTitle: (props) => <ScreenHeader name={"Agregar evento nuevo"} {...props}/>, 
                    headerStyle: {backgroundColor: 'rgba(0,0,0,0)'},
                    headerShadowVisible: false
                  }}
            />
        </Stack.Navigator>
    )
}

export default NewEvent;