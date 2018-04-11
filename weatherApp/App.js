import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import Input from './components/Input';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}  behavior="position">
        <ImageBackground
          source={require('./assets/cloudBack.png')}
          style={styles.image} //VIEW STYLES
          imageStyle={styles.background} //IMAGE STYLES
        >
          <Text style={styles.textTitle}>San Francisco</Text>
          <Text style={styles.textSub}>Cloudy</Text>
          <Text style={styles.textNumber}>24°</Text>

          <Input placeholderColor="white" placeholder="Search any U.S. city" />
        </ImageBackground>
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
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    color: '#FFFFFF',
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
    color: '#FFFFFF',
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
    color: '#FFFFFF',
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
