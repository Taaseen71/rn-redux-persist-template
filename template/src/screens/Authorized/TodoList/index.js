import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Todos from '../Todos';
import {height, moderateScale, width} from 'src/helpers/metrics';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const image = {
    uri: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=2731&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  return (
    // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View flex={1} style={styles.container}>
      <View style={styles.backgroundTop}>
        <View style={styles.inputContainer}>
          <Todos setTodos={setTodos} todos={todos} />
        </View>
      </View>
      <View style={styles.backgroundBottom}>
        <ScrollView style={styles.scrollView}>
          {todos.map((todo, index) => {
            return (
              <View style={styles.todo} key={index}>
                <Text style={styles.text}>{todo}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
    // </ImageBackground>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: moderateScale(25),
    backgroundColor: 'rgba(75,85, 197,0.9)',
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: moderateScale(10),
  },
  inputContainer: {
    flex: 1,
  },
  image: {
    height: height,
    width: width,
  },
  text: {
    fontSize: moderateScale(18),
    color: 'white',
    // padding: moderateScale(10),
  },
  todo: {
    margin: moderateScale(14),
    padding: moderateScale(15),
    borderWidth: 1,
    width: moderateScale(300),
    borderColor: 'rgba(75,85, 197,0.9)',
    borderRadius: 10,
    backgroundColor: 'rgba(75,85, 197,0.9)',
  },
  backgroundTop: {
    marginVertical: moderateScale(25),
    flex: 1,
    width: width,
    // backgroundColor: 'rgba(75,85, 197,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundBottom: {
    flex: 9,
    width: width,
    borderTopStartRadius: moderateScale(35),
    borderTopEndRadius: moderateScale(35),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
