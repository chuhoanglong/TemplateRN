import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBreadCrumbStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: COLORS.WHITE,
          paddingVertical: Platform.SizeScale(20),
          paddingHorizontal: Platform.SizeScale(30),
          borderRadius: Platform.SizeScale(20),
        },
        left: {
          flex: 7 / 10,
        },
        right: {
          flex: 3 / 10,
          alignItems: 'flex-end',
        },
      }),
    [],
  );
};
