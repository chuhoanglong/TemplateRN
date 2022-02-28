import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import { Dimensions } from 'react-native';
import { useBottomSheetStyle } from './styles';
import BottomSheet from 'react-native-bottomsheet-reanimated';

type BottomSheetProps = {
  header: React.ReactNode;
  body: React.ReactNode;
};

const _BottomSheetCustom: React.FC<BottomSheetProps> = forwardRef(({ header, body }, ref) => {
  const styles = useBottomSheetStyle();
  const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  };
  const snapPoints = [0, Screen.height / 2, '70%', '100%'];
  const bottomSheet = useRef<any>();
  const onOpenBottomSheetHandler = (index: number) => {
    console.log(`🛠 LOG: 🚀 --> ------------------------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 20 ~ onOpenBottomSheetHandler ~ index`, index);
    console.log(`🛠 LOG: 🚀 --> ------------------------------------------------------------------------------------`);

    bottomSheet?.current?.snapTo?.(index);
  };

  useImperativeHandle(ref, () => ({
    open: onOpenBottomSheetHandler,
  }));

  return (
    <BottomSheet
      bottomSheerColor="#FFFFFF"
      // backDropColor="red"
      ref={bottomSheet}
      initialPosition={'0%'}
      snapPoints={snapPoints}
      isBackDrop={true}
      isBackDropDismissByPress={true}
      isRoundBorderWithTipHeader={true}
      // keyboardAware
      header={header}
      body={body}
    />
  );
});

export const BottomSheetCustom = memo(_BottomSheetCustom);
