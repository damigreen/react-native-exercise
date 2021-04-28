import React from 'react';
import { Text, View, StyleSheet, Button, Platform } from 'react-native';
import FormikTextInput from './FormikTextInputComponent';
import { Formik } from 'formik';
import * as yup from 'yup';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
  headingText: {
    fontSize: 16,
    padding: 10,
    color: Platform.select({
      android: '#1D80F3',
      ios: '#50A550',
      default: 'yellow',
    })
  },
  textInput: {
    color: Platform.OS === 'android' ? 'green' : 'black',
    padding: 5,
    borderWidth: 1,
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: 'gray',
    marginTop: 3,
    marginBottom: 12,
  },
  btnStyle: {
    marginTop: 4,
    color: '#fff',
    backgroundColor: 'blue',
    borderRadius: 6,
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
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().min(8, 'Password must be more than 8 characters', () => {console.log(999999999999999999999999999999999999999999999999999999999999999999999999999999999999)}),
});

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
      <Text style={styles.headingText}>Sign in to application - {Platform.OS}</Text> 
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
};

export default SignIn;
