import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './FormikTextInputComponent';
import { Formik } from 'formik';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
  textInput: {
    borderRadius: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    padding: 5
  },
  btnStyle: {
    color: '#fff',
    backgroundColor: 'blue',
  },
});

const initialValues = {
  username: '',
  password: '',
};



const SignInForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.textInput}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        style={styles.textInput}
        name="password"
        placeholder="password"
      />
      <Button
        style={styles.btnStyle}
        onPress={onSubmit}
        title="Sign In"
        color="blue"
        accessibilityLabel="Sign in button for repository"
      />
    </View>
  )
}

const SignIn = () => {
  const onSubmit = values => {
    const username = values.username;
    const password = values.password;

    if (username && password) {
      console.log(`${username} successfully signed in`);
    };
  };
  
  return  (
    <View style={styles.container}>
      <Text>Sign in to application</Text> 
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
};

export default SignIn;
