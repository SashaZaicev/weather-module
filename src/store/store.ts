import {weatherReducer} from "./weatherReducer";
import {combineReducers, createStore, Store} from "redux";

const rootReducer = combineReducers({
  // weatherPage: weatherReducer,
});

export const store: Store<AppRootStateType> = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>;
