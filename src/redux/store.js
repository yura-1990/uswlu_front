import { createStore } from "redux";
import rootReducer from "./reducers/index";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const dispatch = store.dispatch;
export default store;
