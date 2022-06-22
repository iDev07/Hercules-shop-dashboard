import {
  GET_SITE_MASTER,
} from "./../actions/types";
const initialState = {
  master: [],
};
export const SiteMasterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SITE_MASTER:
      return {
        ...state,
        master: payload,
      };
    default:
      return state;
  }
};
