import { API_CONFIG } from '@services/apiConfig';
import withQuery from 'with-query';
import Config from 'react-native-config';
import {
  ChangePasswordPayload,
  EmailVerifyPayload,
  GetUserParams,
  LogginPayload,
  SendEmailVerifyPayload,
} from './types';

export async function requestLogin({ username, password, fcmToken }: LogginPayload): Promise<any> {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      fcmToken,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const url = withQuery(`${Config.API_URL}/${API_CONFIG.LOGIN}`);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: apiCall.ts ~ line 21 ~ requestLogin ~ url`, url);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    const response = await fetch(url, data);
    return response.json();
  } catch (error) {
    console.error('login - Error: ', error);
    throw error;
  }
}

export async function getUserRequest({ id }: GetUserParams): Promise<any> {
  const data = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const url = withQuery(`${Config.API_URL}/${API_CONFIG.GET_USER}/${id}`);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: apiCall.ts ~ line 21 ~ requestLogin ~ url`, url);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    const response = await fetch(url, data);
    return response.json();
  } catch (error) {
    console.error('getUserRequest - Error: ', error);
    throw error;
  }
}

export async function requestSendEmailVerify({ email }: SendEmailVerifyPayload): Promise<any> {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const url = withQuery(`${Config.API_URL}/${API_CONFIG.RESEND_EMAIL}`);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: apiCall.ts ~ line 21 ~ requestLogin ~ url`, url);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    const response = await fetch(url, data);
    return response.json();
  } catch (error) {
    console.error('send email - Error: ', error);
    throw error;
  }
}

export async function requestEmailVerify({ email, code }: EmailVerifyPayload): Promise<any> {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      email,
      code,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const url = withQuery(`${Config.API_URL}/${API_CONFIG.VERIFY_EMAIL}`);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: apiCall.ts ~ line 21 ~ requestLogin ~ url`, url);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    const response = await fetch(url, data);
    return response.json();
  } catch (error) {
    console.error('send email - Error: ', error);
    throw error;
  }
}

export async function requestChangePasswordVerify({
  userId,
  oldPassword,
  newPassword,
}: ChangePasswordPayload): Promise<any> {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      userId,
      oldPassword,
      newPassword,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const url = withQuery(`${Config.API_URL}/${API_CONFIG.CHANGE_PASS}`);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: apiCall.ts ~ line 21 ~ requestLogin ~ url`, url);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    const response = await fetch(url, data);
    return response.json();
  } catch (error) {
    console.error('send email - Error: ', error);
    throw error;
  }
}
