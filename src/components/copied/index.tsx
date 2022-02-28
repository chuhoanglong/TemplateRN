import React, { memo } from 'react';
import { useCopiedStyle } from './styles';
import { BlurView as Blur } from '@react-native-community/blur';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import { View } from '@components/view';
import { Text } from '@components/text';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';

const _Copied = ({}) => {
  const styles = useCopiedStyle();
  return (
    <View style={styles.copy}>
      <Blur
        blurType="light"
        style={[
          commonStyles.absolute,
          {
            borderRadius: Platform.SizeScale(20),
          },
        ]}
        blurAmount={2}
        blurRadius={20}
        downsampleFactor={0.5}
        overlayColor="transparent"
      />
      <View style={[{ zIndex: 999 }, commonStyles.row]}>
        <Text mr={Platform.SizeScale(10)} fontSize={Platform.SizeScale(22)}>
          Copied
        </Text>
        <Icon icon={Icons.ICON_TICK} size={2} />
      </View>
    </View>
  );
};

export const Copied = memo(_Copied);
