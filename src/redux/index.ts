import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { reducer } from "./reducer";


const rootState = combineReducers({
  reducer: reducer,
});

export const store = createStore(rootState, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
