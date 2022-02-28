import React, { memo, useCallback } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useWalletDetailStyle } from './styles';
import { Topbar } from '@components/topbar';
import { TextField } from '@components/text-field';
import { Platform } from '@theme/platform';
import { COLORS } from '@theme/colors';
import { View } from '@components/view';
import { Text } from '@components/text';
import { Icons } from '@theme/icons';
import { Icon } from '@components/common-icon';
import { BreadCrumb } from '@components/bread-crumb';
import { CommonButton } from '@components/CommonButton';
import commonStyles from '@theme/commonStyles';
import { ScreenRouteT } from '@routes/types';
import { StackNavigationProp } from '@react-navigation/stack';

const _WalletDetailScreen = ({ route }: { route: RouteProp<ScreenRouteT, 'WalletDetail'> }) => {
  const { walletDetail } = route.params;

  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'WalletDetail'>>();
  const styles = useWalletDetailStyle();

  const onShowPassPhrase = useCallback(() => {
    navigation.navigate('ShowPassphrase', { walletDetail });
  }, [navigation, walletDetail]);

  const onPublicKey = useCallback(() => {
    navigation.navigate('PublicKey');
  }, [navigation]);

  const renderRightAccessory = useCallback(() => {
    return (
      <View>
        <Icon icon={Icons.ICON_PENCIL} size={2} />
      </View>
    );
  }, []);

  return (
    <View>
      <Topbar title="Wallet details">
        <View style={[commonStyles.spaceBetween]} flex={1}>
          <View>
            <View mh={Platform.SizeScale(20)}>
              <Text
                fontType="fontBold"
                mb={Platform.SizeScale(10)}
                fontSize={Platform.SizeScale(16)}
                color={COLORS._085A51}
              >
                Wallet name
              </Text>
              <TextField
                style={styles.inputRateStyle}
                placeholder={walletDetail.name}
                inputStyle={styles.inputStyles}
                placeholderTextColor={COLORS._989898}
                renderRightAccessory={renderRightAccessory}
              />
            </View>
            <View mh={Platform.SizeScale(20)}>
              <BreadCrumb
                onPress={onShowPassPhrase}
                style={styles.button}
                left={
                  <View>
                    <Text fontSize={Platform.SizeScale(15)}>Show Passphrase</Text>
                  </View>
                }
                right={
                  <View>
                    <Icon icon={Icons.ICON_ARROW_RIGHT} size={2} />
                  </View>
                }
              />
              <BreadCrumb
                onPress={onPublicKey}
                style={styles.button}
                left={
                  <View>
                    <Text fontSize={Platform.SizeScale(15)}>Show Public Key</Text>
                  </View>
                }
                right={
                  <View>
                    <Icon icon={Icons.ICON_ARROW_RIGHT} size={2} />
                  </View>
                }
              />
            </View>
          </View>
          <View mb={Platform.SizeScale(30)}>
            <CommonButton
              style={styles.delete}
              type="normal"
              text={'Delete Wallet'}
              width={Platform.SizeScale(343)}
              height={Platform.SizeScale(47)}
              textColor={COLORS.WHITE}
            />
          </View>
        </View>
      </Topbar>
    </View>
  );
};

export const WalletDetailScreen = memo(_WalletDetailScreen);
