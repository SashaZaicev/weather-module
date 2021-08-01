import {weatherReducer} from "./weatherReducer";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk from 'redux-thunk'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
  weatherPage: weatherReducer,
  appState: appReducer,
});

export const store: Store<AppRootStateType> = createStore(
  rootReducer, applyMiddleware(thunk)
);
export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
