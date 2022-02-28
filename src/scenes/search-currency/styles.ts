import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useSearchCurrencyStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        inputContainer: {
          backgroundColor: COLORS.BACKGROUND,
          borderWidth: Platform.SizeScale(0),
          borderRadius: Platform.SizeScale(20),
          flex: 1,
        },
        clearHistory: {
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: COLORS._26BBA9,
          borderRadius: Platform.SizeScale(20),
          alignItems: 'center',
          paddingHorizontal: Platform.SizeScale(10),
          paddingVertical: Platform.SizeScale(2),
        },
        list: {
          flex: 1,
          flexWrap: 'wrap',
          marginHorizontal: Platform.SizeScale(10),
        },
        item: {
          backgroundColor: COLORS.BACKGROUND,
          // paddingHorizontal: Platform.SizeScale(11),
          // paddingVertical: Platform.SizeScale(8),
          borderRadius: Platform.SizeScale(5),
          width: Platform.SizeScale(52),
          height: Platform.SizeScale(25),
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    [],
  );
};
