import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useCreateNewWalletStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        inputStyles: {
          color: COLORS.GREEN,
        },
        inputRateStyle: {
          height: Platform.SizeScale(41),
          borderRadius: Platform.SizeScale(20),
          borderColor: COLORS.WHITE,
        },
        action: {
          backgroundColor: COLORS.WHITE,
          paddingVertical: Platform.SizeScale(5),
          paddingHorizontal: Platform.SizeScale(10),
          marginHorizontal: Platform.SizeScale(10),
          borderRadius: Platform.SizeScale(20),
          ...commonStyles.shadow,
        },
        copy: {
          position: 'absolute',
          width: Platform.SizeScale(189),
          height: Platform.SizeScale(80),
          alignItems: 'center',
          justifyContent: 'center',
          top: Platform.SizeScale(-30),
        },
        note: {
          backgroundColor: COLORS.WHITE,
          flexWrap: 'wrap',
          paddingLeft: Platform.SizeScale(10),
          paddingVertical: Platform.SizeScale(10),
          borderRadius: Platform.SizeScale(20),
        },
        button: {
          alignSelf: 'center',
          marginBottom: Platform.SizeScale(20),
        },
      }),
    [insets],
  );
};
