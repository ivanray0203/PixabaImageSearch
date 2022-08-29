import React, { useContext } from 'react'
import { View, Text, FlatList, Image, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { ImageContext } from "../context/ImageContext"
import Images from '../components/results/Images'

const ResultScreen = () => {
const { images, isLoading } = useContext(ImageContext)
  return (

        <View style={{ flex: 1 }}>
            <Spinner visible={isLoading}/>
       <FlatList
        numColumns={2}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={( {item} ) => (
            <Images imageUrl={item.previewURL} id={item.id}/>
        )}
      />
    </View>
    
  )
}


export default ResultScreen