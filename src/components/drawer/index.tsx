import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import React, { memo, useCallback, useMemo } from 'react';
import { View } from '@components/view';

const _Drawer = ({ navigation }: DrawerContentComponentProps) => {
  return <View />;
};

export const Drawer = memo(_Drawer);
