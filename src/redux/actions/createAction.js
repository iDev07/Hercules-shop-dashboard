
import api from './../../utils/api';
export const createAction =
  (path, actionType, formData) => async (dispatch) => {
    try {
      const res = await api.post(path, formData);
      
      dispatch({
        type: actionType,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
