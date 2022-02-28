import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountDownComponent from 'react-native-countdown-component';

const _CountDown = () => {
  return (
    <View>
      <CountDownComponent
        digitStyle={{
          backgroundColor: COLORS._7F2B81,
        }}
        digitTxtStyle={[Platform.textBase, { fontSize: Platform.SizeScale(14), color: COLORS.WHITE }]}
        size={10}
        until={1000}
        timeToShow={['H', 'M', 'S']}
        showSeparator
        separatorStyle={{
          marginBottom: Platform.SizeScale(10),
        }}
      />
    </View>
  );
};

export const CountDown = memo(_CountDown);

const styles = StyleSheet.create({});
