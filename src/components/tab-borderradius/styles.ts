import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useTabBorderradiusStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: '#26BBA9',
          maxWidth: Platform.SizeScale(150),
          paddingVertical: Platform.SizeScale(2),
          borderRadius: Platform.SizeScale(20),
          paddingHorizontal: Platform.SizeScale(2),
        },
        activeTab: {
          backgroundColor: COLORS.WHITE,
          paddingVertical: Platform.SizeScale(5),
          borderRadius: Platform.SizeScale(20),
          flex: 1,
          alignItems: 'center',
        },
        tab: {
          paddingVertical: Platform.SizeScale(5),
          borderRadius: Platform.SizeScale(20),
          flex: 1,
          alignItems: 'center',
        },
      }),
    [insets],
  );
};
