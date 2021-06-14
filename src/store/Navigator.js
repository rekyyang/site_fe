import { createStore } from "redux"
import PageConfig from "../common/PageConfig";

const defaultState={
    page:"index"
}

//纯函数
let reducers =(state = defaultState ,action)=>{
    switch (action.type){
        case "index":
            return {page:"index"};
        default :
            return state
    }
}

const navigatorReducer = createStore(reducers)
export default  navigatorReducer;