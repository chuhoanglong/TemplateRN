import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useComponentStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: Platform.SizeScale(182),
          backgroundColor: COLORS._F1F1F1,
          paddingTop: insets.top,
          borderBottomLeftRadius: Platform.SizeScale(15),
          borderBottomRightRadius: Platform.SizeScale(15),
          overflow: 'hidden',
          paddingHorizontal: Platform.SizeScale(10),
        },
        inputContainer: {
          backgroundColor: COLORS._F1F1F1,
          flex: 1,
        },
        inputStyles: {
          color: COLORS._444343,
        },
      }),
    [insets.top],
  );
};
