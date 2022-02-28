import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const usePassphaseStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        inputStyles: {
          color: COLORS.GREEN,
          height: Platform.SizeScale(130),
          padding: Platform.SizeScale(10),
        },
        inputRateStyle: {
          height: Platform.SizeScale(41),
          borderRadius: Platform.SizeScale(20),
          borderColor: COLORS.WHITE,
        },
        passphraseInput: {
          height: Platform.SizeScale(137),
          borderRadius: Platform.SizeScale(20),
          borderColor: COLORS.WHITE,
        },
        button: {
          backgroundColor: COLORS._139B8B_30,
          alignSelf: 'center',
        },
        question: {
          backgroundColor: COLORS._43D8C6,
          padding: Platform.SizeScale(10),
          width: Platform.SizeScale(294),
          alignSelf: 'flex-end',
          alignItems: 'center',
          borderRadius: Platform.SizeScale(20),
        },
        question1: {
          padding: Platform.SizeScale(10),
          width: Platform.SizeScale(294),
          alignSelf: 'flex-end',
          alignItems: 'center',
          borderRadius: Platform.SizeScale(20),
        },
        triangle: {
          position: 'absolute',
          left: Platform.SizeScale(110),
          bottom: Platform.SizeScale(5),
          borderBottomColor: COLORS._43D8C6,
        },
      }),
    [],
  );
};
