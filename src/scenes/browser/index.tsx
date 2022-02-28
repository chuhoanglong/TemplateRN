import React, { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useBrowserStyle } from './styles';
import { Topbar } from '@components/topbar';
import { View } from '@components/view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const _BrowserScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useBrowserStyle();
  const insets = useSafeAreaInsets();

  return <View />;
};

export const BrowserScreen = memo(_BrowserScreen);
