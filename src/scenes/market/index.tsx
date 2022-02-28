import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from '@components/view';

const _MarketScreen = ({}) => {
  const navigation = useNavigation();

  return <View>{/* <ClickViewUI /> */}</View>;
};

export const MarketScreen = memo(_MarketScreen);
