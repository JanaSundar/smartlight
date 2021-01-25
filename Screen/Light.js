import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { colors } from '../constants/Style';

const Light = () => {
  const [light, setLight] = useState(false);
  const toggleSwitch = () => setLight((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.indicator}>{light ? 'off' : 'on'}</Text>
      <Switch
        trackColor={{ false: colors.lightgray, true: colors.gray }}
        thumbColor={light ? colors.white : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={light}
        style={{ transform: [{ scale: 1.2 }] }}
        
      />
    </View>
  );
};

export default Light;

const styles = StyleSheet.create({
  indicator: {
    color: colors.lightgray,
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
