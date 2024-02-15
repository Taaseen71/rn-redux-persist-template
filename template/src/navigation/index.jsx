import { View, Text, Button } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LogIn, SignUp, Fetch, ReactContext } from '@screens';
import React, {useState, useEffect} from 'react'
import {useNavigation} from '@react-navigation/native';
import ReactSagaScreen from 'src/screens/ReactSagaScreen';
import { useSelector } from 'react-redux';
        

const Navigation = (props) => {
    
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation()
    
    const user = useSelector(state => state.user)
    const [isLoggedIn, setIsLoggedIn] = useState(user.userName ? true : false)

    useEffect(() => {
    //   setIsLoggedIn(user.userName?.data ? true : false)
      setIsLoggedIn(user.userName ? true : false)
    }, [user])
    

    
    
    
    
    
    
    const Authorized = () => (
        <Stack.Navigator>
            <Stack.Screen name="Home">
                {() => <HomeScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
            </Stack.Screen>
            <Stack.Screen name="Fetch">
                {() => <Fetch isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )

    const UnAuthorized = () => (
        <Stack.Navigator>
            <Stack.Screen 
                name="ReactSagaScreen" 
                options={{headerRight: () => (
                                    <Button
                                        title={"Log In"} 
                                        onPress={() => {navigation.navigate('Log In')}}
                                    />)
                        }}
            >
                {() => {<ReactSagaScreen/>}}
            </Stack.Screen>

            <Stack.Screen 
                name="Log In" 
                options={{
                            headerRight: () => (
                                <Button 
                                    title={"Sign Up"} 
                                    onPress={() => {navigation.navigate('Sign Up')}}
                                />
                            )
                        }}
            >
                {() => <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> }
            </Stack.Screen>

            <Stack.Screen name="Sign Up" component={SignUp}/>
            
            <Stack.Screen name="ReactContext" component={ReactContext}/>
        </Stack.Navigator>
    )
    
  return (isLoggedIn ? <Authorized/> : <UnAuthorized/>)
}

export default Navigation