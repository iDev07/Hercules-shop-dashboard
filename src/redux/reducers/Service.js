import { GET_SERVICE_AUTO_REPAIRS, GET_SERVICE_HEADER, GET_SERVICE_REPAIRS } from "./../actions/types";
const initialState = {
  header: [],
  auto_repairs: [],
  repairs:[]
};
export const ServceReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SERVICE_HEADER:
      return {
        ...state,
        header: payload,
      };
    case GET_SERVICE_AUTO_REPAIRS:
      return {
        ...state,
        auto_repairs: payload,
      };
    case GET_SERVICE_REPAIRS:
      return {
        ...state,
        repairs: payload,
      };
    default:
      return state;
  }
};
