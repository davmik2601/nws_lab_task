import { CATLIST_TYPES } from "../actions/catListAction";


const initialState = {cats: [], page: 1};

const catListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATLIST_TYPES.GET_ALL:
      return {...state, cats: action.payload.page===1 ? action.payload.cats : [...state.cats, ...action.payload.cats], page: action.payload.page};
    default:
      return state;
  }
};

export default catListReducer;