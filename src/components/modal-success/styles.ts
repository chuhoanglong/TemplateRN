import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useModalSuccessStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: Platform.SizeScale(254),
          height: Platform.SizeScale(228),
          alignItems: 'center',
          backgroundColor: COLORS.WHITE,
          borderRadius: Platform.SizeScale(20),
        },
        button: {
          width: Platform.SizeScale(254),
          borderTopWidth: StyleSheet.hairlineWidth,

          flex: 1,
        },
      }),
    [insets],
  );
};
