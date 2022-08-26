import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Button , TouchableOpacity} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { ImageContext } from "../context/ImageContext"
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchScreen = ({navigation}) => {
    const [imageName, setImageName] = useState("")
    const { isLoading, searchImageHandler, images } = useContext(ImageContext)

    const searchImage = () => {
        
        if(imageName)
        {
         searchImageHandler(imageName)
         if(images) {
            navigation.navigate("Results")
         }
         
        } else {
            console.warn("Image name is required!")
        }
    }

  return (
    <View style={styles.container}>
        <Spinner visible={isLoading}/>
        <View style={styles.wrapper}>
            <TextInput style={styles.input} placeholder='Search Image' value={imageName} onChangeText={text => setImageName(text)}/>
            <Button title='Search' onPress={searchImage} />
        </View>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    wrapper: {
        width: "80%"
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
        color: "black"
    }
})