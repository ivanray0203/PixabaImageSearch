import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from '../../UI/Icon'

const Author = ({author}) => {
  return (
    <View style={styles.tagLabel}>
        <Icon iconName="user" iconStyle={styles.iconStyle}/>
        <Text style={styles.authorStyle}>: {author}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    tagLabel: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      iconStyle: {
        color: 'black',
        fontSize: 20,
      },
      authorStyle:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
      }
      
})

export default Author

