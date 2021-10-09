import { combineReducers } from "redux";
import loading from './loadingReducer';
import category from './categoryReducer';
import catList from './catListReducer';
import cat from './catReducer';


export default combineReducers({
  loading,
  category,
  catList,
  cat,
});