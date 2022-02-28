import { Text } from '@components/text';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React from 'react';
import { StyleSheet } from 'react-native';

const Webview = ({ uri }: { uri: string }) => {
  return (
    <View style={styles.container}>
      <Text isViewHtml>{uri}</Text>
    </View>
  );
};

export default Webview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ALIZARIN,
    height: Platform.SizeScale(Platform.deviceHeight - Platform.SizeScale(20)),
    width: Platform.deviceWidth,
    alignSelf: 'center',
  },
});
