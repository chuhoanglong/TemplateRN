import { Text } from '@components/text';
import { COLORS } from '@theme/colors';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const _Tag = () => {
  return (
    <ImageBackground resizeMode="cover" source={Icons.ICON_TAG} style={[styles.container]}>
      <Text mt={Platform.SizeScale(10)} fontSize={Platform.SizeScale(12)} fontType="fontBold" color={COLORS.WHITE}>
        -50%
      </Text>
    </ImageBackground>
  );
};

export const Tag = memo(_Tag);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    height: Platform.SizeScale(42),
    width: Platform.SizeScale(35),
    alignItems: 'center',
  },
});
