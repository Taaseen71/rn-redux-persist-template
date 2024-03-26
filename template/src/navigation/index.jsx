import {View, Text, Button} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  LogIn,
  SignUp,
  Fetch,
  ReactContext,
  ReactSagaScreen,
} from '@screens';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logOutUser} from 'src/features/user/userSlice';
import {kApiLogOut} from 'src/config/WebService';
import {moderateScale} from 'src/helpers/metrics';

const Navigation = props => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  // const [isLoggedIn, setIsLoggedIn] = useState(user.data?.id ? true : false)
  const [isLoggedIn, setIsLoggedIn] = useState(user.data.email ? true : false);

  const naviButton = (optionName, pageName, pageTitle) => {
    return {
      [optionName]: () => (
        <Button
          title={pageName}
          onPress={() => {
            navigation.navigate(pageTitle ? pageTitle : pageName);
          }}
        />
      ),
    };
  };
  // const navigateButton = (arg1, arg2) => (
  //     <Button  title={arg1}  onPress={() => {navigation.navigate(arg2 ? arg2 : arg1)}} />
  // )

  useEffect(() => {
    setIsLoggedIn(user.data.email ? true : false);
  }, [user]);

  const Authorized = () => (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Home"
        options={{contentStyle: {backgroundColor: 'rgba(75,85, 197,0.9)'}}}>
        {() => (
          <HomeScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )}
      </Stack.Screen> */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: 'rgba(75,85, 197,0.9)',
            color: 'white',
          },
          headerTitleStyle: {
            // fontWeight: 'bold',
            color: 'white',
            padding: moderateScale(15),
            fontSize: moderateScale(15),
          },
          headerRight: () => (
            <Button
              color={'white'}
              style={{fontSize: moderateScale(25)}}
              title="Log Out"
              onPress={() => {
                dispatch(
                  logOutUser({
                    // access_token: user?.data?.id
                  }),
                );
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="Fetch">
        {() => <Fetch isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
    </Stack.Navigator>
  );

  const UnAuthorized = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="React Saga Screen"
        options={naviButton('headerRight', 'Log In')}>
        {() => <ReactSagaScreen />}
      </Stack.Screen>

      <Stack.Screen
        name="Log In"
        options={naviButton('headerRight', 'Sign Up')}>
        {() => <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>

      <Stack.Screen name="Sign Up" component={SignUp} />

      <Stack.Screen name="ReactContext" component={ReactContext} />
    </Stack.Navigator>
  );

  return isLoggedIn ? <Authorized /> : <UnAuthorized />;
};

export default Navigation;
