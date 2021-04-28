import React from 'react';
import { useField } from 'formik';
import { StyleSheet } from 'react-native';
import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'green',
    color: 'blue',
  },
  errorText: {
    color: '#D73A4A',
  },
  redBorder: {
    borderColor: 'red'
  }
})

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.error && meta.touched;


  return (
    <>
      <TextInput
        style={style}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
