import React from 'react';

import {Text, StyleSheet} from 'react-native';

export const HeaderOne = ({children, textStyle}) => {
  return <Text style={{...styles.headerOne, ...textStyle}}>{children}</Text>;
};

export const HeaderTwo = ({children, textStyle}) => {
  return <Text style={{...styles.headerTwo, ...textStyle}}>{children}</Text>;
};

const styles = StyleSheet.create({
  headerOne: {
    fontFamily: 'Inter-Bold',
    fontSize: 30,
    color: '#f17f0d',
  },
  headerTwo: {
    fontFamily: 'Inter-Bold',
    fontSize: 25,
    color: '#f17f0d',
  },
});
