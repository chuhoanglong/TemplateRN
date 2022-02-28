import { Text } from '@components/text';
import { menus } from '@scenes/Wallet/__mocks__/data';
import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useCommonMenuStyle } from './styles';

const _CommonMenu = ({}) => {
  const styles = useCommonMenuStyle();
  return (
    <LinearGradient style={styles.category} colors={COLORS.GREEN_TRANSPARENT_GRADIENT} useAngle angle={162.63}>
      <ScrollView>
        {menus.map((value, index) => {
          return (
            <View style={styles.itemCategory}>
              <Text color={COLORS.WHITE} fontSize={Platform.SizeScale(16)}>
                {value.content}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </LinearGradient>
  );
};

export const CommonMenu = memo(_CommonMenu);
