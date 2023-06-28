import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {applyMiddleware, createStore} from 'redux'
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";



const initialState = {
  todos:[],
  loading:false
}

const reducer = (state = initialState,actions) =>{
    switch (actions.type) {


      case "load/todos/start":
        return{
          ...state,
          loading: true
        }



      case "load/start/fulfilled":
        return {
          ...state,
          todos: actions.payload,
          loading:false
        }


        case "delete/todo/fulfilled":
          return{
            ...state,
            todos:state.todos.filter((todo) => todo.id !== actions.payload)
          }
        
    
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
