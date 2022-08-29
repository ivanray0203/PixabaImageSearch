import React, { useState, useContext } from 'react'
import { View, StyleSheet } from "react-native"
import { ImageContext } from "../../context/ImageContext"
import { useNavigation } from "@react-navigation/native"

// UI Components
import TextInputComponent from '../../UI/TextInputComponent'
import ButtonWithIcon from '../../UI/ButtonWithIcon'

// navigation types

import { RESULTS } from "../../navigation/NavigationTypes"

const SearchBar = () => {
  const { searchImageHandler, images } = useContext(ImageContext)

  const [imageName, setImageName] = useState("")
  const [imageNameRequiredText, setImageNameRequiredText] = useState("")

  const navigation = useNavigation()

  const searchImage = () => {
    if(imageName)
    {
     searchImageHandler(imageName)
     if(images) {
        setImageNameRequiredText("")
        navigation.navigate(RESULTS)
     }
     
    } else {
      setImageNameRequiredText("Image name is required")
    }
}

  return (
    <View>
      <TextInputComponent value={imageName} placeholder="Search Image" style={styles.input} onChangeText={text => setImageName(text)} placeholderTextColor="#D3D3D3" textValidation={imageNameRequiredText}/>
      <ButtonWithIcon iconName="search1" iconStyle={styles.iconStyle} title="Search Image" textStyle={styles.textStyle} buttonStyle={styles.buttonStyle} onPress={searchImage}/>
    </View>
  )
}

const styles = StyleSheet.create({

  input: {
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#bbb',
      borderRadius: 5,
      paddingHorizontal: 14,
      color: "black"
  },
  iconStyle: {
    color: 'white',
    fontSize: 20
  },
  textStyle: {
    color: 'white',
    fontSize: 20
  },
  buttonStyle: {
    backgroundColor: '#0096FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: 8,
    borderRadius: 10,
    marginTop: 10
  }
})

export default SearchBar

