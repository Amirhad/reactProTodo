export interface initialStateTypes {
  todos: Array<[
    userId: number,
    id: number,
    title: string
  ]>;
  loading: boolean;
}


export enum TodoActionTypes {
  FETCH_TODOS = "load/todos/start",
  FETCH_TODOS_FULFILLED = "load/start/fulfilled",

  DELETE_TODOS = "delete/todo/start",
  DELETE_TODOS_FULFILLED = "delete/todo/fulfilled",

  CHECK_TODOS = "check/load/start",
  CHECK_TODOS_FULFILLED = "check/load/success",
}




interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoFulfilled {
  type: TodoActionTypes.FETCH_TODOS_FULFILLED;
  payload: any[];
}

interface FetchDeleteAction {
  type: TodoActionTypes.DELETE_TODOS;
  payload: number;
}

interface FetchDeleteFulfilled {
  type: TodoActionTypes.DELETE_TODOS_FULFILLED;
  payload: number;
}

interface FetchCheckAction {
  type: TodoActionTypes.CHECK_TODOS;
  payload: number;
}

interface FetchCheckFulfilled {
  type: TodoActionTypes.CHECK_TODOS_FULFILLED;
  payload: number;
}



export type todoActions =
  | FetchTodoAction
  | FetchTodoFulfilled
  | FetchDeleteAction
  | FetchDeleteFulfilled
  | FetchCheckAction
  | FetchCheckFulfilled;
