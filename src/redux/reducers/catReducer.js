import { CAT_TYPES } from "../actions/catAction";


const initialState = {};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAT_TYPES.GET_CAT:
      return action.payload;
    default:
      return state;
  }
};

export default catReducer;