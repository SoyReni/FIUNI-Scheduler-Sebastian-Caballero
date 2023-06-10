import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import DashBoard from './src/pages/Dashboard';
import Logo from './src/components/Logo';
import NewEvent from './src/pages/NewEvent';
import ListEvents from './src/pages/ListEvents';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="List"
          component={ListEvents}
          options={{
            headerTitle: (props) => <Logo {...props}/>
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={DashBoard}
          options={{headerTitle: (props) => <Logo {...props}/>}}
        />
        <Tab.Screen
          name="NewEvent"
          component={NewEvent}
          options={{headerTitle: (props) => <Logo {...props}/>}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
