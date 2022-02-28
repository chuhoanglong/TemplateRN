import React, { FC } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { MarketStackT } from './types';
import { SearchCurrencyScreen } from '@scenes/search-currency';
import { FeePerByteScreen } from '@scenes/fee-per-byte';
import { MarketScreen } from '@scenes/market';
import { MarketSearchScreen } from '@scenes/market-search';
import { MarketCoinProfileScreen } from '@scenes/market-coin-profile';

const MainStack = createStackNavigator<MarketStackT>();

export const MarketStack: React.FC = () => {
  return (
    <MainStack.Navigator initialRouteName={'Market'}>
      <MainStack.Screen
        name={'Market'}
        component={MarketScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'SearchMarket'}
        component={MarketSearchScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'CoinProfile'}
        component={MarketCoinProfileScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </MainStack.Navigator>
  );
};
