import { BreadCrumb } from '@components/bread-crumb';
import { CommonHeader } from '@components/common-header';
import { Icon } from '@components/common-icon';
import { CommonMenu } from '@components/common-menu';
import { CommonButton } from '@components/CommonButton';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { useBlurView } from '@hook/use-blur-view';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@routes/constants';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Images } from '@theme/images';
import { Platform } from '@theme/platform';
import React, { memo, useCallback, useRef } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Menu, MenuHandle } from './Menu';
import { useStyleWallet } from './styles';

const _WalletPage = () => {
  const navigation = useNavigation();
  const styles = useStyleWallet();
  const refMenu = React.useRef<MenuHandle>(null); // assign null makes it compatible with elements.

  const onPressAvatar = useCallback(() => {
    refMenu.current?.onPressAvatar?.();
  }, []);

  const onSend = useCallback(() => {
    navigation.navigate(ROUTES.CoinProfile, {});
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <Menu {...{ ref: refMenu }} />
      <LinearGradient useAngle angle={108.66} colors={COLORS.HEADER_GRADIENT} style={{ flex: 1, zIndex: 1 }}>
        <CommonHeader _onPressAvatar={onPressAvatar} />
        <ScrollView style={styles.body}>
          <Text
            color={'#085A51'}
            mt={Platform.SizeScale(20)}
            ml={Platform.SizeScale(20)}
            mb={Platform.SizeScale(10)}
            fontSize={Platform.SizeScale(20)}
          >
            Total Assets
          </Text>
          <BreadCrumb
            left={
              <View style={[commonStyles.row, styles.leftBread]}>
                <Text style={styles.txtPrice}>$56,955</Text>
                <Text color={COLORS.AMETHYST}>+1,54 %</Text>
              </View>
            }
            right={
              <View style={[styles.rightBread, commonStyles.row]}>
                <Text fontType="fontBold" style={styles.txtRightBread}>
                  USD
                </Text>
                <Icon icon={Icons.ICON_DROP_DOWN} size={1.5} />
              </View>
            }
          />
          <View>
            <View style={[commonStyles.row, commonStyles.spaceBetween, styles.buttonGroup]}>
              <CommonButton onPress={onSend} text="Send" type="gradient" />
              <CommonButton text="Receive" type="gradient" />
              <CommonButton text="Buy" type="gradient" />
            </View>
            <View style={[commonStyles.row, commonStyles.spaceBetween, styles.buttonGroup]}>
              <CommonButton text="Swap" type="border" />
              <CommonButton text="Pool" type="border" />
              <CommonButton text="Add a." type="border" />
            </View>
          </View>
          <View style={styles.walletItem}>
            <View style={[commonStyles.row, commonStyles.spaceBetween]}>
              <Text color={'#085A51'} fontSize={Platform.SizeScale(20)}>
                Wallet’s items
              </Text>
              <Icon icon={Icons.WALLET_ITEM} size={2} />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export const WalletPage = memo(_WalletPage);
