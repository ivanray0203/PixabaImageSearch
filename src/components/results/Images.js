import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ImageContext } from "../../context/ImageContext"

// navigation types

import { DETAILS } from "../../navigation/NavigationTypes"

const Images = ({ imageUrl, id }) => {
    const navigation = useNavigation()
    const { getImageDetailsHandler, imageDetails } = useContext(ImageContext)

    const showImageDetails = () => {
        getImageDetailsHandler(id)
        if(imageDetails) {
        navigation.navigate(DETAILS)
        }
    }
    return (
        <TouchableOpacity style={styles.imageContainer} onPress={showImageDetails}>
            <View >
                <Image style={styles.image} source={{ uri: imageUrl }} />
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: "48%",
        alignItems: 'center',
        borderWidth: 0.75,
        margin: "1%",
        padding: 15
    },
    image: {
        width: 150,
        height: 150
    },
    text: {
        color: "black"
    }
})

export default Images