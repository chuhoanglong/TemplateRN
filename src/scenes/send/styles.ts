import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useSendStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        currency: {
          backgroundColor: COLORS.WHITE,
          padding: Platform.SizeScale(5),
          borderRadius: Platform.SizeScale(50),
        },
        form: {
          backgroundColor: COLORS.WHITE,
          borderRadius: Platform.SizeScale(20),
        },
        inputContainer: {
          backgroundColor: COLORS.BACKGROUND,
          borderWidth: Platform.SizeScale(0),
          borderRadius: Platform.SizeScale(20),
          flex: 1,
        },
        add: {
          width: Platform.SizeScale(144),
          height: Platform.SizeScale(22),
          borderWidth: StyleSheet.hairlineWidth,
          borderRadius: Platform.SizeScale(15),
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: COLORS._0E9888,
        },
        byte: {
          backgroundColor: COLORS.BACKGROUND,
          height: Platform.SizeScale(41),
          width: Platform.SizeScale(176),
          justifyContent: 'space-around',
          alignItems: 'center',
          borderRadius: Platform.SizeScale(20),
        },
        total: {},
        footer: {
          paddingTop: Platform.SizeScale(20),
          paddingBottom: Platform.SizeScale(30),
        },
        buttonAlert: {
          flex: 1,
          alignItems: 'center',
          paddingVertical: Platform.SizeScale(10),
          borderTopWidth: StyleSheet.hairlineWidth,
        },
      }),
    [],
  );
};
