import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBrowserStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        inputRateStyle: {
          height: Platform.SizeScale(41),
          borderRadius: Platform.SizeScale(20),
          borderColor: COLORS.WHITE,
        },
        searchNumber: {
          width: Platform.SizeScale(32),
          height: Platform.SizeScale(32),
          borderRadius: Platform.SizeScale(16),
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    [insets],
  );
};
