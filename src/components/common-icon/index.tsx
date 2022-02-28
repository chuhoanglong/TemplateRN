import commonStyles from '@theme/commonStyles';
import React, { memo } from 'react';
import { View, Text, Image, StyleProp, ViewStyle, Animated } from 'react-native';
import FastImage, { ResizeMode } from 'react-native-fast-image';

const _Icon = ({
  icon,
  size = 2.5,
  tintColor,
  style,
  ml,
  mr,
  mb,
  mt,
  mh,
  mv,
  width,
  height,
  resizeMode = 'contain',
}: {
  icon: any;
  size?: number;
  tintColor?: string;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  ml?: number;
  mr?: number;
  mb?: number;
  mt?: number;
  mh?: number;
  mv?: number;
  width?: number;
  height?: number;
  resizeMode?: ResizeMode;
}) => {
  return (
    <Animated.View
      style={[
        {
          width: width ?? size * 10,
          height: height ?? size * 10,
        },
        { marginLeft: ml, marginRight: mr, marginTop: mt, marginBottom: mb, marginHorizontal: mh, marginVertical: mv },
        style,
      ]}
    >
      <FastImage tintColor={tintColor} resizeMode={resizeMode} style={commonStyles.image} source={icon} />
    </Animated.View>
  );
};

export const Icon = memo(_Icon);
