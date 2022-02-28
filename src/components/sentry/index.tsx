import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useSentryStyle } from './styles'

const _Sentry = ({}) => {
    const styles = useSentryStyle();
  return (
    <View>
      <Text>Sentry</Text>
    </View>
  );
};

export const Sentry = memo(_Sentry);