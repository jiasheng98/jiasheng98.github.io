import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
} from "../redux/auth";
import {
    signIn as signInService,
    signOut as signOutService,
  } from "../services/auth";

export const signIn = ({ user_name, password }) => async (dispatch) => {
  try {
    const res = await signInService({ user_name, password });
    const {success} = res
    if(success)
      dispatch(signInSuccess());
    return success;
  } catch (error) {
    signInFailure(error);
  }
};
export const signOut = () => async (dispatch) => {
  try {
    dispatch(signOutSuccess());
    const response = await signOutService();
    return response;
  } catch (error) {
    signInFailure(error);
  }
};

export const signInSuccess = () => {
  return {
    type: SIGN_IN_SUCCESS,
  };
};
export const signInFailure = (message) => {
  return {
    type: SIGN_IN_FAILURE,
    message,
  };
};
export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};
