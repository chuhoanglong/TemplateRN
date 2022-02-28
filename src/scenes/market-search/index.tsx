import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useMarketSearchStyle } from './styles';
import { Topbar } from '@components/topbar';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import { Icons } from '@theme/icons';
import { Header } from '@scenes/market/header';
import { Icon } from '@components/common-icon';
import { View } from '@components/view';
import { Search } from './search';
import { ListHistory } from './listHistory';
import { Touchable } from '@components/touchable';

const _MarketSearchScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useMarketSearchStyle();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderHeader = useCallback(() => {
    return (
      <View style={{ flex: 1 }}>
        <View style={[commonStyles.row, commonStyles.spaceBetween]}>
          <View>
            <Header />
          </View>
          <View style={[commonStyles.row]}>
            <View mr={Platform.SizeScale(20)}>
              <Icon icon={Icons.ICON_THREE_DOT_GREEN} size={3.5} />
            </View>
            <Touchable onPress={onBack}>
              <Icon icon={Icons.ICON_X_GREEN} size={3.5} />
            </Touchable>
          </View>
        </View>
      </View>
    );
  }, [onBack]);
  return (
    <View>
      <Topbar renderHeader={renderHeader}>
        <Search />
        <ListHistory />
      </Topbar>
      {/* <ClickViewUI /> */}
    </View>
  );
};

export const MarketSearchScreen = memo(_MarketSearchScreen);
