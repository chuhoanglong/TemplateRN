import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHomeStyle } from './styles';
import { View } from '@components/view';
import { ScreenRouteT } from '@routes/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { Text } from '@components/text';
import { Header } from './component/Header';
import { Platform } from '@theme/platform';
import { SliderCarousel } from '@components/slider-carousel';
import { Categories } from './component/Categories';
import { COLORS } from '@theme/colors';
import { CountDown } from './component/CountDown';
import commonStyles from '@theme/commonStyles';
import { ProductContainer } from '@components/product-container';
import { products } from '@components/product-container/__mocks__/data';
import { useLoadingGlobal } from '@hook/use-loading-global';
import FastImage from 'react-native-fast-image';
import { slides } from '@components/slider-carousel/__mocks__/data';
import { Touchable } from '@components/touchable';
import { Images } from '@theme/images';

const _HomeScreen = ({}) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { wallets } = useSelector((state: RootState) => state.wallet);
  const loading = useLoadingGlobal();
  loading.onHide();
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Home'>>();
  const styles = useHomeStyle();

  const onPress = () => {
    navigation.navigate('ProductDetail');
  };

  const renderAds = useCallback((item: any, index: number) => {
    return (
      <View
        style={{
          width: '100%',
          height: Platform.SizeScale(130),
        }}
      >
        <FastImage resizeMode={'contain'} style={commonStyles.image} source={item.source} />
      </View>
    );
  }, []);

  const renderFlashSale = useCallback(
    (item: any, index: number, activeSlide: number) => {
      console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------`);
      console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 53 ~ index`, index, activeSlide);
      console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------`);
      return (
        <View style={{ paddingVertical: Platform.SizeScale(10) }}>
          <View
            style={{
              width: '100%',
              height: Platform.SizeScale(80),
            }}
          >
            <FastImage resizeMode={'contain'} style={commonStyles.image} source={Images.IMG_FLASHSALE} />
          </View>
          {index === activeSlide ? (
            <View mt={-Platform.SizeScale(15)} alignItems="center">
              <Touchable style={styles.flashsale}>
                <Text fontSize={Platform.SizeScale(12)} fontType="fontBold" color={COLORS.WHITE}>
                  Mua Ngay
                </Text>
              </Touchable>
            </View>
          ) : (
            <View mt={-Platform.SizeScale(15)} alignItems="center">
              <View
                style={[
                  styles.flashsale,
                  { backgroundColor: COLORS.WHITE, borderColor: COLORS._7F2B81, borderWidth: StyleSheet.hairlineWidth },
                ]}
              >
                <Text fontSize={Platform.SizeScale(12)} fontType="fontBold" color={COLORS._7F2B81}>
                  Mua Ngay
                </Text>
              </View>
            </View>
          )}
        </View>
      );
    },
    [styles.flashsale],
  );

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={{
          marginTop: -Platform.SizeScale(110),
        }}
      >
        <View>
          <SliderCarousel data={slides} renderItemProps={renderAds} />
        </View>
        <View>
          <Categories />
        </View>
        <View backgroundColor={COLORS.WHITE}>
          <SliderCarousel
            firstItem={1}
            activeSlideAlignment="center"
            itemWidth={Platform.SizeScale(150)}
            data={slides}
            renderItemProps={renderFlashSale}
            isShowDot={false}
          />
        </View>
        <ProductContainer
          title={
            <View style={[commonStyles.row]}>
              <Text>Flashsale</Text>
              <CountDown />
            </View>
          }
          data={products}
        />
        <ProductContainer title={'Skin care'} data={products} />
        <ProductContainer typeList="COL" title={'Mỹ phẩm'} data={products} />
        <View
          style={{
            height: Platform.SizeScale(100),
          }}
        />
      </ScrollView>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
