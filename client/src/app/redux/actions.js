import { USER_LOG_IN } from ".types";

export const logIn = (user, token, role) => {
  return {
    type: USER_LOG_IN,
    payload: {
      user,
      token,
      role,
    },
  };
};

export const logOut = () => {
  return {
    type: USER_LOG_OUT,
  };
};
