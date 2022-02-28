import { Icon } from '@components/common-icon';
import { CommonMenu } from '@components/common-menu';
import { Touchable } from '@components/touchable';
import { useBlurView } from '@hook/use-blur-view';
import { DrawerActionHelpers, DrawerActions, ParamListBase, useNavigation } from '@react-navigation/native';
import { RootState } from '@redux/reducers';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Images } from '@theme/images';
import { Platform } from '@theme/platform';
import React, { memo, useCallback } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useCommonHeaderStyle } from './styles';

export interface ICommonHeader {
  _onPressAvatar?: () => void;
}
const _CommonHeader = ({ _onPressAvatar }: ICommonHeader) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const styles = useCommonHeaderStyle();
  const blurView = useBlurView();
  const navigation = useNavigation();

  const onShowMenu = useCallback(() => {
    // blurView.onShow(
    //   <CommonMenu />,
    //   {
    //     right: Platform.SizeScale(10),
    //     top: Platform.SizeScale(50),
    //   },
    //   'zoom',
    // );
    navigation.dispatch(DrawerActions.toggleDrawer());
  }, [navigation]);

  const onPressAvatar = useCallback(() => {
    _onPressAvatar?.();
  }, [_onPressAvatar]);

  return (
    <View style={[commonStyles.row, commonStyles.spaceBetween, styles.header]}>
      <View style={commonStyles.row}>
        <Touchable onPress={onPressAvatar}>
          <Icon
            style={{
              overflow: 'hidden',
              borderRadius: Platform.SizeScale(50),
            }}
            mr={Platform.SizeScale(10)}
            resizeMode="cover"
            icon={{ uri: userInfo?.data.avatar }}
            size={4}
          />
        </Touchable>
        <View style={styles.logo}>
          <Image resizeMode="contain" style={commonStyles.image} source={Images.TEXT_LOGO} />
        </View>
      </View>
      <View style={commonStyles.row}>
        <Icon ml={Platform.SizeScale(10)} icon={Icons.ICON_SEARCH} size={2} />
        <Touchable onPress={onShowMenu}>
          <Icon ml={Platform.SizeScale(20)} icon={Icons.ICON_MENU} size={2} />
        </Touchable>
      </View>
    </View>
  );
};

export const CommonHeader = memo(_CommonHeader);
