import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductItemT } from '@redux/product/types';
import { ScreenRouteT } from '@routes/types';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Images } from '@theme/images';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import FastImage from 'react-native-fast-image';
import { useProductListItemStyle } from './styles';
import { Tag } from './tags';

type Props = {
  item: ProductItemT;
};
const _ProductListItem = ({ item }: Props) => {
  const styles = useProductListItemStyle();
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Home'>>();
  const onPress = () => {
    navigation.navigate('ProductDetail');
  };
  return (
    <Touchable onPress={onPress}>
      <View mv={Platform.SizeScale(5)} mh={Platform.SizeScale(5)} style={styles.container}>
        <View
          style={{
            width: Platform.deviceWidth / 2 - Platform.SizeScale(20),
            height: Platform.SizeScale(131),
          }}
        >
          <FastImage resizeMode={'contain'} style={commonStyles.image} source={Images.IMG_PRODUCT_ITEM} />
        </View>
        <View mv={Platform.SizeScale(10)} mh={Platform.SizeScale(10)}>
          <Text color={COLORS._260001} fontType={'fontBold'} numberOfLines={2} maxWidth={180}>
            {item.title.toLocaleUpperCase()}
          </Text>
          <Text color={COLORS.GRAY} mv={Platform.SizeScale(10)}>
            {item.sold} đã bán
          </Text>
          <View style={[commonStyles.row, commonStyles.spaceBetween]}>
            <Text color={COLORS._7F2B81}>
              {item.price} {item.currency}
            </Text>
            <Text
              style={{
                textDecorationLine: 'line-through',
              }}
              fontSize={Platform.SizeScale(12)}
            >
              {item.salePrice} {item.currency}
            </Text>
          </View>
        </View>
        <Tag />
      </View>
    </Touchable>
  );
};

export const ProductListItem = memo(_ProductListItem);
