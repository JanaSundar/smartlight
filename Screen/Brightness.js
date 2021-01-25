import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { colors } from '../constants/Style';
import { useState } from 'react';

const Brightness = () => {
  const [brightness, setBrightness] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.indicator}>{brightness}%</Text>
      <Slider
        style={{ flex: 1 }}
        minimumValue={0}
        maximumValue={100}
        animationType="spring"
        animateTransitions
        minimumTrackTintColor={colors.gray}
        thumbStyle={{
          height: 30,
          width: 30,
          borderRadius: 15,
          backgroundColor: '#38B2AC',
        }}
        trackStyle={{
          height: 20,
          borderRadius: 10,
          backgroundColor: colors.lightgray,
        }}
        value={brightness}
        onValueChange={([value]) => {
          console.log(value);
          setBrightness(value);
        }}
        step={5}
      />
    </View>
  );
};

export default Brightness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  indicator: {
    color: colors.lightgray,
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
