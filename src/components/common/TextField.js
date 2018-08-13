import React from 'react';
import { TextInput, View, Text } from 'react-native';

const TextField = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { textInputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={textInputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  textInputStyle: {
    color: '#000',
    padding: 10,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { TextField };