import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { ImageContext } from "../context/ImageContext"
import Spinner from 'react-native-loading-spinner-overlay/lib'
import AntDesign from "react-native-vector-icons/AntDesign"

const DetailsScreen = ({ navigation }) => {
  const { searchImageHandler, imageDetails, isLoading, images, tags } = useContext(ImageContext)

  const searchImageByTag = (tag) => {
    searchImageHandler(tag)
    if (images) {
      navigation.navigate("Results")
    }
  }
  return (
    <>
      {imageDetails ? (
        <View style={styles.container}>
          <Spinner visible={isLoading} />
          <View style={styles.detailsWrapper}>
            <Image style={styles.image} source={{ uri: imageDetails.imageURL }} />
            <View style={styles.tagLabel}>
              <AntDesign name='user' style={{ color: "black", fontSize: 20}}/>
               <Text style={{ color: 'black' }}>Author: {imageDetails.user}</Text>
            </View>
            <View style={styles.tagLabel}>
              <AntDesign name='tags' style={{ color: "black", fontSize: 20}}/>
               <Text style={{ color: 'black' }}>Tags: </Text>
            </View>
            
            <View style={styles.tagsContainer}>
              
              {tags.map(tag => (
                <View key={tag}>
                <TouchableOpacity key={tag} style={styles.tagsButton} onPress={() => searchImageByTag(tag)}>
                  <Text style={{ color: "white", textAlign: 'center' }}> {tag} </Text>
                </TouchableOpacity>
                </View>
              ))}

            </View>
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
  },
  text: {
    color: "black"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  tags: {
    color: "black"
  },
  tagsContainer: {
    padding: 10,
    borderWidth: 0.75,
    marginTop: 10,
    gap: 20,
    textAlign: 'center'
  },
  tagsButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    textAlign: 'center',
    marginTop: 2,
  },
  tagLabel: {
    marginTop: 20,
    flexDirection: 'row'
  }
})

export default DetailsScreen