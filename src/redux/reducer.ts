import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { initialStateTypes, todoActions, TodoActionTypes } from "./types";

const initialState: initialStateTypes = {
  todos: Array<[
    userId: number,
    id: number,
    title: string,
    completed: boolean
  ]>,
  loading: false,
};

export const reducer = (state = initialState, actions: todoActions) => {
  switch (actions.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {
        ...state,
        loading: true,
      };

    case TodoActionTypes.FETCH_TODOS_FULFILLED:
      return {
        ...state,
        todos: actions.payload,
        loading: false,
      };

    case TodoActionTypes.DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === actions.payload) {
            return {
              ...todo,
              deleting: true,
            };
          }
          return todo;
        }),
      };

    case TodoActionTypes.DELETE_TODOS_FULFILLED:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== actions.payload),
      };

    case TodoActionTypes.CHECK_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === actions.payload) {
            return {
              ...todo,
              checking: true,
            };
          }
          return todo;
        }),
      };

    case TodoActionTypes.CHECK_TODOS_FULFILLED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === actions.payload) {
            return {
              ...todo,
              completed: !todo.completed,
              checking: false,
            };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));
