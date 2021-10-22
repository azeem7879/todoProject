import { createStore } from "redux";
import RootReducer from "../src/reducers/index"



function saveToLocalStorage(state) {
  try {
    const todoTask = JSON.stringify(state);
    localStorage.setItem("xyz", todoTask);
  } catch (e) {
    console.warn(e);
  }
}
//..........................................................................

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const todoTask = localStorage.getItem("xyz");
    if (todoTask === null) return undefined;
    return JSON.parse(todoTask);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
//..........................................................................

const store = createStore(RootReducer, loadFromLocalStorage(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;