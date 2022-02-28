import { Icon } from '@components/common-icon';
import { Touchable } from '@components/touchable';
import { COLORS } from '@theme/colors';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, {
  forwardRef,
  memo,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { BlurView as Blur } from '@react-native-community/blur';
import commonStyles from '@theme/commonStyles';
import { Text } from '@components/text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenRouteT } from '@routes/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';

export type MenuHandle = {
  onPressAvatar?: () => void;
};
const _Menu = forwardRef(({}: any, ref: Ref<MenuHandle>) => {
  const { currentWallet } = useSelector((state: RootState) => state.wallet);

  const animation = useRef(new Animated.Value(0)).current;
  const styles = useStyleMenu();
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Home'>>();

  let _open = false;
  const onPressAvatar = useCallback(() => {
    const toValue = _open ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
    _open = !_open;
  }, []);
  const firstItemStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 100],
        }),
      },
    ],
  };
  const secondItemStyle = {
    transform: [
      { scale: animation },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 120],
        }),
      },
    ],
  };

  const scaleInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 35],
  });
  const bgStyle = {
    transform: [
      {
        scale: scaleInterpolate,
      },
    ],
  };
  const labelPositionInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0],
  });
  const opacityInterpolate = animation.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 0, 1],
  });
  const labelStyle = {
    opacity: opacityInterpolate,
    transform: [
      {
        translateX: labelPositionInterpolate,
      },
    ],
  };
  const blurStyle = {
    opacity: opacityInterpolate,
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    ],
  };

  const onWalletDetail = useCallback(
    (index: number) => {
      navigation.navigate('WalletDetail', {
        walletDetail: currentWallet!,
      });
      onPressAvatar();
    },
    [currentWallet, navigation, onPressAvatar],
  );

  const onUserSetting = useCallback(() => {
    navigation.navigate('Setting');
    onPressAvatar();
  }, [navigation, onPressAvatar]);

  useImperativeHandle(ref, () => ({
    onPressAvatar,
  }));

  return (
    <>
      <Animated.View style={[commonStyles.absolute, blurStyle, { zIndex: 1 }]}>
        <Blur
          style={[commonStyles.absolute]}
          blurType="light"
          blurAmount={2}
          blurRadius={20}
          downsampleFactor={0.5}
          overlayColor="transparent"
        />
      </Animated.View>

      <Animated.View style={[styles.background, bgStyle]} />

      <Animated.View style={[styles.iconMenu, labelStyle]}>
        <Touchable onPress={onPressAvatar}>
          <Icon size={4} icon={Icons.ICON_X} tintColor={COLORS.WHITE} />
        </Touchable>
      </Animated.View>
      <>
        <Animated.View style={[styles.button, styles.account, secondItemStyle]}>
          <Touchable onPress={onUserSetting} style={styles.iconSubMenu1}>
            <Icon size={3} icon={Icons.ICON_USER} tintColor={COLORS.DARK_GREEN} />
          </Touchable>
          <Text style={[styles.labelAccount]}>{`Account`.toLocaleUpperCase()}</Text>
        </Animated.View>
      </>
      <Animated.View style={[styles.button, styles.wallet, firstItemStyle]}>
        <Touchable onPress={onWalletDetail} style={styles.iconSubMenu2}>
          <Icon size={3} icon={Icons.ICON_WALLET} tintColor={COLORS._009F92} />
        </Touchable>
        <Text style={[styles.labelWallet]}>{`Wallet`.toLocaleUpperCase()}</Text>
      </Animated.View>
    </>
  );
});

export const Menu = memo(_Menu);

const useStyleMenu = () => {
  const insets = useSafeAreaInsets();

  return useMemo(() => {
    return StyleSheet.create({
      background: {
        backgroundColor: COLORS.TOOL_BACKGROUND,
        position: 'absolute',
        width: 60,
        height: 60,
        top: 20,
        left: 0,
        borderRadius: 30,
        zIndex: 998,
      },
      iconMenu: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 999,
        top: Platform.OS === 'android' ? Platform.SizeScale(10) : insets.top,
        left: Platform.SizeScale(30),
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#333',
        borderRadius: Platform.SizeScale(30),
        zIndex: 999,
      },
      labelAccount: {
        color: COLORS.WHITE,
        fontSize: Platform.SizeScale(15),
      },
      labelWallet: {
        color: COLORS.WHITE,
        fontSize: Platform.SizeScale(15),
      },
      account: {
        position: 'absolute',
        top: insets.top,
        left: Platform.SizeScale(20),
      },
      wallet: {
        position: 'absolute',
        top: Platform.SizeScale(20),
        left: Platform.SizeScale(20),
      },
      iconSubMenu1: {
        backgroundColor: COLORS.SUN_FLOWER,
        borderRadius: Platform.SizeScale(30),
        padding: Platform.SizeScale(10),
      },
      iconSubMenu2: {
        backgroundColor: COLORS._8EFFD0,
        borderRadius: Platform.SizeScale(30),
        padding: Platform.SizeScale(10),
      },
    });
  }, [insets.top]);
};
