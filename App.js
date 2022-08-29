/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src/navigation/Navigation';
import { ImageContextProvider } from "./src/context/ImageContext"



const App = () => {


  return (
    <ImageContextProvider>
      <Navigation />
    </ImageContextProvider>
   
  );
};


export default App;
