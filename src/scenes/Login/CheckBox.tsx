import { View } from "@components/view";
import React, { memo } from "react";
import styles from "./styles";
import { Text } from '@components/text';
import { COLORS } from "@theme/colors";
import commonStyles from "@theme/commonStyles";
import Icon from 'react-native-vector-icons/Entypo';
import { Touchable } from "@components/touchable";

interface Props {
    isCheck: boolean,
    label: string,
    onPress?: () => void,
}
const CheckBox = ({ isCheck, label, onPress }: Props) => {

    return (
        <Touchable onPress={onPress}>
            <View style={commonStyles.row}>
                {!isCheck ?
                    <View style={[styles.checkBox, styles.shadow]} />
                    :
                    <View style={[styles.checkBox, styles.shadow]} >
                        <Icon name='check' size={20} color={COLORS.AMETHYST} />
                    </View>
                }
                <Text color={COLORS.AMETHYST} fontType='fontLight'>{label}</Text>
            </View>
        </Touchable>
    );
};

export default memo(CheckBox);