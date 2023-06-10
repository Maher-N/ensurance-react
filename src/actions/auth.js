import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    REFRESH_TOKEN
  } from "./types";
  
  import AuthService from "../services/auth.service";

  export const register =(email, password,personal_id,district,locality,landline,mobile_number,role,years_of_driving,car_model,car_id,car_company,car_price,engine_size) => (dispatch) => {
    return AuthService.register(email, password,personal_id,district,locality,landline,mobile_number,role,years_of_driving,car_model,car_id,car_company,car_price,engine_size) .then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: { user: response },
        });
        //console.log(response)

        return Promise.resolve();
      },
      (error) => {
        //console.log(error)

        const message =error.response.data.errors;
          // (error.response &&
          //   error.response.data &&
          //   error.response.data.message) ||
          // error.message ||
          // error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        //console.log(message)

        return Promise.reject();
      }
    );
  };
  
  export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
       //console.log(data)
        return Promise.resolve();
      },
      (error) => {
        //console.log(error)

        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        //console.log(message)

        return Promise.reject();
      }
    );
  };
  
  export const getinsurances = ( personalId) => (dispatch) => {
    return AuthService.getinsurances(personalId).then(
      (data) => {
        dispatch({
          type: GET_INSURANCES_SUCCESS,
          payload: { comapnies: data },
        });
       //console.log(data)
        return Promise.resolve();
      },
      (error) => {
        //console.log(error)

        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: GET_INSURANCES_Fail,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        //console.log(message)

        return Promise.reject();
      }
    );
  };
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };

  export const refreshToken = (accessToken) => (dispatch) => {
    console.log(accessToken)
    dispatch({
      type: REFRESH_TOKEN,
      payload: accessToken,
    })
  }