import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/Style';
import { effects } from '../constants/effects_type';

const Effects = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#4A5568',
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Effects</Text>
        {effects.map((effect, ind) => (
          <Pressable key={ind} style={styles.effect}>
            <Text style={styles.text}>{effect}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Effects;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 0.5,
    padding: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  effect: {
    backgroundColor: colors.gray,
    width: '90%',
    padding: 10,
    borderRadius: 100,
  },
  text: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
