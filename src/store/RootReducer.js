import { createStore, combineReducers } from "redux"
import Navigator from "./Navigator";

const reducers = combineReducers({
    Navigator,
});
const rootReducer = createStore(reducers)
export default rootReducer