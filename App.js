import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import Display from './Display';
const App = () => {
  const [name,setName] =useState('');
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}}
      style={{
        width:200,
        height:200
      }} ></Image>
      <Display name={name}/>
      <Button onPress={()=>alert("You clicked me!")} title="Click Me"></Button>
      <TextInput onChangeText={(text)=>setName(text)} style={{height:40,width:150,border:'1px solid'}} defaultValue={name}></TextInput>      
    </View>
  )
}

export default App;