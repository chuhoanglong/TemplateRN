import { Icon } from '@components/common-icon';
import { ListFullOption } from '@components/list';
import { ProductListItem } from '@components/product-list-item';
import { Text } from '@components/text';
import { View } from '@components/view';
import { ProductItemT } from '@redux/product/types';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Images } from '@theme/images';
import { Platform } from '@theme/platform';
import React, { memo, useCallback } from 'react';
import { FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useProductContainerStyle } from './styles';
import { products } from './__mocks__/data';

type Props = {
  title: string | React.ReactNode;
  data: ProductItemT[];
  typeList?: 'ROW' | 'COL';
};
const _ProductContainer = ({ title, data, typeList = 'ROW' }: Props) => {
  const styles = useProductContainerStyle();
  const renderItemContent = useCallback(({ item }) => {
    return <ProductListItem {...{ item }} />;
  }, []);
  return (
    <View style={{ paddingHorizontal: Platform.SizeScale(10) }} backgroundColor={COLORS._E5E5E5}>
      <View mv={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]}>
        <View style={[commonStyles.row]}>
          {typeof title === 'string' ? (
            <Text color={COLORS.BLACK} fontSize={Platform.SizeScale(18)}>
              {title}
            </Text>
          ) : (
            title
          )}
        </View>
        <View style={[commonStyles.row]}>
          <Text color={COLORS._7F2B81}>Xem tất cả</Text>
          <Icon icon={Icons.ICON_ARROW_RIGHT} size={1} />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: Platform.SizeScale(120),
        }}
      >
        <FastImage resizeMode={'cover'} style={commonStyles.image} source={Images.IMG_SLIDE_HOME} />
      </View>
      <View alignItems="center" mv={Platform.SizeScale(10)}>
        {typeList === 'ROW' && (
          <FlatList
            data={data}
            renderItem={renderItemContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
        {typeList === 'COL' && <FlatList data={data} renderItem={renderItemContent} numColumns={2} />}
      </View>
    </View>
  );
};

export const ProductContainer = memo(_ProductContainer);
