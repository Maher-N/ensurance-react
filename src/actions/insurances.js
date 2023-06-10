import {
    GET_INSURANCES_SUCCESS,
    SET_MESSAGE,
    GET_INSURANCES_Fail
  } from "./types";
  
  import InsurancesService from "../services/insurances.service";

  export const getinsurances = ( personalId) => (dispatch) => {
    return InsurancesService.getinsurances(personalId).then(
      (data) => {
        dispatch({
          type: GET_INSURANCES_SUCCESS,
          payload: { comapnies: data },
        });
       console.log(data,"jjjjl")
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
