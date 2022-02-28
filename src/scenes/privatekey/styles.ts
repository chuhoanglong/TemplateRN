import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const usePrivatekeyStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        item: {
          paddingVertical: Platform.SizeScale(5),
          borderRadius: Platform.SizeScale(30),
        },
      }),
    [insets],
  );
};
