import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { TextField } from '@components/text-field';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Images } from '@theme/images';
import { Platform } from '@theme/platform';
import React, { memo, useCallback } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { BadgeCart } from './BadgeCart';
import { useComponentStyle } from './styles';

const _Header = () => {
  const styles = useComponentStyle();
  const renderLeftAccessory = useCallback(() => {
    return (
      <View>
        <Icon icon={Icons.ICON_SEARCH} size={1.5} />
      </View>
    );
  }, []);
  const renderRightAccessory = useCallback(() => {
    return (
      <View>
        <Icon icon={Icons.ICON_FILTER} size={1.5} />
      </View>
    );
  }, []);

  return (
    <ImageBackground resizeMode="cover" source={Images.IMG_HEADER} style={[styles.container]}>
      <View style={[commonStyles.row, commonStyles.spaceBetween]}>
        <TextField
          // onChangeText={setUserName}
          style={styles.inputContainer}
          placeholder={'Enter wallet name'}
          inputStyle={styles.inputStyles}
          renderLeftAccessory={renderLeftAccessory}
          renderRightAccessory={renderRightAccessory}
        />
        <View ml={Platform.SizeScale(10)}>
          <BadgeCart />
        </View>
      </View>
    </ImageBackground>
  );
};

export const Header = memo(_Header);
