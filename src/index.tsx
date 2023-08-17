import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { combineReducers, createStore } from "redux";
import { recipes } from "./reducers";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const store = createStore(combineReducers({ recipes }));
store.subscribe(() => console.log(store.getState()));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
