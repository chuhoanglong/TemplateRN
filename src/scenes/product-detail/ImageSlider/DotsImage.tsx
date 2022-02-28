import { Text } from "@components/text";
import React, { memo } from "react";
import { FlatList, Image, View } from "react-native";
import { useImageSliderStyle } from "./styles";

interface Props {
    activeIndex?: number;
    total?: number;
    images?: {}[] | string[];
}

const _DotsImage = ({ activeIndex, images }: Props) => {
    const styles = useImageSliderStyle();
    const renderItem = ({ item, index }: any) => {
        return (
            <View style={[styles.styWrapImgDot, { borderWidth: index == activeIndex ? 3 : 0 }]}>
                <Image source={{ uri: item.illustration }} style={styles.imgDot} />
            </View>
        );
    }

    return (
        <FlatList
            data={images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, marginHorizontal: 20 }}
        />
    );
};

export const DotsImage = memo(_DotsImage);