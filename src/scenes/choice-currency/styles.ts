import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useChoiceCurrencyStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        search: {
          width: Platform.deviceWidth - Platform.SizeScale(30),
          alignItems: 'flex-end',
        },
      }),
    [insets],
  );
};
