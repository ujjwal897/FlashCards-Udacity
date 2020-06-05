import reducer from "../reducers/index";
import middleware from '../middlewares/index'
import { createStore } from "redux";

export default createStore(reducer,middleware)