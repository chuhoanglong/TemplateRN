import {
  captureQrCodeData,
  changeCurrentToken,
  changeCurrentWallet,
  getTokensFailed,
  getTokensRequest,
  getTokensSuccess,
  sendToWalletFailed,
  sendToWalletRequest,
  sendToWalletSuccess,
} from '@redux/actions';
import { createReducer } from '@reduxjs/toolkit';
import { mapTokensBuy } from '@tools/wallet.helper';
import {
  changeNameWallet,
  getPassphraseFailed,
  getPassphraseRequest,
  getPassphraseSuccess,
  getWalletsFailed,
  getWalletsRequest,
  getWalletsSuccess,
  saveLengthMnemonic,
} from './actions';
import { TokenBuyT, WalletDetail } from './types';

export interface WalletState {
  requesting: boolean;
  mnemonic: string;
  lengthMnemonic: number;
  privateKey: string;
  account: string;
  walletName: string;
  wallets: any[];
  tokens: any[];
  currentWallet?: WalletDetail;
  qrCodeData: string;
  typeTransaction?: 'WAIT' | 'SUCCESS' | 'FAILED';
  currentToken?: TokenBuyT;
}

const initialState: WalletState = {
  requesting: false,
  mnemonic: '',
  lengthMnemonic: 12,
  privateKey: '',
  account: '',
  walletName: '',
  wallets: [],
  tokens: [],
  currentWallet: undefined,
  qrCodeData: '',
  typeTransaction: undefined,
  currentToken: undefined,
};

export const walletReducer = createReducer(initialState, {
  [getPassphraseRequest.type]: state => {
    state.requesting = true;
  },
  [getPassphraseSuccess.type]: (state, action) => {
    state.requesting = false;
    state.mnemonic = action.payload.data.mnemonic;
  },
  [getPassphraseFailed.type]: state => {
    state.requesting = false;
  },
  [saveLengthMnemonic.type]: (state, action) => {
    state.lengthMnemonic = action.payload;
  },
  [changeNameWallet.type]: (state, action) => {
    state.walletName = action.payload;
  },
  [getWalletsRequest.type]: state => {
    state.requesting = true;
  },
  [getWalletsSuccess.type]: (state, action) => {
    state.requesting = false;
    state.wallets = action.payload.data;
  },
  [getWalletsFailed.type]: state => {
    state.requesting = false;
  },
  [getTokensRequest.type]: state => {
    state.requesting = true;
  },
  [getTokensSuccess.type]: (state, action) => {
    state.requesting = false;
    state.tokens = action.payload.data;
  },
  [getTokensFailed.type]: state => {
    state.requesting = false;
  },
  [changeCurrentWallet.type]: (state, action) => {
    state.currentWallet = action.payload;
  },
  [captureQrCodeData.type]: (state, action) => {
    state.qrCodeData = action.payload;
  },
  [sendToWalletRequest.type]: state => {
    state.requesting = true;
    state.typeTransaction = 'WAIT';
  },
  [sendToWalletSuccess.type]: (state, action) => {
    state.requesting = false;
    state.typeTransaction = 'SUCCESS';
  },
  [sendToWalletFailed.type]: state => {
    state.requesting = false;
    state.typeTransaction = 'FAILED';
  },
  [changeCurrentToken.type]: (state, action) => {
    state.currentToken = action.payload;
  },
});
