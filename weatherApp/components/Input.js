import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView } from 'react-native';

export default class Input extends React.Component {
  render() {
    return (
        <TextInput
          autoCorrect={false}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderColor}
          style={styles.textInput}
          clearButtonMode="always"
        />
    );
  }
}

const styles = StyleSheet.create({
      textInput: {
        backgroundColor: '#666',
        color: 'white',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
      },
  });
