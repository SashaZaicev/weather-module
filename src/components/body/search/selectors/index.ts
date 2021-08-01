import {AppRootStateType} from "../../../../store/store";

export const selectorRequestStatus= (state: AppRootStateType) => state.appState.status
export const selectorAppError= (state: AppRootStateType) => state.appState.error
