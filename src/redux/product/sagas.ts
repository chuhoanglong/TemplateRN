import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import * as ProductAPI from './apiCall';
import { callSafe } from '@redux/rootSaga';

function* productSaga(): Generator<ForkEffect<never>, void> {

}

export default productSaga;
