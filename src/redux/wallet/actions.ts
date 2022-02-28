import { createAction } from '@reduxjs/toolkit';
import {
  AddWalletPayload,
  AddWalletSuccessPayload,
  GetCurrencyMoonpayPayload,
  GetCurrencyMoonpaySuccessPayload,
  GetWalletPayload,
  GetWalletSuccessPayload,
  PassPhrasePayload,
  PassPhraseSuccessPayload,
  SendWalletPayload,
  TokenBuyT,
  WalletDetail,
} from './types';

export const getPassphraseRequest = createAction<PassPhrasePayload>('GET_PASSPHRASE_REQUEST');
export const getPassphraseSuccess = createAction<PassPhraseSuccessPayload>('GET_PASSPHRASE_SUCCESS');
export const getPassphraseFailed = createAction('GET_PASSPHRASE_FAILED');

export const saveLengthMnemonic = createAction<number>('SAVE_LENGTH_MNEMONIC');

export const addWalletRequest = createAction<AddWalletPayload>('ADD_WALLET_REQUEST');
export const addWalletSuccess = createAction<AddWalletSuccessPayload>('ADD_WALLET_SUCCESS');
export const addWalletFailed = createAction('ADD_WALLET_FAILED');

export const changeNameWallet = createAction<string>('CHANGE_NAME_WALLET');

export const getWalletsRequest = createAction<GetWalletPayload>('GET_WALLET_REQUEST');
export const getWalletsSuccess = createAction<GetWalletSuccessPayload>('GET_WALLET_SUCCESS');
export const getWalletsFailed = createAction('GET_WALLET_FAILED');

export const getTokensRequest = createAction('GET_TOKENS_REQUEST');
export const getTokensSuccess = createAction<any>('GET_TOKENS_SUCCESS');
export const getTokensFailed = createAction('GET_TOKENS_FAILED');

export const getCurrencyMoonpayRequest = createAction<GetCurrencyMoonpayPayload>('GET_CURRENCY_MOONPAY_REQUEST');
export const getCurrencyMoonpaySuccess = createAction<GetCurrencyMoonpaySuccessPayload>('GET_CURRENCY_MOONPAY_SUCCESS');
export const getCurrencyMoonpayFailed = createAction('GET_CURRENCY_MOONPAY_FAILED');

export const changeCurrentWallet = createAction<WalletDetail>('CHANGE_CURRENT_WALLET');

export const sendToWalletRequest = createAction<SendWalletPayload>('SEND_TO_WALLET_REQUEST');
export const sendToWalletSuccess = createAction<any>('SEND_TO_WALLET_SUCCESS');
export const sendToWalletFailed = createAction('SEND_TO_WALLET_FAILED');

export const captureQrCodeData = createAction<string>('CAPTURE_QR_CODE_DATA');

export const changeCurrentToken = createAction<TokenBuyT | undefined>('CHANGE_CURRENT_TOKEN');
