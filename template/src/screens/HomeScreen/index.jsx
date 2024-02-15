import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser } from 'src/features/user/userSlice'

const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const userName = useSelector(state => state.user?.userName)
  
  console.log(useSelector(state => state.user))
  return (
    <View>
      <Text>{userName}</Text>
      <Button title='Log Out' onPress={() => {dispatch(resetUser())}}/>
      <Button title='Fetch' onPress={() => {navigation.navigate('Fetch')}}/>
    </View>
  )
}

export default HomeScreen