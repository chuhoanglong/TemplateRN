import { Icon } from '@components/common-icon';
import { LazyImage } from '@components/lazy-image';
import { Text } from '@components/text';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Images } from '@theme/images';
import { Platform } from '@theme/platform';
import React from 'react';
import { StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Qr = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      {/* <LazyImage resizeMode="contain" source={Images.IMAGE_QR} style={styles.qr} /> */}
      <View mv={Platform.SizeScale(40)}>
        <QRCode size={170} value={text} />
      </View>
      <Text fontSize={Platform.SizeScale(11)} color={COLORS._139B8B}>
        This QR code contains your Passphrase
      </Text>
      <View
        backgroundColor={COLORS.WHITE}
        borderRadius={Platform.SizeScale(20)}
        style={[commonStyles.row, styles.save]}
        mt={Platform.SizeScale(10)}
      >
        <Icon size={1.5} icon={Icons.ICON_SAVE} />
        <Text mh={Platform.SizeScale(5)} mv={Platform.SizeScale(5)} fontSize={Platform.SizeScale(11)}>
          Save to device
        </Text>
      </View>
    </View>
  );
};

export default Qr;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: Platform.SizeScale(295),
    height: Platform.SizeScale(379),
    alignSelf: 'center',
    borderRadius: Platform.SizeScale(20),
    alignItems: 'center',
  },
  qr: {
    width: Platform.SizeScale(310),
    height: Platform.SizeScale(310),
  },
  save: {
    backgroundColor: COLORS.WHITE,
    ...commonStyles.shadow,
    paddingHorizontal: Platform.SizeScale(10),
  },
});
