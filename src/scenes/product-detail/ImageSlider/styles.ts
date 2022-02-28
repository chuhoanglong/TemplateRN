import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useImageSliderStyle = () => {
    return useMemo(() =>
        StyleSheet.create({
            container: { flex: 1 },
            body: {
                backgroundColor: COLORS.BACKGROUND,
                borderTopRightRadius: Platform.SizeScale(30),
                borderTopLeftRadius: Platform.SizeScale(30),
                flex: 1,
            },
            item: {
                width: Platform.deviceWidth - 50,
                height: Platform.deviceWidth - 50,
            },
            imageContainer: {
                flex: 1,
                marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
                borderBottomEndRadius: 2,
                borderBottomStartRadius: 2,
            },
            image: {
                ...StyleSheet.absoluteFillObject,
                resizeMode: 'contain',
            },
            imgDot: {
                width: 60,
                height: 60,
                borderRadius: 10,
            },
            styWrapImgDot: {
                borderRadius: 14,
                // overflow: 'hidden',
                marginHorizontal: 5,
                borderColor: '#7F2B81',

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }
        }), []);
}