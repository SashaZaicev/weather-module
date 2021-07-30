import {weatherReducer} from "./weatherReducer";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  weatherPage: weatherReducer,
});

export const store: Store<AppRootStateType> = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>;
