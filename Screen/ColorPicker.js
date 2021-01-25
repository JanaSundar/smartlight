import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker';

const ColorPicker = (props) => {
  return (
    <TriangleColorPicker
      onColorSelected={(color) => alert(`Color selected: ${color}`)}
      style={{ flex: 1, padding: 20 }}
      {...props}
    />
  );
};

export default ColorPicker;

const styles = StyleSheet.create({});
