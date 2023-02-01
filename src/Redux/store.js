import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  contacts: [],
  filter: "",
  name: "",
  number: ""
}

const rootReduser = (state = initialState, action) => {
  switch(action.type){
    case "CONTACT":{
      return { ...state, ...action.payload};
    }
    default:
      return state
    }
  }


// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();

export const store = createStore(rootReduser, enhancer);

console.log(store.getState())