import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/Style';

const Card = ({
  title = 'Light Control',
  Icon,
  children,
  style = {},
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        {Icon}
        <Text style={styles.title}>{title}</Text>
      </View>

      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    elevation: 0.5,
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.gray,
    textTransform: 'capitalize',
  },
});
