import { createAction } from '@reduxjs/toolkit';
import { ROUTES } from '@routes/constants';
import { PURGE } from 'redux-persist';
import {
  ChangePasswordPayload,
  ChangePasswordSuccessPayload,
  EmailVerifyPayload,
  EmailVerifySuccessPayload,
  GetUserParams,
  LogginPayload,
  LoginSuccessPayload,
  SendEmailVerifyPayload,
  SendEmailVerifySuccessPayload,
} from './types';

export const loginRequest = createAction<LogginPayload>('LOGIN_REQUEST');
export const loginRequestSuccess = createAction<LoginSuccessPayload>('LOGIN_REQUEST_SUCCESS');
export const loginRequestFailed = createAction<any>('LOGIN_REQUEST_FAILED');

export const getUserRequest = createAction<GetUserParams>('GET_USER_REQUEST');
export const getUserSuccess = createAction<LoginSuccessPayload>('GET_USER_SUCCESS');
export const getUserFailed = createAction<any>('GET_USER_FAILED');

export const sendEmailVerifyRequest = createAction<SendEmailVerifyPayload>('SEND_EMAIL_VERIFY_REQUEST');
export const sendEmailVerifySuccess = createAction<SendEmailVerifySuccessPayload>('SEND_EMAIL_VERIFY_SUCCESS');
export const sendEmailVerifyFailed = createAction<any>('SEND_EMAIL_VERIFY_FAILED');

export const verifyEmailRequest = createAction<EmailVerifyPayload>('VERIFY_EMAIL_VERIFY_REQUEST');
export const verifyEmailSuccess = createAction<EmailVerifySuccessPayload>('VERIFY_EMAIL_VERIFY_SUCCESS');
export const verifyEmailFailed = createAction<any>('VERIFY_EMAIL_VERIFY_FAILED');

export const changePasswordRequest = createAction<ChangePasswordPayload>('CHANGE_PASSWORD_REQUEST');
export const changePasswordSuccess = createAction<ChangePasswordSuccessPayload>('CHANGE_PASSWORD_SUCCESS');
export const changePasswordFailed = createAction<any>('CHANGE_PASSWORD_FAILED');

export const logoutRequest = createAction('LOGOUT_REQUEST');
export const purgeRequest = createAction(PURGE);

export const changeInitRouteNameAuth = createAction<typeof ROUTES.Login | ROUTES.LoginPassword>(
  'CHANGE_INIT_ROUTE_NAME_AUTH',
);
