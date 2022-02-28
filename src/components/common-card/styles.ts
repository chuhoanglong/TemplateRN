import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useCommonCardStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: COLORS._26BBA9,
          borderRadius: Platform.SizeScale(20),
          overflow: 'hidden',
        },
        header: {
          paddingVertical: Platform.SizeScale(5),
        },
        body: {
          backgroundColor: COLORS.WHITE,
          flex: 1,
        },
      }),
    [insets],
  );
};
