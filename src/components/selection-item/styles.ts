import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useSelectionItemStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        itemContainer: {
          paddingVertical: Platform.SizeScale(10),
          borderRadius: Platform.SizeScale(20),
          backgroundColor: COLORS._EEFFF3,
          marginVertical: Platform.SizeScale(5),
          paddingHorizontal: Platform.SizeScale(10),
        },
        itemNote: {
          // height: Platform.SizeScale(21),
          // width: Platform.SizeScale(80),
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: COLORS._13A6D4,
          borderRadius: Platform.SizeScale(10),
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: Platform.SizeScale(2),
          paddingHorizontal: Platform.SizeScale(10),
        },
      }),
    [insets],
  );
};
