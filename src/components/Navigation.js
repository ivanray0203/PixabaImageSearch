import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SearchScreen from '../screens/SearchScreen'
import ResultScreen from '../screens/ResultScreen'
import DetailsScreen from '../screens/DetailsScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search Image" component={SearchScreen}/>
        <Stack.Screen name="Results" component={ResultScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation