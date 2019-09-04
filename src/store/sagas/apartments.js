import { put } from "redux-saga/effects";
import axios from 'axios';
import * as actions from '../actions';
import {API_URL} from '../../consts'

export function* initApartmentsSaga(action) {
  try {
    const response = yield axios.get(API_URL);
    yield put(actions.setApartmentsData(response.data));
  } catch (error) {
    yield put(actions.setErorr());
  }
}
