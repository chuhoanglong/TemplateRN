import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useDropdownSelectionStyle = (width?: number) => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        choice: {
          backgroundColor: COLORS.WHITE,
          width: width ?? Platform.SizeScale(53),
          height: Platform.SizeScale(21),
          borderRadius: Platform.SizeScale(10),
          ...commonStyles.shadow,
        },
        options: {
          backgroundColor: COLORS._26BBA9,
          position: 'absolute',
          zIndex: 999,
          top: Platform.SizeScale(25),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: Platform.SizeScale(10),
          width: width ?? Platform.SizeScale(53),
        },
      }),
    [width],
  );
};
