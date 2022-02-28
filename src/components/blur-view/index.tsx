import React, { memo, useMemo } from 'react';
import { View, Text } from 'react-native';
import { BlurView as Blur } from '@react-native-community/blur';
import { useBlurViewStyle } from './styles';
import commonStyles from '@theme/commonStyles';
import { Touchable } from '@components/touchable';
import FadeZoomAnim from '@components/anim/FadeZoomAnim';
import SlideInTopAnim from '@components/anim/SlideInTop';
import SlideInBottom from '@components/anim/SlideInBottom';

const _BlurView = ({
  child,
  onHide,
  position,
  type,
}: {
  child: React.ReactNode;
  onHide: () => void;
  position: any;
  type: 'bottom' | 'zoom';
}) => {
  const styles = useBlurViewStyle();
  const component = useMemo(() => {
    switch (type) {
      case 'zoom':
        return (
          <FadeZoomAnim style={{ position: 'absolute', zIndex: 999, ...position }}>
            <>{child}</>
          </FadeZoomAnim>
        );

      case 'bottom':
        return (
          <SlideInBottom style={{ position: 'absolute', zIndex: 999, ...position }}>
            <>{child}</>
          </SlideInBottom>
        );
      default:
        return null;
    }
  }, [child, position, type]);
  return (
    <View style={styles.container}>
      <>
        {component}
        <Touchable onPress={onHide} style={commonStyles.absolute}>
          <Blur
            blurType="extraDark"
            style={commonStyles.absolute}
            blurAmount={2}
            blurRadius={20}
            downsampleFactor={0.5}
            overlayColor="transparent"
          />
        </Touchable>
      </>
    </View>
  );
};

export const BlurView = memo(_BlurView);
