import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { ImageContext } from "../context/ImageContext"

// component
import SearchBar from '../components/search/SearchBar'

const SearchScreen = ({navigation}) => {
    const { isLoading } = useContext(ImageContext)
  return (
    <View style={styles.container}>
        <Spinner visible={isLoading}/>
        <View style={styles.wrapper}>
        <SearchBar />
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
    }
})