import {View, Text, Button, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logOutUser} from 'src/features/user/userSlice';
import {kApiLogOut} from 'src/config/WebService';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  moderateScale,
  horizontalScale,
  verticalScale,
  height,
} from 'src/helpers/metrics';
import TodoList from '../TodoList';

const HomeScreen = () => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  // const user = useSelector(state => state.user)

  return (
    <View flex={1}>
      {/* <View style={styles.container1}>
        <Text style={styles.text}>Hello1</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>Hello2</Text>
        <Button
          title="Log Out"
          onPress={() => {
            dispatch(
              logOutUser({
                url: kApiLogOut,
                // access_token: user?.data?.id
              }),
            );
          }}
        />
      </View> */}
      <TodoList />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'blue',
    height: height / 2,
  },
  container2: {
    backgroundColor: 'red',
    height: height / 2,
  },
  text: {
    fontSize: moderateScale(35),
  },
});
