import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const SignUp = () => {
  const navigation = useNavigation()
  
  return (
    <View>
      <Text>SignUp</Text>
      <Button title="Have an account? Log In" onPress={() => {navigation.navigate('Log In')}}/>
      <Button title="useContext" onPress={() => {navigation.navigate('ReactContext')}}/>
    </View>
  )
}

export default SignUp