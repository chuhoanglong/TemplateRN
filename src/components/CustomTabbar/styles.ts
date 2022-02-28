import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBottomTabStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: Platform.deviceWidth,
          height: Platform.SizeScale(90),
          position: 'absolute',
          bottom: 0,
        },
        content: {
          flex: 1,
          flexDirection: 'row',
        },
        tabBar: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          marginTop: Platform.SizeScale(30) - insets.bottom + Platform.SizeScale(20),
        },
        tabBarHome: {
          width: Platform.SizeScale(63),
          height: Platform.SizeScale(63),
          borderRadius: Platform.SizeScale(63 / 2),
          backgroundColor: COLORS._FDCB44,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    [insets],
  );
};
