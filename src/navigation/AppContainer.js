import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeTodoScreen from '../screens/HomeTodoScreen';
import NewTodoScreen from '../screens/NewTodoScreen';
import UpdateTodoScreen from '../screens/UpdateTodoScreen';



const Stack = createNativeStackNavigator();

export const screenMap = {
    HomeTodo:'HomeTodo',
    NewTodo:'NewTodo',
    UpdateTodo:'UpdateTodo'
}

const AppContainer = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name={screenMap.HomeTodo}
            component={HomeTodoScreen}

        />
        <Stack.Screen name={screenMap.NewTodo}
            component={NewTodoScreen}

        />
        <Stack.Screen name={screenMap.UpdateTodo}
            component={UpdateTodoScreen}
        />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppContainer