import { CommonButton } from '@components/CommonButton';
import { Text } from '@components/text';
import { TextField } from '@components/text-field';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import React from 'react';
import { StyleSheet } from 'react-native';
import Question from './../passphase/Question';

const SelfGeneratedPassphrase = () => {
  return (
    <View>
      <View alignItems="center">
        <Text fontSize={Platform.SizeScale(18)}>Self-generated Passphrase</Text>
      </View>
      <View mh={Platform.SizeScale(20)}>
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
      <View mt={Platform.SizeScale(60)}>
        <CommonButton
          style={styles.button}
          text={'OK'}
          width={Platform.SizeScale(343)}
          height={Platform.SizeScale(47)}
          textColor={COLORS.WHITE}
        />
      </View>
    </View>
  );
};

export default SelfGeneratedPassphrase;

const styles = StyleSheet.create({
  passphraseInput: {
    height: Platform.SizeScale(137),
    borderRadius: Platform.SizeScale(20),
    backgroundColor: COLORS.BACKGROUND,
    borderWidth: 0,
  },
  inputStyles: {
    color: COLORS.GREEN,
    height: Platform.SizeScale(130),
    padding: Platform.SizeScale(10),
  },
  button: {
    alignSelf: 'center',
  },
});
