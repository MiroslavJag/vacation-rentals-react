import * as actionTypes from './actionTypes';

export const getApartmentsData = () => {
  return {
      type: actionTypes.INIT_APARTMENTS_DATA
  };
}

export const setApartmentsData = (value) => {
  return {
      type: actionTypes.SET_APARTMENTS_DATA,
      apartments: value
  };
};

export const setErorr = ( ) => {
  return {
      type: actionTypes.SET_ERROR
  };
};


