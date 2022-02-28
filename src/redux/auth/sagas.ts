import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import * as AuthAPI from './apiCall';
import {
  changePasswordFailed,
  changePasswordRequest,
  changePasswordSuccess,
  getUserFailed,
  getUserRequest,
  getUserSuccess,
  loginRequest,
  loginRequestFailed,
  loginRequestSuccess,
  sendEmailVerifyFailed,
  sendEmailVerifyRequest,
  sendEmailVerifySuccess,
  verifyEmailFailed,
  verifyEmailRequest,
  verifyEmailSuccess,
} from '@redux/actions';
import {
  ChangePasswordPayload,
  ChangePasswordSuccessPayload,
  EmailVerifyPayload,
  EmailVerifySuccessPayload,
  GetUserParams,
  GetUserSuccessPayload,
  LogginPayload,
  LoginSuccessPayload,
  SendEmailVerifyPayload,
  SendEmailVerifySuccessPayload,
} from './types';
import { callSafe } from '@redux/rootSaga';

function* loginSaga({ payload }: PayloadAction<LogginPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: LoginSuccessPayload;
      type: string;
    }>,
  void
> {
  const { username, password, fcmToken, callback } = payload;
  try {
    const filmsRes: any = yield callSafe(AuthAPI.requestLogin, { username, password, fcmToken });
    yield put(loginRequestSuccess(filmsRes));
    return;
    if (!isEmpty(filmsRes)) {
      callback?.(filmsRes, 'SUCCESS');
      yield put(loginRequestSuccess(filmsRes));
    } else {
      callback?.(filmsRes, 'SUCCESS');
      yield put(loginRequestFailed(filmsRes) as any);
    }
  } catch (err) {
    yield put(loginRequestSuccess({ a: 1 }));

    // callback?.(err, 'ERROR');
    // yield put(loginRequestFailed(err) as any);
  }
}

function* getUserSaga({ payload }: PayloadAction<GetUserParams>): Generator<
  | CallEffect
  | PutEffect<{
      payload: GetUserSuccessPayload;
      type: string;
    }>,
  void
> {
  const { id, callback } = payload;
  try {
    const filmsRes: unknown = yield callSafe(AuthAPI.getUserRequest, { id });

    if (!isEmpty(filmsRes)) {
      yield put(getUserSuccess(filmsRes as GetUserSuccessPayload) as any);
      callback?.(filmsRes as GetUserSuccessPayload);
    } else {
      yield put(getUserFailed(filmsRes) as any);
    }
  } catch (err) {
    yield put(getUserFailed(err) as any);
  }
}

function* sendEmailVerifySaga({ payload }: PayloadAction<SendEmailVerifyPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: SendEmailVerifySuccessPayload;
      type: string;
    }>,
  void
> {
  const { email, callback } = payload;
  try {
    const filmsRes: any = yield callSafe(AuthAPI.requestSendEmailVerify, { email });

    if (!isEmpty(filmsRes)) {
      callback?.(filmsRes);
      yield put(sendEmailVerifySuccess(filmsRes));
    } else {
      callback?.(filmsRes);
      yield put(sendEmailVerifyFailed(filmsRes) as any);
    }
  } catch (err) {
    callback?.(err);
    yield put(sendEmailVerifyFailed(err) as any);
  }
}

function* verifyEmailSaga({ payload }: PayloadAction<EmailVerifyPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: EmailVerifySuccessPayload;
      type: string;
    }>,
  void
> {
  const { email, code, callback } = payload;
  try {
    const filmsRes: any = yield callSafe(AuthAPI.requestEmailVerify, { email, code });

    if (!isEmpty(filmsRes)) {
      callback?.(filmsRes);
      yield put(verifyEmailSuccess(filmsRes));
    } else {
      callback?.(filmsRes);
      yield put(verifyEmailFailed(filmsRes) as any);
    }
  } catch (err) {
    callback?.(err);
    yield put(verifyEmailFailed(err) as any);
  }
}

function* changePasswordSaga({ payload }: PayloadAction<ChangePasswordPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: ChangePasswordSuccessPayload;
      type: string;
    }>,
  void
> {
  const { userId, oldPassword, newPassword, callback } = payload;
  try {
    const filmsRes: any = yield callSafe(AuthAPI.requestChangePasswordVerify, { userId, oldPassword, newPassword });

    if (!isEmpty(filmsRes)) {
      callback?.(filmsRes, 'SUCCESS');
      yield put(changePasswordSuccess(filmsRes));
    } else {
      callback?.(filmsRes, 'ERROR');
      yield put(changePasswordFailed(filmsRes) as any);
    }
  } catch (err) {
    callback?.(err, 'ERROR');
    yield put(changePasswordFailed(err) as any);
  }
}

function* authSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(getUserRequest.type, getUserSaga);
  yield takeLatest(sendEmailVerifyRequest.type, sendEmailVerifySaga);
  yield takeLatest(verifyEmailRequest.type, verifyEmailSaga);
  yield takeLatest(changePasswordRequest.type, changePasswordSaga);
}

export default authSaga;
