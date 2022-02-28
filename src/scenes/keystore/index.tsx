import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useKeystoreStyle } from './styles';
import { Topbar } from '@components/topbar';
import { Platform } from '@theme/platform';
import { COLORS } from '@theme/colors';
import { ListFullOption } from '@components/list';
import { View } from '@components/view';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import commonStyles from '@theme/commonStyles';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { coins } from '@scenes/buy/__mocks__/data';
import { useBlurView } from '@hook/use-blur-view';
import { CommonCard } from '@components/common-card';
import { LazyImage } from '@components/lazy-image';
import { CommonButton } from '@components/CommonButton';
import { Images } from '@theme/images';

const _KeystoreScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useKeystoreStyle();
  const blurView = useBlurView();

  const onShowComplete = useCallback(() => {
    blurView.onShow(
      <CommonCard title="Welcome back!" width={Platform.SizeScale(310)}>
        <View mt={Platform.SizeScale(20)} alignItems="center">
          <LazyImage
            resizeMode="contain"
            source={Images.IMAGE_LIKE}
            style={{ width: Platform.SizeScale(123), height: Platform.SizeScale(94) }}
          />
        </View>
        <Text
          mv={Platform.SizeScale(20)}
          mh={Platform.SizeScale(20)}
          textAlign="center"
          fontSize={Platform.SizeScale(18)}
        >
          Wallet data import successful!
        </Text>
        <View mv={Platform.SizeScale(20)} alignItems="center">
          <CommonButton
            onPress={() => {
              blurView.onHide();
            }}
            width={Platform.SizeScale(290)}
            type="full"
            text="Got it!"
          />
        </View>
      </CommonCard>,
      {
        right: Platform.SizeScale(30),
        top: Platform.SizeScale(100),
      },

      'zoom',
    );
  }, [blurView]);

  const onNavigateDetail = useCallback(() => {
    navigation.reset({
      routes: [{ name: 'Drawer' }],
      routeNames: ['Drawer'],
    });
    onShowComplete();
  }, [navigation, onShowComplete]);

  const renderItemContent = useCallback(
    item => {
      return (
        <Touchable onPress={onNavigateDetail}>
          <View style={[commonStyles.row, styles.item]} mb={Platform.SizeScale(10)} backgroundColor={COLORS.WHITE}>
            <View ml={Platform.SizeScale(10)}>
              <Icon icon={Icons.ICON_AVATAR} size={5} />
            </View>
            <Text ml={Platform.SizeScale(5)} fontSize={Platform.SizeScale(15)} color={COLORS._0EA391}>
              {item.name}
            </Text>
          </View>
        </Touchable>
      );
    },
    [onNavigateDetail, styles.item],
  );

  return (
    <View>
      <Topbar title="Keystore">
        <View mh={Platform.SizeScale(20)}>
          <Text
            fontType="fontBold"
            mb={Platform.SizeScale(10)}
            fontSize={Platform.SizeScale(17)}
            color={COLORS._0EA391}
          >
            Choice Coins
          </Text>
          <ListFullOption
            listFooterComponent={<View style={{ height: Platform.SizeScale(150) }} />}
            data={coins}
            renderSubItem={renderItemContent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Topbar>
    </View>
  );
};

export const KeystoreScreen = memo(_KeystoreScreen);
