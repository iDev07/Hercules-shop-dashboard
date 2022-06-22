import {
  GET_CONTACT_HEDER,
  GET_CONTACT_INFO,
  GET_CONTACT_MAIN,
} from "./../actions/types";
const initialState = {
  header: [],
  info: [],
  main: [],
};
export const ConatctReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTACT_HEDER:
      return {
        ...state,
        header: payload,
      };
    case GET_CONTACT_INFO:
      return {
        ...state,
        info: payload,
      };
    case GET_CONTACT_MAIN:
      return {
        ...state,
        main: payload,
      };
    default:
      return state;
  }
};
