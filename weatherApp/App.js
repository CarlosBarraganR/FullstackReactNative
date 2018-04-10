import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView } from 'react-native';
import Input from './components/Input';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}  behavior="padding">
        <Text style={styles.textTitle}>San Francisco</Text>
        <Text style={styles.textSub}>Cloudy</Text>
        <Text style={styles.textNumber}>24°</Text>

        <Input placeholderColor="white" placeholder="Search any U.S. city" />

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
       },
      android: {
        fontFamily: 'Roboto',
      },
      }),
    fontSize: 34
    },
    textSub: {
      textAlign: 'center',
      ...Platform.select({
        ios: {
          fontFamily: 'AvenirNext-Regular',
         },
        android: {
          fontFamily: 'Roboto',
        },
        }),
      fontSize: 16
      },
      textNumber: {
        textAlign: 'center',
        ...Platform.select({
          ios: {
            fontFamily: 'AvenirNext-Regular',
           },
          android: {
            fontFamily: 'Roboto',
          },
          }),
        fontSize: 28
        }
  });
