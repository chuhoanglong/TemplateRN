import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBuySellButtonStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        buy: {
          width: Platform.SizeScale(180),
          height: Platform.SizeScale(55),
          borderRadius: Platform.SizeScale(20),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS._06DE68,
        },
        sell: {
          width: Platform.SizeScale(180),
          height: Platform.SizeScale(55),
          borderRadius: Platform.SizeScale(20),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS._F21515,
        },
      }),
    [],
  );
};
