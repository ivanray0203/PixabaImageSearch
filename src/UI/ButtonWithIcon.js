import React from 'react'
import { View, TouchableOpacity,Text } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"

const ButtonWithIcon = ({iconStyle, iconName, title, textStyle, buttonStyle, onPress}) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <AntDesign name={iconName} style={iconStyle}/>
            <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonWithIcon