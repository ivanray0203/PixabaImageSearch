import React from 'react'
import { Text, View, TextInput, StyleSheet } from "react-native"

const TextInputComponent = ({ secureTextEntry, placeholder, style, value, onChangeText, placeholderTextColor, textValidation}) => {
  return (
    <View>
        <TextInput 
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          style={style}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}/>
          <Text style={styles.textValidation}>{textValidation}</Text>
    </View>
  )
}

export default TextInputComponent

const styles = StyleSheet.create({
  textValidation: {
    color: 'red',
    fontSize: 14,
  }
})