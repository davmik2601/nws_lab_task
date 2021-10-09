import Api from "../../utils/Api";
import { LOADING_TYPES } from "./loadingAction";


export const CAT_TYPES = {
  GET_CAT: "GET_CAT",
}


export const getCat = (id) => async (dispatch) => {

  try {
    dispatch({type: LOADING_TYPES.START_LOADING});

    const cat = await Api.get(`/images/${id}`);

    dispatch({
      type: CAT_TYPES.GET_CAT,
      payload: cat.data
    })

    dispatch({type: LOADING_TYPES.END_LOADING});
    
  } catch (err) {
    console.log(err.response);
  }
}