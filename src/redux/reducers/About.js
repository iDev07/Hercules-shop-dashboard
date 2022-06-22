import {
  GET_ABOUT_EXPERIENCES,
  GET_ABOUT_HEADER,
  GET_ABOUT_SUSPENSIONS,
  GET_ABOUT_VEHICLES,
  GET_ABOUT_PROFESSIONS,
  GET_ABOUT_SLIDERS,
  GET_ABOUT_VIDEOS,
} from "../actions/types";
const initialState = {
  headers: [],
  suspensions: [],
  experiences: [],
  vehicles: [],
  professions: [],
  sliders: [],
  videos:[]
};

export const aboutReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ABOUT_HEADER:
      return {
        ...state,
        headers: payload,
      };
    case GET_ABOUT_SUSPENSIONS:
      return {
        ...state,
        suspensions: payload,
      };
    case GET_ABOUT_EXPERIENCES:
      return {
        ...state,
        experiences: payload,
      };
    case GET_ABOUT_VEHICLES:
      return {
        ...state,
        vehicles: payload,
      };
    case GET_ABOUT_PROFESSIONS:
      return {
        ...state,
        professions: payload,
      };
    case GET_ABOUT_SLIDERS:
      return {
        ...state,
        sliders: payload,
      };
    case GET_ABOUT_VIDEOS:
      return {
        ...state,
        videos: payload,
      };
    default:
      return state;
  }
};
