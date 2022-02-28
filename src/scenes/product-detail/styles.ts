import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useDetailStyle = () => {
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
                width: Platform.deviceWidth - 60,
                height: Platform.deviceWidth - 60,
            },
            imageContainer: {
                flex: 1,
                marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
                backgroundColor: 'white',
                borderRadius: 0,
            },
            image: {
                ...StyleSheet.absoluteFillObject,
                resizeMode: 'cover',
            },
        }), []);
}