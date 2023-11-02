import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../Screens/Profile/Profile';
import LoginScreen from '../Screens/Login/Login';
import ProjectScreen from '../Components/Projects/Projects';
import ProfessionalExperience from '../Screens/ProfessionalExperience/ProfessionalExperience';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerTintColor: 'black' }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Projects" component={ProjectScreen} />
        <Stack.Screen name='ProfessionalExperience' component={ProfessionalExperience} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
