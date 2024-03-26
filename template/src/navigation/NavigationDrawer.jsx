import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HomeScreen,
  LogIn,
  SignUp,
  Fetch,
  ReactContext,
  ReactSagaScreen,
} from '@screens';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const NavigationDrawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(user.data.email ? true : false);

  useEffect(() => {
    setIsLoggedIn(user.data.email ? true : false);
  }, [user]);

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Log In" component={LogIn} />
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;

const styles = StyleSheet.create({});
