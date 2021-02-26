import { SAVE_ME, SIGN_OUT } from "../constants/actionType";
// import axios from "axios";
// import API from "../components/global/axios";
//example init state

const initState = {
  me: {},
};

//actions

export const saveMe = (me) => (dispatch) =>
  dispatch({
    type: SAVE_ME,
    me,
  });

export const actions = {
  saveMe,
  // authenticate,
  // unauthenticate,
};

const ACTION_HANDLERS = {
  // [AUTH_CHANGE]: (state, { isLoggedIn, checked }) => ({
  //   ...state,
  //   isLoggedIn,
  //   checked,
  // }),
  [SAVE_ME]: (state, { me }) => ({
    ...state,
    me,
  }),
};

export default function reducer(state = initState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
