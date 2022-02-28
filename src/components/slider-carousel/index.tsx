import { Platform } from '@theme/platform';
import React, { memo, useCallback, useRef, useState } from 'react';
import { useSliderCarouselStyle } from './styles';
import Carousel from 'react-native-snap-carousel';
import commonStyles from '@theme/commonStyles';
import { View } from '@components/view';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';

type Props = {
  firstItem?: number;
  itemWidth?: number;
  activeSlideAlignment?: 'center' | 'end' | 'start';
  data: any[];
  renderItemProps<T>(item: T, index: number, activeSlide: number): React.ReactNode;
  isShowDot?: boolean;
};
const _SliderCarousel = ({
  firstItem = 0,
  itemWidth = Platform.deviceWidth,
  activeSlideAlignment = 'start',
  data,
  renderItemProps,
  isShowDot = true,
}: Props) => {
  const styles = useSliderCarouselStyle();
  const carousel = useRef();
  const [activeSlide, setActiveSlide] = useState(firstItem);

  const onSnapToItem = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  const renderItem: any = useCallback(
    ({ item, index }) => {
      return renderItemProps(item, index, activeSlide);
    },
    [activeSlide, renderItemProps],
  );
  const renderDot = useCallback(() => {
    return data.map((value, index) => {
      return (
        <View>
          <Text
            color={index === activeSlide ? COLORS._9C9C9C : COLORS.WHITE}
            mh={Platform.SizeScale(5)}
            fontSize={Platform.SizeScale(24)}
          >
            •
          </Text>
        </View>
      );
    });
  }, [activeSlide, data]);
  return (
    <View>
      <Carousel
        data={data}
        firstItem={firstItem}
        renderItem={renderItem}
        sliderWidth={Platform.deviceWidth}
        itemWidth={itemWidth}
        ref={carousel}
        // loop={true}
        onSnapToItem={onSnapToItem}
        activeSlideAlignment={activeSlideAlignment}
      />
      {isShowDot && (
        <View mt={-Platform.SizeScale(30)} alignItems="center">
          <View style={[commonStyles.row]}>{renderDot()}</View>
        </View>
      )}
    </View>
  );
};

export const SliderCarousel = memo(_SliderCarousel);
