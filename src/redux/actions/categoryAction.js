import Api from "../../utils/Api";
import { LOADING_TYPES } from "./loadingAction";


export const CATEGORY_TYPES = {
  GET_CATEGORIES: "GET_CATEGORIES",
}


export const getCategories = () => async (dispatch) => {

  try {
    dispatch({type: LOADING_TYPES.START_LOADING});

    const categories = await Api.get("/categories");

    dispatch({
      type: CATEGORY_TYPES.GET_CATEGORIES,
      payload: categories.data,
    });

    dispatch({type: LOADING_TYPES.END_LOADING});

  } catch (err) {
    console.log(err.respomse);
  }
}