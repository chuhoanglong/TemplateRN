import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useWalletDetailStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        inputRateStyle: {
          height: Platform.SizeScale(41),
          borderRadius: Platform.SizeScale(20),
          borderColor: COLORS.WHITE,
          paddingHorizontal: Platform.SizeScale(10),
        },
        inputStyles: {
          color: COLORS.GREEN,
        },
        button: {
          borderRadius: Platform.SizeScale(30),
          marginTop: Platform.SizeScale(20),
        },
        delete: {
          backgroundColor: COLORS._DA0101,
          alignItems: 'center',
          alignSelf: 'center',
        },
      }),
    [insets],
  );
};
