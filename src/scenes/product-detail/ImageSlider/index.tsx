import { Text } from "@components/text";
import { Platform } from "@theme/platform";
import React, { memo, useRef, useState } from "react";
import { View } from "react-native";
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import { DotsImage } from "./DotsImage";
import { useImageSliderStyle } from "./styles";
const _ImageSlider = () => {
    const styles = useImageSliderStyle();
    const [entries, setEntries] = useState(ENTRIES1);
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef(null);

    const _renderItem = ({ item }: any, parallaxProps: any) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.illustration }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={1}
                    showSpinner={true}
                    spinnerColor={'#333'}
                    {...parallaxProps}
                />
            </View>
        );
    }

    return (
        <View>
            <Carousel
                ref={carouselRef}
                loop={true}
                autoplay={true}
                autoplayInterval={3000}
                shouldOptimizeUpdates={true}
                sliderWidth={Platform.deviceWidth + 40}
                sliderHeight={Platform.deviceWidth}
                itemWidth={Platform.deviceWidth - 10}
                data={entries}
                renderItem={_renderItem}
                hasParallaxImages={true}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <DotsImage activeIndex={activeSlide} images={entries} />
        </View>
    );
};

export const ImageSlider = memo(_ImageSlider);

const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://dcstore.com.vn/cache/product/09_12_21/2f959d9e881643481a07-500x700.jpg',
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://dcstore.com.vn/cache/product/09_12_21/2f959d9e881643481a07-500x700.jpg',
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://dcstore.com.vn/cache/product/09_12_21/2f959d9e881643481a07-500x700.jpg',
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://dcstore.com.vn/cache/product/09_12_21/2f959d9e881643481a07-500x700.jpg',
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://dcstore.com.vn/cache/product/09_12_21/2f959d9e881643481a07-500x700.jpg',
    },
];