import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import { getAllFilmsFailed, getAllFilmsRequest, getAllFilmsSuccess } from './actions';
import * as FilmsAPI from './apiCall';
import { GetAllFilmsRequestPayload, GetAllFilmsSuccessPayload } from './types';

function* getAllFilmsSaga({ payload }: PayloadAction<GetAllFilmsRequestPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: GetAllFilmsSuccessPayload;
      type: string;
    }>,
  void
> {
  const { limit } = payload;

  try {
    const filmsRes: any = yield call(FilmsAPI.getAllFilms, { limit });

    if (!isEmpty(filmsRes)) {
      yield put(getAllFilmsSuccess(filmsRes));
    } else {
      yield put(getAllFilmsFailed() as any);
    }
  } catch (err) {
    yield put(getAllFilmsFailed() as any);
  }
}

function* artworkSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(getAllFilmsRequest.type, getAllFilmsSaga);
}

export default artworkSaga;
