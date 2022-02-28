import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useCommonHeaderStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        logo: {
          width: Platform.SizeScale(131),
          height: Platform.SizeScale(15),
        },
        header: {
          paddingHorizontal: Platform.SizeScale(30),
          paddingTop: Platform.OS === 'android' ? Platform.SizeScale(10) : insets.top,
          paddingBottom: Platform.SizeScale(10),
        },
        imgBg: {
          width: Platform.deviceWidth,
          height: 80,
          paddingHorizontal: Platform.SizeScale(15),
          alignItems: 'center',
          paddingTop: Platform.select({ ios: 20, android: 0 }),
        }
      }),
    [insets],
  );
};
