import React, { memo, useCallback, useMemo } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useShowPassphraseStyle } from './styles';
import { Topbar } from '@components/topbar';
import { Text } from '@components/text';
import { View } from '@components/view';
import { Platform } from '@theme/platform';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { mapDataTablePassphrase } from '@tools/wallet.helper';
import { ScreenRouteT } from '@routes/types';
import { ParsephaseTable } from '@components/parsephase-table';
import { Touchable } from '@components/touchable';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { useCopied } from '@hook/use-copied';
import { useBlurView } from '@hook/use-blur-view';
import Qr from '@scenes/create-new-wallet/qr';

const _ShowPassphraseScreen = ({ route }: { route: RouteProp<ScreenRouteT, 'ShowPassphrase'> }) => {
  const { walletDetail } = route.params;

  const navigation = useNavigation();
  const styles = useShowPassphraseStyle();
  const dataTablePassphrase = useMemo(() => {
    return mapDataTablePassphrase(walletDetail.mnemonic.split(' '));
  }, [walletDetail.mnemonic]);
  const copy = useCopied();
  const blurView = useBlurView();

  const onCopy = useCallback(() => {
    copy.onShow(walletDetail.mnemonic);
  }, [copy, walletDetail.mnemonic]);

  const onShowQr = useCallback(() => {
    blurView.onShow(
      <Qr {...{ text: walletDetail.mnemonic }} />,
      {
        right: Platform.SizeScale(40),
        top: Platform.SizeScale(50),
      },

      'zoom',
    );
  }, [blurView, walletDetail.mnemonic]);

  return (
    <View>
      <Topbar title="Wallet details">
        <View
          mt={Platform.SizeScale(20)}
          mh={Platform.SizeScale(20)}
          style={[commonStyles.row, commonStyles.spaceBetween]}
        >
          <Text
            fontType="fontBold"
            mb={Platform.SizeScale(10)}
            fontSize={Platform.SizeScale(16)}
            color={COLORS._085A51}
          >
            Passphase
          </Text>
        </View>

        <ParsephaseTable {...{ dataTablePassphrase }} />

        <View mt={Platform.SizeScale(20)} style={[commonStyles.row, commonStyles.center]}>
          <Touchable onPress={onCopy}>
            <View style={[commonStyles.row, styles.action]}>
              <Icon size={1.5} icon={Icons.ICON_COPY} />
              <Text ml={Platform.SizeScale(10)} fontSize={Platform.SizeScale(12)}>
                Copy
              </Text>
            </View>
          </Touchable>
          <Touchable onPress={onShowQr}>
            <View style={[commonStyles.row, styles.action]}>
              <Icon size={1.5} icon={Icons.ICON_QR} />
              <Text ml={Platform.SizeScale(10)} fontSize={Platform.SizeScale(12)}>
                QR Code
              </Text>
            </View>
          </Touchable>
        </View>

        <View>
          <Text style={{ lineHeight: 20 }} fontSize={Platform.SizeScale(10)} color={COLORS._494949}>
            {`
            1. Write down or save the Passphrase, keep it in the secure locations. 
            2. The Passphrase can be used to recover the wallet.
            3. DO NOT send the Passphrase to others.`}
          </Text>
        </View>
      </Topbar>
    </View>
  );
};

export const ShowPassphraseScreen = memo(_ShowPassphraseScreen);
