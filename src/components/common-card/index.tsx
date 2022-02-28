import { Text } from '@components/text';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { useCommonCardStyle } from './styles';

type Props = {
  children: React.ReactNode;
  width: number;
  title: string;
};
const _CommonCard = ({ title, children, width = Platform.deviceWidth }: Props) => {
  const styles = useCommonCardStyle();
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.header} alignItems="center">
        <Text fontType="fontBold" fontSize={Platform.SizeScale(13)} color={COLORS.WHITE}>
          {title}
        </Text>
      </View>
      <View style={styles.body}>{children}</View>
    </View>
  );
};

export const CommonCard = memo(_CommonCard);
