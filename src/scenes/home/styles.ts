import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useHomeStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: { flex: 1 },
        body: {
          backgroundColor: COLORS._F1F1F1,
          paddingHorizontal: Platform.SizeScale(20),
          borderTopRightRadius: Platform.SizeScale(30),
          borderTopLeftRadius: Platform.SizeScale(30),
          flex: 1,
        },
        action: {
          borderRadius: Platform.SizeScale(25),
          padding: Platform.SizeScale(10),
        },
        tabs: {
          // borderBottomWidth: 1,
          // backgroundColor: COLORS.WHITE,
          height: Platform.SizeScale(60),
          borderTopLeftRadius: Platform.SizeScale(38),
          borderTopRightRadius: Platform.SizeScale(38),
          paddingHorizontal: Platform.SizeScale(20),
        },
        tablist: {
          borderTopLeftRadius: Platform.SizeScale(38),
          borderTopRightRadius: Platform.SizeScale(38),
          backgroundColor: COLORS.WHITE,
        },
        tab: {
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: COLORS._26BBA9,
          paddingHorizontal: Platform.SizeScale(10),
        },
        list: {
          // backgroundColor: COLORS.WHITE,
          height: Platform.isIphoneX() ? Platform.SizeScale(450) : Platform.SizeScale(300),
        },
        item: {
          borderBottomWidth: StyleSheet.hairlineWidth,
          paddingVertical: Platform.SizeScale(10),
          borderBottomColor: COLORS._939393,
        },
        btnGoToDetail: {
          textDecorationLine: 'underline',
          margin: 10,
        },
        flashsale: {
          width: Platform.SizeScale(89),
          height: Platform.SizeScale(24),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS._7F2B81,
          borderRadius: Platform.SizeScale(10),
        },
      }),
    [],
  );
};
