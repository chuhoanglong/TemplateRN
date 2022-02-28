import React, { memo, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePassphaseStyle } from './styles';
import { Topbar } from '@components/topbar';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { COLORS } from '@theme/colors';
import { View } from '@components/view';
import { Text } from '@components/text';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import { Touchable } from '@components/touchable';
import { ScrollView } from 'react-native';
import { TextField } from '@components/text-field';
import { CommonButton } from '@components/CommonButton';
import Question from './Question';

const _PassphraseScreen = ({}) => {
  const navigation = useNavigation();
  const styles = usePassphaseStyle();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      <Topbar>
        <View mh={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]}>
          <Touchable onPress={onBack}>
            <Icon tintColor={COLORS._085A51} icon={Icons.ICON_BACK} size={2} />
          </Touchable>
          <Text color={COLORS._085A51} fontSize={Platform.SizeScale(18)}>
            Passphrase
          </Text>
          <Icon tintColor={COLORS._085A51} icon={Icons.ICON_SCAN} size={2} />
        </View>
        <ScrollView>
          <View mt={Platform.SizeScale(10)} mh={Platform.SizeScale(20)}>
            <Text
              fontType="fontBold"
              mb={Platform.SizeScale(10)}
              fontSize={Platform.SizeScale(16)}
              color={COLORS._085A51}
            >
              Wallet name
            </Text>
            <TextField
              // onChangeText={setUserName}
              style={styles.inputRateStyle}
              placeholder={'Enter wallet name'}
              inputStyle={styles.inputStyles}
              placeholderTextColor={COLORS._989898}
            />
          </View>
          <View mv={Platform.SizeScale(10)} mh={Platform.SizeScale(20)}>
            <Question />
            <TextField
              multiline={true}
              numberOfLines={5}
              style={styles.passphraseInput}
              placeholder={'Enter wallet name'}
              inputStyle={styles.inputStyles}
              placeholderTextColor={COLORS._989898}
            />
          </View>
          <View mt={Platform.SizeScale(10)}>
            <CommonButton
              style={styles.button}
              type="normal"
              text={'Next'}
              width={Platform.SizeScale(343)}
              height={Platform.SizeScale(47)}
              textColor={COLORS.WHITE}
            />
          </View>
        </ScrollView>
      </Topbar>
    </View>
  );
};

export const PassphraseScreen = memo(_PassphraseScreen);
