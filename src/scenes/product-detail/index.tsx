import { HeaderMain } from "@components/common-header";
import { Text } from "@components/text";
import { View } from "@components/view";
import { useNavigation } from "@react-navigation/native";
import React, { memo } from "react";
import { ImageSlider } from "./ImageSlider";
import { useDetailStyle } from "./styles";
const _ProductDetail = () => {

    const styles = useDetailStyle();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <HeaderMain title={'Chi tiết sản phẩm'} onCart={() => { }} />
            <View style={styles.body}>
                <ImageSlider />
            </View>
        </View>
    );
};

export const ProductDetail = memo(_ProductDetail);