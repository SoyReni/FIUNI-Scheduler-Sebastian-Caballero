import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import DashBoard from './src/pages/Dashboard';
import Logo from './src/components/Logo';
import NewEvent from './src/pages/NewEvent';
import ListEvents from './src/pages/ListEvents';
import { Ionicons } from 'expo-vector-icons';
import { StateProvider } from './src/context/AppState';
import { ApplicationContextProvider } from './src/context/NewContext';

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <ApplicationContextProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Todas"
            component={ListEvents}
            options={{
              headerTitle: (props) => <Logo {...props}/>,
              tabBarActiveTintColor: "#DB352F",
              tabBarIcon: (tabinfo) => <Ionicons
              name="ios-list"
              size={35}
              color= {tabinfo.focused ? "#DB352F" : "#8e8e93"}
              />
              
            }}
            />
          <Tab.Screen
            name="Dashboard"
            component={DashBoard}
            options={{
              headerTitle: (props) => <Logo {...props}/>,
              tabBarActiveTintColor: "#DB352F",
              tabBarIcon: (tabinfo) => <Ionicons
              name="md-home"
              size={35}
              color= {tabinfo.focused ? "#DB352F" : "#8e8e93"}
              />
            }}
            />
          <Tab.Screen
            name="NewEvent"
            component={NewEvent}
            options={{headerTitle: (props) => <Logo {...props}/>,
            tabBarActiveTintColor: "#DB352F",
            tabBarIcon: (tabinfo) => <Ionicons
            name="md-add"
            size={35}
            color= {tabinfo.focused ? "#DB352F" : "#8e8e93"}
            />}}
            />
        </Tab.Navigator>
      </NavigationContainer>
    </ApplicationContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;