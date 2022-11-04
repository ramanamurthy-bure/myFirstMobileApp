import React from 'react'
import { View,Text } from 'react-native';

export const Display = ({name}) => {
  return (
    <View>
        <Text style={{fontSize:15}}>Content from Display Component</Text>
    </View>     
  )
}

export default Display;