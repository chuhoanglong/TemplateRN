import { DropdownSelection } from '@components/dropdown-selection';
import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

export type DropdownSelectionProps = {
  data: {
    name: string;
  }[];
};

const _Dropdown = ({ data }: DropdownSelectionProps) => {
  const [isShow, setIsShow] = useState(false);
  const onShowPopup = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return <DropdownSelection {...{ data }} />;
};

export const Dropdown = memo(_Dropdown);

const styles = StyleSheet.create({
  choice: {
    backgroundColor: COLORS.WHITE,
    width: Platform.SizeScale(53),
    height: Platform.SizeScale(21),
    borderRadius: Platform.SizeScale(10),
  },
  options: {
    backgroundColor: COLORS._26BBA9,
    position: 'absolute',
    zIndex: 999,
    top: 30,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Platform.SizeScale(10),
    paddingHorizontal: Platform.SizeScale(20),
  },
});
