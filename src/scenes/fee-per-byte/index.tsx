import React, { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFeePerByteStyle } from './styles';
import GenericModal from '@components/GenericModal';
import { Platform } from '@theme/platform';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';

const _FeePerByteScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useFeePerByteStyle();

  return (
    <GenericModal scrollEnabled={false} pageTitle={'Fee per Byte'}>
      <Text style={{ lineHeight: Platform.SizeScale(25) }} color={COLORS._494949} fontSize={Platform.SizeScale(10)}>
        {`
        1. Fee per byte is one of the factors to calculate the total fee.
        2. A high fee per byte could help to accelerate the miner pending process
        `}
      </Text>
    </GenericModal>
  );
};

export const FeePerByteScreen = memo(_FeePerByteScreen);
