import { Dispatch } from "react";
import { todoActions, TodoActionTypes } from "./types";

export const loadTodos = () => {
  return (dispatch: Dispatch<todoActions>): void => {
    dispatch({ type: TodoActionTypes.FETCH_TODOS });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((responce) => responce.json())
      .then((json) => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_FULFILLED,
          payload: json,
        });
      });
  };
};

export const removeTodo = (id: number) => {
  return (dispatch: Dispatch<todoActions>): void => {
    dispatch({ type: TodoActionTypes.DELETE_TODOS, payload: id });

    //в types я написал id number если что !!!!

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((responce) => responce.json())
      .then(() => {
        dispatch({
          type: TodoActionTypes.DELETE_TODOS_FULFILLED,
          payload: id,
        });
      });
  };
};

export const updateCheck = (id: number, completed: boolean) => {
  return (dispatch: Dispatch<todoActions>): void => {
    dispatch({ type: TodoActionTypes.CHECK_TODOS, payload: id });

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    })
      .then((responce) => responce.json())
      .then(() => {
        dispatch({
          type: TodoActionTypes.CHECK_TODOS_FULFILLED,
          payload: id,
        });
      });
  };
};
