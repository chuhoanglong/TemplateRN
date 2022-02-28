import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { useModalSuccessStyle } from './styles';

const _ModalSuccess = ({ onClose }) => {
  const styles = useModalSuccessStyle();
  return (
    <View style={styles.container}>
      <Text fontSize={Platform.SizeScale(17)} fontType="fontBold">
        ModalSuccess
      </Text>
      <View alignItems="center">
        <View mv={Platform.SizeScale(20)}>
          <Icon icon={Icons.ICON_LIKE} size={8} />
        </View>
        <Text mb={Platform.SizeScale(20)}>Set your pattern successfully!</Text>
        <Touchable onPress={onClose} style={styles.button}>
          <View alignItems="center">
            <Text
              fontType="fontBold"
              color={COLORS._26BBA9}
              mt={Platform.SizeScale(10)}
              fontSize={Platform.SizeScale(17)}
            >
              OK
            </Text>
          </View>
        </Touchable>
      </View>
    </View>
  );
};

export const ModalSuccess = memo(_ModalSuccess);
