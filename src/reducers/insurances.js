import {
    GET_INSURANCES_Fail,
    GET_INSURANCES_SUCCESS,
  } from "../actions/types";
  
  const user = JSON.parse(localStorage.getItem("user"));
  let message = '';

  const initialState = user
  ? {  user }
  : {  user: null };
    //console.log(initialState);
    //console.log(message);

  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          insurances: payload.comapnies,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          insurances: null,
        };
      default:
        return state;
    }
  }