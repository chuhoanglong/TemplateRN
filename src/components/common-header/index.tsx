import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { RootState } from '@redux/reducers';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Images } from '@theme/images';
import { Platform } from '@theme/platform';
import _ from 'lodash';
import React, { memo, useCallback } from 'react';
import { View, Image, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { useCommonHeaderStyle } from './styles';

export interface ICommonHeader {
  _onPressAvatar?: () => void;
  title?: string;
  onCart?: () => void;
}
const _HeaderMain = ({ _onPressAvatar, onCart, title }: ICommonHeader) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const styles = useCommonHeaderStyle();
  const navigation = useNavigation();

  const onShowMenu = useCallback(() => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }, [navigation]);

  const onPressAvatar = useCallback(() => {
    _onPressAvatar?.();
  }, [_onPressAvatar]);

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/images/header/header_main.png')}
      style={[commonStyles.row, commonStyles.spaceBetween, styles.imgBg]}
      resizeMode='cover'
    >
      <StatusBar barStyle={'light-content'} />
      <Touchable onPress={onGoBack}>
        <Image source={require('../../assets/images/header/icon_back.png')} />
      </Touchable>
      <Text color={COLORS.WHITE} fontSize={16}>{title}</Text>
      {_.isFunction(onCart) ?
        <Touchable onPress={onShowMenu}>
          <Image source={require('../../assets/images/header/icon_cart.png')} />
        </Touchable>
        :
        <View />
      }
    </ImageBackground >
  );
};

export const HeaderMain = memo(_HeaderMain);
