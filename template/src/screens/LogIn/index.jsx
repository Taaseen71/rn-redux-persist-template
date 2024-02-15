import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import globalStyle from 'src/styles/GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import {logInUser, relogInUser} from 'src/features/user/userSlice'

const LogIn = ({ setIsLoggedIn}) => {
  const navigation = useNavigation()
  const [pwd, setPwd] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch();
  
  // const userName = useSelector(state => state.user.userName)


  useEffect(() => {
    // logInUser(useSelector(state => state.user.userName))
  }, [])
  
  
  return (
    <View>
      <TextInput 
        style={globalStyle().TextInputComponent}
        onChangeText={setEmail} 
        value={email} 
        placeholder={"Enter Email"}
      />
      <TextInput 
        style={globalStyle().TextInputComponent}
        value={pwd} 
        onChangeText={setPwd} 
        placeholder={"Enter Pwd"}
      />
      <TouchableOpacity 
        style={globalStyle().button} 
        onPress={() => {
          dispatch(logInUser(email))
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
      
      {/* <Button title='Log In' onPress={() => {setIsLoggedIn(true)}}/> */}
      <Button title="Don't have an account? Sign Up" onPress={() => {navigation.navigate('Sign Up')}}/>
    </View>
  )
}

export default LogIn