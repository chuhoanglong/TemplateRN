import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBuyStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        inputStyles: {
          color: COLORS.GREEN,
        },
        inputRateStyle: {
          height: Platform.SizeScale(41),
          borderRadius: Platform.SizeScale(20),
          borderColor: COLORS.WHITE,
        },
        item: {
          paddingVertical: Platform.SizeScale(5),
          borderRadius: Platform.SizeScale(30),
        },
      }),
    [insets],
  );
};
