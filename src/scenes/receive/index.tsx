import React, { memo, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useReceiveStyle } from './styles';
import { Topbar } from '@components/topbar';
import { Currency } from '@components/currency';
import { Platform } from '@theme/platform';
import commonStyles from '@theme/commonStyles';
import { View } from '@components/view';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';
import { CommonCard } from '@components/common-card';
import { LazyImage } from '@components/lazy-image';
import { Images } from '@theme/images';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { CommonButton } from '@components/CommonButton';
import { ScreenRouteT } from '@routes/types';
import QRCode from 'react-native-qrcode-svg';
import { useCopied } from '@hook/use-copied';

const _ReceiveScreen = ({ route }: { route: RouteProp<ScreenRouteT, 'Receive'> }) => {
  const { walletDetail } = route.params;
  const navigation = useNavigation();
  const styles = useReceiveStyle();
  const copy = useCopied();

  const onCopy = useCallback(() => {
    copy.onShow(walletDetail.address);
  }, [copy, walletDetail.address]);

  return (
    <View>
      <Topbar title={walletDetail.name}>
        <ScrollView>
          <View mh={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]}>
            <Text fontType="fontBold" fontSize={Platform.SizeScale(16)} color={COLORS._1A9E8F}>
              Choose currency:
            </Text>
            <Currency onPress={() => null} />
          </View>
          <View mv={Platform.SizeScale(40)} alignItems="center">
            <CommonCard title="ETH - Ethereum (Coin)" width={Platform.SizeScale(310)}>
              {/* <LazyImage resizeMode="contain" source={Images.IMAGE_QR} style={styles.qr} /> */}
              <View mv={Platform.SizeScale(30)} alignItems="center">
                <QRCode size={250} value={walletDetail.address} />
              </View>
            </CommonCard>
          </View>
          <View
            borderRadius={Platform.SizeScale(20)}
            mh={Platform.SizeScale(20)}
            mv={Platform.SizeScale(20)}
            backgroundColor={COLORS.WHITE}
          >
            <View alignItems="center">
              <View mt={Platform.SizeScale(10)} style={[commonStyles.row]}>
                <Text>New Address: 1</Text>
                <Icon size={1.5} icon={Icons.ICON_PENCIL} />
              </View>
            </View>
            <View
              mv={Platform.SizeScale(20)}
              backgroundColor={COLORS._F4F5F7}
              mh={Platform.SizeScale(20)}
              style={[commonStyles.row, commonStyles.spaceBetween]}
              borderRadius={Platform.SizeScale(20)}
            >
              <View ml={Platform.SizeScale(10)}>
                <Icon tintColor={COLORS._26BBA9} size={1} icon={Icons.ICON_BACK} />
              </View>
              <Text
                numberOfLines={1}
                mv={Platform.SizeScale(10)}
                color={COLORS._737373}
                fontSize={Platform.SizeScale(11)}
                maxWidth={Platform.SizeScale(200)}
              >
                {walletDetail.address}
              </Text>
              <View mr={Platform.SizeScale(10)}>
                <Icon size={1} icon={Icons.ICON_ARROW_RIGHT} />
              </View>
            </View>
            <View
              mh={Platform.SizeScale(20)}
              mb={Platform.SizeScale(20)}
              style={[commonStyles.row, commonStyles.spaceBetween]}
            >
              <CommonButton
                type="border"
                text="Copy Address"
                width={Platform.SizeScale(160)}
                icon={
                  <View mr={Platform.SizeScale(5)}>
                    <Icon size={2} icon={Icons.ICON_COPY} />
                  </View>
                }
                onPress={onCopy}
              />
              <CommonButton
                type="border"
                text="Share"
                width={Platform.SizeScale(126)}
                icon={
                  <View mr={Platform.SizeScale(5)}>
                    <Icon size={2} icon={Icons.ICON_SHARE} />
                  </View>
                }
              />
            </View>
          </View>
        </ScrollView>
      </Topbar>
    </View>
  );
};

export const ReceiveScreen = memo(_ReceiveScreen);
