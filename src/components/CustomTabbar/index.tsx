import React, { FC, useMemo } from 'react';
import { Touchable } from '@components/touchable';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Platform } from '@theme/platform';
import { COLORS } from '@theme/colors';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { Text } from '@components/text';
import commonStyles from '@theme/commonStyles';
import { BlurView as Blur } from '@react-native-community/blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '@theme/images';
import { useBottomTabStyle } from './styles';

const CustomTabar: FC<BottomTabBarProps> = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const styles = useBottomTabStyle();
  const tabFocus = [
    <Icon size={2} tintColor={COLORS._FDCB44} icon={Icons.ICON_BROWSER} />,
    <Icon size={2} tintColor={COLORS._FDCB44} icon={Icons.ICON_FAVORITE} />,
    <Icon size={2} tintColor={COLORS._7F2B81} icon={Icons.ICON_HOME} />,
    <Icon size={2} tintColor={COLORS._FDCB44} icon={Icons.ICON_BELL} />,
    <Icon size={2} tintColor={COLORS._FDCB44} icon={Icons.ICON_USER} />,
  ];
  const tabUnFocus = [
    <Icon size={2} tintColor={COLORS.WHITE} icon={Icons.ICON_BROWSER} />,
    <Icon size={2} tintColor={COLORS.WHITE} icon={Icons.ICON_FAVORITE} />,
    <Icon size={2} tintColor={COLORS._7F2B81} icon={Icons.ICON_HOME} />,
    <Icon size={2} tintColor={COLORS.WHITE} icon={Icons.ICON_BELL} />,
    <Icon size={2} tintColor={COLORS.WHITE} icon={Icons.ICON_USER} />,
  ];

  const routes = state.routes.map((route, index) => {
    const isFocused = state.index === index;
    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    if (index === 2) {
      return (
        <Touchable key={index} activeOpacity={1} {...{ onPress }} style={[styles.tabBarHome]}>
          <View style={[commonStyles.row]}>{isFocused ? tabFocus[index] : tabUnFocus[index]}</View>
        </Touchable>
      );
    }

    return (
      <Touchable key={index} activeOpacity={1} {...{ onPress }} style={[styles.tabBar]}>
        <View style={[commonStyles.row]}>{isFocused ? tabFocus[index] : tabUnFocus[index]}</View>
      </Touchable>
    );
  });

  return (
    <ImageBackground resizeMode="cover" source={Images.TABBAR} style={[styles.container]}>
      <View style={styles.content}>{routes}</View>
    </ImageBackground>
  );
};

export { CustomTabar };
