import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ListEvensScreen from "../screens/ListEventsScreen";
import ScreenHeader from "../components/ScreenHeader";
import EventView from "../components/EventView";

const Stack = createNativeStackNavigator();

const ListEvents = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="List screen"
                component={ListEvensScreen}
                options={{
                    headerTitle: (props) => <ScreenHeader name={"Lista de Eventos"} {...props}/>, 
                    headerStyle: {backgroundColor: 'rgba(0,0,0,0)'},
                    headerShadowVisible: false
                  }}
                  
            />
            <Stack.Screen 
                name="EventView"
                component={EventView}
                options={{
                    headerTitle: (props) => <ScreenHeader name={"Datos del evento"} {...props}/>, 
                    headerStyle: {backgroundColor: 'rgba(0,0,0,0)'},
                    headerShadowVisible: false
                  }}
                  
            />
        </Stack.Navigator>
    )
}

export default ListEvents;