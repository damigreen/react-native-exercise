import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    color:'#333',
    padding: 5,
    borderRadius: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.container, style];
  // const textInputStyle = [style.textContainer];
  console.log(style)


  return(
    <NativeTextInput style={textInputStyle} {...props} />
  );
};

export default TextInput;
