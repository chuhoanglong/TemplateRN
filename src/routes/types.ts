import { NavigatorScreenParams } from '@react-navigation/core';
import { FinishedTransactionT, TokenBuyT, WalletDetail } from '@redux/wallet/types';

export type BottomTabT = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
  Screen5: undefined;
};

export type RootStackT = {
  MainStack: undefined;
  Auth: undefined;
  MyModal?: undefined;
};

export type CurrencyStackT = {
  ChoiceCurrency: undefined;
  SearchCurrency: undefined;
  FeePerByte: undefined;
};

export type MarketStackT = {
  Market: undefined;
  SearchMarket: undefined;
  CoinProfile: undefined;
};

export type MainStackT = {
  Drawer: undefined;
  Home: undefined;
  CoinProfile: undefined;
  AddWallet: undefined;
  CreateNewWallet: undefined;
  Passphrase: undefined;
  OtherPage: undefined;
  Login: undefined;
  LoginPassword: undefined;
  Send: undefined;
  CurrencyStack: NavigatorScreenParams<CurrencyStackT> | undefined;
  MarketStack: NavigatorScreenParams<MarketStackT> | undefined;
  FeePerByte: undefined;
  WalletDetail: { walletDetail: WalletDetail };
  PassphraseVerification: undefined;
  Receive: { walletDetail: WalletDetail };
  Buy: undefined;
  BuyCoin: { item: TokenBuyT };
  ShowPassphrase: { walletDetail: WalletDetail };
  EmailVerification: { email?: string };
  ChangePassword: undefined;
  SendWaiting: undefined;
  SendComplete: FinishedTransactionT;
  Privatekey: undefined;
  Keystore: undefined;
  PublicKey: undefined;
  QrScan: undefined;
  ProductDetail: undefined;
};
export type ScreenKeyT = keyof (BottomTabT & RootStackT & MainStackT);
export type ScreenRouteT = BottomTabT & RootStackT & MainStackT & CurrencyStackT & MarketStackT;
