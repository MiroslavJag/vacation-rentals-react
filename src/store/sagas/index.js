import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { initApartmentsSaga } from "./apartments";

export function* watchApartments() {
  yield takeEvery(actionTypes.INIT_APARTMENTS_DATA, initApartmentsSaga);
}
