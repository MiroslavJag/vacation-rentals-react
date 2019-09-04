import * as actionTypes from '../actions/actionTypes';

export const initialState = {
  apartments: null,
  error: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
      case actionTypes.SET_APARTMENTS_DATA:
        return {
          ...state,
          apartments: action.apartments.apartments,
          error: false
        }
      default:
        return state;
    }
}

export default reducer;
