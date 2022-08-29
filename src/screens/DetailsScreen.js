import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { ImageContext } from "../context/ImageContext"
import Spinner from 'react-native-loading-spinner-overlay/lib'
import AntDesign from "react-native-vector-icons/AntDesign"

// components
import Tags from '../components/details/Tags'
import Author from '../components/details/Author'
import PreviewImage from '../components/details/PreviewImage'

const DetailsScreen = () => {
  const { imageDetails, isLoading } = useContext(ImageContext)

  return (
    <>
      {imageDetails ? (
        <View style={styles.container}>
          <Spinner visible={isLoading} />
          <View style={styles.detailsWrapper}>
              <PreviewImage imageURL={imageDetails.imageURL}/>
              <Author author={imageDetails.user} />
              <Tags/>
          </View>
        </View>
      ) : (<Text>No Details</Text>)}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50
  },
  detailsWrapper: {
    width: "80%",
    height: "50%",
    padding: 4
  }
})

export default DetailsScreen