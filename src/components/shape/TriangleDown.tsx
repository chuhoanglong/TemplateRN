import { StyleSheet } from 'react-native';
import { Triangle } from './Triangle';
import React from 'react';

export const TriangleDown = ({ style }) => {
  return <Triangle style={[styles.triangleDown, style]} />;
};

const styles = StyleSheet.create({
  triangleDown: {
    transform: [{ rotate: '180deg' }],
  },
});
