import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const PreviewImage = ({ imageURL }) => {
  return (
    <View>
        <Image style={styles.image} source={{ uri: imageURL }} />
    </View>
  )
}

const styles = StyleSheet.create({  
    image: {
      width: "100%",
      height: "100%",
    },
  })

export default PreviewImage
