import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import globalStyle from 'src/styles/GlobalStyles'
import { useDispatch, useSelector } from 'react-redux';

const SignUp = () => {
  const navigation = useNavigation()
  const [pwd, setPwd] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch();
  
  return (
    <View>
      <Text>SignUp</Text>
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
      <Button title="Have an account? Log In" onPress={() => {navigation.navigate('Log In')}}/>
      <Button title="useContext" onPress={() => {navigation.navigate('ReactContext')}}/>
    </View>
  )
}

export default SignUp