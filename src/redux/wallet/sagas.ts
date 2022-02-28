import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import * as WalletAPI from './apiCall';
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
} from './types';
import { callSafe } from '@redux/rootSaga';
import {
  addWalletFailed,
  addWalletRequest,
  addWalletSuccess,
  getPassphraseFailed,
  getPassphraseRequest,
  getPassphraseSuccess,
  getWalletsFailed,
  getWalletsRequest,
  getWalletsSuccess,
} from './actions';
import {
  getCurrencyMoonpayFailed,
  getCurrencyMoonpayRequest,
  getCurrencyMoonpaySuccess,
  getTokensFailed,
  getTokensRequest,
  getTokensSuccess,
  sendToWalletFailed,
  sendToWalletRequest,
  sendToWalletSuccess,
} from '@redux/actions';

function* createPassPhraseSaga({ payload }: PayloadAction<PassPhrasePayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: PassPhraseSuccessPayload;
      type: string;
    }>,
  void
> {
  const { length, callback } = payload;
  try {
    const filmsRes: unknown = yield callSafe(WalletAPI.requestGeneratePassphrase, { length });

    if (!isEmpty(filmsRes)) {
      yield put(getPassphraseSuccess(filmsRes as PassPhraseSuccessPayload) as any);
      callback?.(filmsRes as PassPhraseSuccessPayload);
    } else {
      yield put(getPassphraseFailed() as any);
    }
  } catch (err) {
    yield put(getPassphraseFailed() as any);
  }
}

function* createWalletSaga({ payload }: PayloadAction<AddWalletPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: AddWalletSuccessPayload;
      type: string;
    }>,
  void
> {
  const { mnemonic, name, userId, callback } = payload;
  try {
    const filmsRes: unknown = yield callSafe(WalletAPI.addWallet, { mnemonic, name, userId });

    if (!isEmpty(filmsRes)) {
      yield put(addWalletSuccess(filmsRes as AddWalletSuccessPayload) as any);
      callback?.(filmsRes as AddWalletSuccessPayload);
    } else {
      yield put(addWalletFailed() as any);
    }
  } catch (err) {
    yield put(addWalletFailed() as any);
  }
}

function* getWalletsSaga({ payload }: PayloadAction<GetWalletPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: GetWalletSuccessPayload;
      type: string;
    }>,
  void
> {
  const { userId, callback } = payload;
  try {
    const filmsRes: unknown = yield callSafe(WalletAPI.getWallet, { userId });

    if (!isEmpty(filmsRes)) {
      yield put(getWalletsSuccess(filmsRes as GetWalletSuccessPayload) as any);
      callback?.(filmsRes as GetWalletSuccessPayload);
    } else {
      yield put(getWalletsFailed() as any);
    }
  } catch (err) {
    yield put(getWalletsFailed() as any);
  }
}

function* getTokensSaga({ payload }: PayloadAction<any>): Generator<
  | CallEffect
  | PutEffect<{
      payload: any;
      type: string;
    }>,
  void
> {
  try {
    const filmsRes: unknown = yield callSafe(WalletAPI.getTokens);

    if (!isEmpty(filmsRes)) {
      yield put(getTokensSuccess(filmsRes) as any);
    } else {
      yield put(getTokensFailed() as any);
    }
  } catch (err) {
    yield put(getTokensFailed() as any);
  }
}

function* getCurrencySaga({ payload }: PayloadAction<GetCurrencyMoonpayPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: GetCurrencyMoonpaySuccessPayload;
      type: string;
    }>,
  void
> {
  const { apiKey, symbol, baseCurrencyAmount, baseCurrencyCode, callback } = payload;
  try {
    const filmsRes: unknown = yield callSafe(WalletAPI.getMoonpayCurrency, {
      apiKey,
      baseCurrencyAmount,
      baseCurrencyCode,
      symbol,
    });

    if (!isEmpty(filmsRes) && !(filmsRes.data.errors as any)) {
      yield put(getCurrencyMoonpaySuccess(filmsRes as GetCurrencyMoonpaySuccessPayload) as any);
      callback?.(filmsRes, 'SUCCESS');
    } else {
      yield put(getCurrencyMoonpayFailed() as any);
      callback?.(filmsRes, 'ERROR');
    }
  } catch (err) {
    yield put(getCurrencyMoonpayFailed() as any);
    callback?.(err, 'ERROR');
  }
}

function* sendToWalletSaga({ payload }: PayloadAction<SendWalletPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: any;
      type: string;
    }>,
  void
> {
  const { amount, to, symbol, walletId, callback } = payload;
  try {
    const filmsRes: unknown = yield callSafe(WalletAPI.sendToWallet, { amount, to, symbol, walletId });

    if (!isEmpty(filmsRes)) {
      yield put(sendToWalletSuccess(filmsRes as any) as any);
      callback?.(filmsRes as any, 'SUCCESS');
    } else {
      yield put(sendToWalletFailed() as any);
      callback?.(filmsRes as any, 'ERROR');
    }
  } catch (err) {
    yield put(sendToWalletFailed() as any);
    callback?.(err, 'ERROR');
  }
}

function* walletSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(getPassphraseRequest.type, createPassPhraseSaga);
  yield takeLatest(addWalletRequest.type, createWalletSaga);
  yield takeLatest(getWalletsRequest.type, getWalletsSaga);
  yield takeLatest(getTokensRequest.type, getTokensSaga);
  yield takeLatest(getCurrencyMoonpayRequest.type, getCurrencySaga);
  yield takeLatest(sendToWalletRequest.type, sendToWalletSaga);
}

export default walletSaga;
