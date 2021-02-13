import React from 'react';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import debounce from 'lodash.debounce';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';

const ColorPicker = (props) => {
  
  const changeColor = debounce(async (color) => {
    const url = await AsyncStorage.getItem('@ip_addr');
    if (!url) {
      ToastAndroid.showWithGravity(
        'Url Not found',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      return;
    }

    const { href } = new URL('/set', url);

    await axios.get(href, {
      params: {
        c: fromHsv(color),
      },
    });
  }, 300);

  return (
    <TriangleColorPicker
      onColorChange={changeColor}
      style={{ flex: 1, padding: 20 }}
      hideSliders
      {...props}
    />
  );
};

export default ColorPicker;
