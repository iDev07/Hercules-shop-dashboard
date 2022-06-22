import {
  CreateHomeDetails,
  CreateHomeStep,
} from "../../component/helpers/Creat";
import {
  GET_HOME_FEEDBACK,
  GET_HOME_INFO_Details,
  GET_HOME_LOCATION,
  GET_HOME_PARTNERS,
  GET_HOME_SLIDER,
  GET_HOME_STEP,
  GET_HOME_STEP_COTEGORY,
  GET_HOME_TOLS,
  CREATE_HOME_FEEDBACKS,
  CREATE_HOME_LOCATION,
  CREATE_HOME_PARTNERS,
} from "../actions/types";

const initialState = {
  feedback: [],
  details: [],
  location: [],
  partners: [],
  slider: [],
  step: [],
  stepCotegory: [],
  tools: [],
};

export const HomeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HOME_FEEDBACK:
      return {
        ...state,
        feedback: payload,
      };
    case CREATE_HOME_FEEDBACKS:
      return {
        ...state,
        feedback: payload,
      };
    case GET_HOME_INFO_Details:
      return {
        ...state,
        details: payload,
      };
    case CreateHomeDetails:
      return {
        ...state,
        details: payload,
      };
    case GET_HOME_LOCATION:
      return {
        ...state,
        location: payload,
      };
    case CREATE_HOME_LOCATION:
      return {
        ...state,
        location: payload,
      };
    case GET_HOME_PARTNERS:
      return {
        ...state,
        partners: payload,
      };
    case CREATE_HOME_PARTNERS:
      return {
        ...state,
        partners: payload,
      };
    case GET_HOME_SLIDER:
      return {
        ...state,
        slider: payload,
      };
    case GET_HOME_STEP:
      return {
        ...state,
        step: payload,
      };
    case CreateHomeStep:
      return {
        ...state,
        step: payload,
      };
    case GET_HOME_STEP_COTEGORY:
      return {
        ...state,
        stepCotegory: payload,
      };
    case GET_HOME_TOLS:
      return {
        ...state,
        tools: payload,
      };
    default:
      return state;
  }
};
