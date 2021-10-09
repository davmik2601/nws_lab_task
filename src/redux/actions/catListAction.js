import Api from "../../utils/Api";
import { LOADING_TYPES } from "./loadingAction";

export const CATLIST_TYPES = {
  GET_ALL: "GET_ALL",
}



export const getAllCats = (page=1, category_id=null) => async (dispatch) => {

  try {
    dispatch({type: LOADING_TYPES.START_LOADING});

    const cats = await Api.get(`/images/search?limit=10&page=${page}${category_id ? "&category_ids="+category_id : ""}`);

    dispatch({
      type: CATLIST_TYPES.GET_ALL,
      payload: {
        cats: cats.data,
        page
      }
    });

    dispatch({type: LOADING_TYPES.END_LOADING});

  } catch (err) {
    console.log(err.response);
  }
}