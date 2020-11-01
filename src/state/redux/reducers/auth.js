export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const UNAUTHORIZED_REDIRECT = "UNAUTHORIZED_REDIRECT";

const INITIAL_STATE = {
  is_authenticated: false,
};

export const Auth = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_SUCCESS:
      // alert('SIGN_IN_SUCCESS')
      state = {
        ...state,
        is_authenticated: true,
      };
      return state;

    case SIGN_IN_FAILURE:
      state = {
        ...state,
        is_authenticated: false,
      };
    case UNAUTHORIZED_REDIRECT:
      return INITIAL_STATE;
    case SIGN_OUT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
