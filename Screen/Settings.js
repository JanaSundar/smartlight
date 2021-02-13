import React from 'react';
import { StyleSheet, Text, View, Pressable, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/Style';
import { instructions } from '../constants/effects_type';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { validIpAddress } from '../Utils';

const Settings = () => {
  const [ip, setIp] = useState('');

  const save = async () => {
    const isIpValid = validIpAddress.test(ip);
    if (!isIpValid) {
      ToastAndroid.showWithGravity(
        'Invalid IpAddress',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    } else {
      await AsyncStorage.setItem('@ip_addr', ip);
      setIp('');
      ToastAndroid.showWithGravity(
        'IpAddress Saved',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#4A5568',
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.sectionStyle}>
          <FontAwesome5
            name="globe-africa"
            size={24}
            color={colors.gray}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.textinput}
            placeholder="http://192.168.0.9"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            value={ip}
            onChangeText={(value) => {
              setIp(value);
            }}
          />
        </View>
        <Pressable style={styles.button} onPress={save}>
          <Text style={styles.btntext}>Save</Text>
        </Pressable>
        <View style={styles.instruction}>
          <Text
            style={{
              textTransform: 'capitalize',
              fontWeight: 'bold',
              fontSize: 18,
              letterSpacing: 1,
              marginVertical: 5,
            }}
          >
            Instructions:
          </Text>
          {instructions.map((instruction, ind) => (
            <Text
              key={ind}
              style={{
                fontSize: 15,
                marginVertical: 5,
                fontWeight: '600',
              }}
            >
              {ind + 1} . {instruction}
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

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
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginVertical: 10,
  },
  textinput: {
    backgroundColor: colors.lightgray1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    flex: 1,
    marginHorizontal: 5,
    color: colors.gray,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: colors.lightgray1,
    padding: 10,
    borderRadius: 100,
    marginVertical: 10,
    width: '90%',
  },
  imageStyle: {
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: colors.gray,
    width: '90%',
    padding: 10,
    borderRadius: 100,
  },
  btntext: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  instruction: {
    alignSelf: 'flex-start',
    paddingHorizontal: 25,
    marginVertical: 10,
  },
});
