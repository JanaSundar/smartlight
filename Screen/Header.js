import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colors } from '../constants/Style';

export const RenderHeader = ({ scene, ...props }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Header
      title={title}
      style={options.headerStyle}
      titleStyle={options.headerTitleStyle}
      headerRight={options.headerRight}
      headerLeft={options.headerLeft}
      {...props}
    />
  );
};

const Header = ({
  title,
  titleStyle,
  style,
  headerRight,
  headerLeft,
  ...props
}) => {
  return (
    <View style={{ backgroundColor: '#4A5568' }}>
      <View
        style={{
          ...style,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        {...props}
      >
        <View style={{ flex: 0.2, alignSelf: 'center' }}>{headerLeft()}</View>
        <Text
          style={{ ...titleStyle, flex: 1, justifyContent: 'space-between' }}
        >
          {title}
        </Text>
        <Pressable
          style={{ flex: 0.2 }}
          onPress={() => {
            props.navigation.navigate('Setting');
          }}
        >
          {headerRight()}
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
