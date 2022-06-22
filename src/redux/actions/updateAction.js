import api from "../../utils/api";

export const updateAction =
  (path, actionType, id, data) => async (dispatch) => {
    console.log("UPDATED => ", path);
    api
      .put(`${path}/${id}`, data)
      .then((res) => {
        if (res) {
          api.get(path).then((response) => {
            dispatch({
              type: actionType,
              payload: response.data,
            });
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
