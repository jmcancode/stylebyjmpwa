import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import cart from "./cart";
import journal from "./journal";

export default combineReducers({
  alert,
  auth,
  cart,
  journal,
});
