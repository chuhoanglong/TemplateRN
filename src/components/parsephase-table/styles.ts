import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useParsephaseTableStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        tableItem: {
          alignSelf: 'center',
          paddingHorizontal: Platform.SizeScale(20),
          paddingVertical: Platform.SizeScale(10),
          width: Platform.SizeScale(100),
        },
        list: {
          backgroundColor: COLORS.WHITE,
          alignSelf: 'center',
          borderRadius: Platform.SizeScale(20),
          padding: Platform.SizeScale(15),
        },
      }),
    [insets],
  );
};
