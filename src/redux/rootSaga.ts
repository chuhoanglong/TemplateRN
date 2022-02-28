import { all, AllEffect, call, CallEffect, ForkEffect, PutEffect, spawn } from 'redux-saga/effects';
import userSagas from '@redux/ghibli/sagas';
import authSagas from '@redux/auth/sagas';
import walletSaga from '@redux/wallet/sagas';

import { ResponseT } from '@types/app';

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>> {
  const sagas = [userSagas, authSagas, walletSaga];

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      }),
    ),
  );
}

export default rootSaga;

export function* callSafe<Fn extends (params: any) => Promise<any>, T>(fn: Fn, ...args: Parameters<Fn>): any {
  try {
    const result: ResponseT<T> = yield call(fn, ...args);
    console.log(
      `🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------------------`,
    );
    console.log(`🛠 LOG: 🚀 --> ~ file: common.saga.ts ~ line 9 ~ function*callSafe<Fnextends ~ result`, result);
    console.log(
      `🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------------------`,
    );
    if (result.data) {
      return result as any;
    }

    throw result;
  } catch (error) {
    console.log(
      `🛠 LOG: 🚀 --> --------------------------------------------------------------------------------------------`,
    );
    console.log(`🛠 LOG: 🚀 --> ~ file: common.saga.ts ~ line 17 ~ function*callSafe<Fnextends ~ error`, error);
    console.log(
      `🛠 LOG: 🚀 --> --------------------------------------------------------------------------------------------`,
    );
    throw error;
  }
}
