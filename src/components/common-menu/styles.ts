import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useCommonMenuStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        category: {
          width: Platform.SizeScale(269),
          height: Platform.SizeScale(459),
          alignItems: 'center',
          borderRadius: Platform.SizeScale(20),
        },
        itemCategory: {
          paddingVertical: Platform.SizeScale(20),
        },
      }),
    [insets],
  );
};
