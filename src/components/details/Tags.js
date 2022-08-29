import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonWithIcon from '../../UI/ButtonWithIcon'
import { ImageContext } from "../../context/ImageContext"
import { useNavigation } from '@react-navigation/native'

// navigation types
import { RESULTS } from "../../navigation/NavigationTypes"

const Tags = () => {
    const { searchImageHandler, images, tags } = useContext(ImageContext)
    const navigation = useNavigation()

    const searchImageByTag = (tag) => {
        searchImageHandler(tag)
        if (images) {
          navigation.navigate(RESULTS)
        }
      }

  return (
    <View style={styles.tagsContainer}>
        {tags.map((tag) => (
            <ButtonWithIcon key={tag} iconName="tags" iconStyle={styles.iconStyle} title={tag} textStyle={styles.textStyle} buttonStyle={styles.buttonStyle} onPress={() => searchImageByTag(tag)}/>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
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
  },
  tagsContainer: {
    padding: 10,
    borderWidth: 0.75,
    marginTop: 10,
    gap: 20,
    textAlign: 'center'
  },
})

export default Tags

