import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Icon = ({iconName, iconStyle}) => {
  return (
    <AntDesign name={iconName} style={iconStyle} />
  )
}

export default Icon