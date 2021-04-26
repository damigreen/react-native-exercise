import React from 'react';
import { useField } from 'formik';
import { StyleSheet } from 'react-native';
import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  textContainer: {
    // flex: 1,
    // padding: 10,
    backgroundColor: 'green',
    color: 'blue',
  }
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={styles}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={StyleSheet.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
