import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, verticalScale} from 'src/helpers/metrics';

const Todos = ({todos, setTodos}) => {
  const [text, onChangeText] = useState('');

  const handleSubmit = () => {
    if (text.trim() !== '') {
      setTodos(prevTodos => [...prevTodos, text]);
      onChangeText('');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Add New"
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  input: {
    width: moderateScale(300),
    height: verticalScale(60),
    borderWidth: moderateScale(1),
    borderColor: '#ccc',
    // color: 'white',
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    fontSize: moderateScale(18),
  },
  text: {
    fontSize: moderateScale(18),
  },
});
