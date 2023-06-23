import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {applyMiddleware, createStore} from 'redux'
import { Provider } from "react-redux";
import thunk from "redux-thunk";


const initialState = []

const reducer = (state = initialState,actions) =>{
    switch (actions.type) {
      case "load/start/fulfilled":
        return actions.payload
        
    
      default:
        return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
