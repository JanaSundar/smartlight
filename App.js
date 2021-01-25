import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screen/Home';
import Settings from './Screen/Settings';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './constants/Style';
import { StatusBar, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RenderHeader } from './Screen/Header';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        barStyle="default"
        backgroundColor={colors.gray}
        showHideTransition="slide"
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleStyle: {
              textAlign: 'center',
              color: colors.white,
              fontWeight: 'bold',
              textTransform: 'capitalize',
              fontSize: 18,
            },
            title: 'Smart Control',
            headerStyle: {
              backgroundColor: colors.gray,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              height: 60,
            },
            headerLeft: () => <View />,
            header: (props) => RenderHeader(props),
            headerRight: (props) => {
              return (
                <Ionicons
                  name="ios-settings-outline"
                  size={30}
                  color={colors.white}
                  style={{
                    paddingRight: 20,
                  }}
                  {...props}
                />
              );
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Setting" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
