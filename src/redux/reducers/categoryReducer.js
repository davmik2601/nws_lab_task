import { CATEGORY_TYPES } from "../actions/categoryAction";


const initialState = {categories: []};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_TYPES.GET_CATEGORIES:
      return {...state, categories: action.payload};
    default:
      return state;
  }
};

export default categoryReducer;