import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Effects from './Effects';
import { colors } from '../constants/Style';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  labelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  style: {
    backgroundColor: colors.gray,
    height: 60,
    borderTopWidth: 0,
  },
  activeTintColor: colors.white,
  inactiveTintColor: colors.lightgray,
  labelPosition: 'beside-icon',
};

const initialRouteName = 'Dashboard';

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Dashboard') {
      iconName = focused ? 'ios-home' : 'ios-home-outline';
    } else if (route.name === 'Effects') {
      iconName = focused ? 'ios-flash' : 'ios-flash-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      {...{ initialRouteName, screenOptions }}
      tabBarOptions={{ ...tabBarOptions, safeAreaInsets: insets }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen name="Effects" component={Effects} />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
