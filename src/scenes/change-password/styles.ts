import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useChangePasswordStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        inputStyles: {
          color: COLORS.BLACK,
        },
        inputRateStyle: {
          height: Platform.SizeScale(41),
          borderRadius: Platform.SizeScale(20),
          borderColor: COLORS.WHITE,
        },
        button: {
          backgroundColor: COLORS._139B8B_30,
          alignSelf: 'center',
        },
      }),
    [insets],
  );
};
