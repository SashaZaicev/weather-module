import {AppRootStateType} from "../../../../store/store";

export const selectorRequestCities= (state: AppRootStateType) => state.weatherPage.cities
export const selectorRequestCity= (state: AppRootStateType) => state.weatherPage.standCity
