import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { TextField } from '@components/text-field';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';

const _Search = () => {
  const renderLeftAccessory = useCallback(() => {
    return (
      <View>
        <Icon icon={Icons.ICON_SEARCH} tintColor={COLORS._0F7D70} size={1.5} />
      </View>
    );
  }, []);

  return (
    <View mh={Platform.SizeScale(20)} style={[commonStyles.row]}>
      <TextField
        // onChangeText={setUserName}
        style={styles.inputContainer}
        placeholder={'Enter wallet name'}
        // inputStyle={styles.inputStyles}
        placeholderTextColor={COLORS._0F7D70}
        renderLeftAccessory={renderLeftAccessory}
      />
      <Touchable>
        <Text fontSize={Platform.SizeScale(13)} color={COLORS._085A51} ml={Platform.SizeScale(10)}>
          Cancel
        </Text>
      </Touchable>
    </View>
  );
};

export const Search = memo(_Search);

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.WHITE,
    borderWidth: Platform.SizeScale(0),
    borderRadius: Platform.SizeScale(20),
    flex: 1,
  },
});
