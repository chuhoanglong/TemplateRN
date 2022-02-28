import React, { memo, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQrScanStyle } from './styles';
import { View } from '@components/view';
import { Text } from '@components/text';
import { Topbar } from '@components/topbar';
import { useBarcodeRead, BarcodeMaskWithOuterLayout } from '@nartc/react-native-barcode-mask';
import { RNCamera } from 'react-native-camera';
import { Platform } from '@theme/platform';
import { useDispatch } from 'react-redux';
import { captureQrCodeData } from '@redux/actions';
import _ from 'lodash';

const _QrScanScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useQrScanStyle();
  const [isbarcodeRead, setbarcodeRead] = useState(true);
  const dispatch = useDispatch();
  const { barcodeRead, onBarcodeRead, onBarcodeFinderLayoutChange } = useBarcodeRead(
    isbarcodeRead,
    (data: string) => {
      if (data) {
        setbarcodeRead(false);
        console.log('🚀 ~ file: index.tsx ~ line 20 ~ data', data);
      }
      return data;
    },
    processed => {
      console.log('processed', processed);
    },
  );
  const androidCameraPermissionOptions = {
    title: 'permissionCamera',
    message: 'permissionCameraMessage',
    buttonPositive: 'ok',
    buttonNegative: 'cancel',
  };

  const _handleBarCodeRead = _.debounce(
    (e: any) => {
      console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------`);
      console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 38 ~ barcodes`, e);
      console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------`);
      dispatch(captureQrCodeData(e.data));
      navigation.goBack();
    },
    500,
    {
      leading: true,
      trailing: false,
    },
  );

  return (
    <View flex={1}>
      <Topbar title="Qr scan">
        <RNCamera
          captureAudio={false}
          style={styles.scanner}
          onBarCodeRead={_handleBarCodeRead}
          type={'back'}
          androidCameraPermissionOptions={androidCameraPermissionOptions}
        >
          <BarcodeMaskWithOuterLayout
            maskOpacity={0.35}
            width={Platform.SizeScale(200)}
            height={Platform.SizeScale(200)}
            onLayoutChange={onBarcodeFinderLayoutChange}
            edgeRadius={10}
          />
        </RNCamera>
      </Topbar>
    </View>
  );
};

export const QrScanScreen = memo(_QrScanScreen);
