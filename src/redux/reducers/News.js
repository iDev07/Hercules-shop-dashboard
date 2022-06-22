import {
  GET_NEWS_COTEGORY,
  GET_NEWS_HEDER,
  GET_NEWS_MAIN,
  GET_NEWS_SLIDER,
} from "./../actions/types";
const initialState = {
  header: [],
  cotegory: [],
  main: [],
  slider: [],
};
export const NewsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEWS_HEDER:
      return {
        ...state,
        header: payload,
      };
    case GET_NEWS_COTEGORY:
      return {
        ...state,
        cotegory: payload,
      };
    case GET_NEWS_MAIN:
      return {
        ...state,
        main: payload,
      };
    case GET_NEWS_SLIDER:
      return {
        ...state,
        slider: payload,
      };
    default:
      return state;
  }
};
