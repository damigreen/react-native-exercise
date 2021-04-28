import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    color:'#333',
    padding: 5,
    borderRadius: 1,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'red',
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = error ? styles.container : [style];


  return(
    <NativeTextInput style={textInputStyle} {...props} />
  );
};

export default TextInput;
