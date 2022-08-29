import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SearchScreen from '../screens/SearchScreen'
import ResultScreen from '../screens/ResultScreen'
import DetailsScreen from '../screens/DetailsScreen'

// types

import { SEARCH_IMAGE, RESULTS, DETAILS } from "./NavigationTypes"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SEARCH_IMAGE} component={SearchScreen}/>
        <Stack.Screen name={RESULTS} component={ResultScreen}/>
        <Stack.Screen name={DETAILS} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation