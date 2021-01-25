import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from './Card';
import { colors } from '../constants/Style';
import ColorPicker from './ColorPicker';
import Light from './Light';
import Brightness from './Brightness';

const Dashboard = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#4A5568',
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Card
          title="Light Control"
          Icon={
            <FontAwesome5
              name="lightbulb"
              size={20}
              color={colors.gray}
              style={{ paddingHorizontal: 5 }}
            />
          }
          style={{ flex: 0.5 }}
          children={<Light />}
        />
        <Card
          title="color control"
          Icon={
            <MaterialIcons
              name="color-lens"
              size={20}
              color={colors.gray}
              style={{ paddingHorizontal: 5 }}
            />
          }
          style={{ flex: 1 }}
          children={<ColorPicker />}
        />
        <Card
          title="Brightness"
          Icon={
            <MaterialIcons
              name="brightness-7"
              size={20}
              color={colors.gray}
              style={{ paddingHorizontal: 5 }}
            />
          }
          style={{ flex: 0.5 }}
          children={<Brightness />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
