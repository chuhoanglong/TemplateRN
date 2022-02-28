import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useSwapStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          paddingTop: 30,
        },
        box: {
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        },
        boxWrapper: {
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        },
        body: {},
        text: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      }),
    [insets],
  );
};
