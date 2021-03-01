import { GET_RESTAURANT } from "../constants/actionType";

const initState = {
  restaurant: {},
};

export const getRestaurant = (restaurant) => (dispatch) =>
  dispatch({
    type: GET_RESTAURANT,
    restaurant,
  });

export const actions = {
  getRestaurant,
};

const ACTION_HANDLERS = {
  [GET_RESTAURANT]: (state, { restaurant }) => ({
    ...state,
    restaurant,
  }),
};

export default function reducer(state = initState, action) {
  //   console.log("abcde");
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
