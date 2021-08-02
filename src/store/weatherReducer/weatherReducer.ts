import {Dispatch} from "redux";
import {weatherAPI} from "../../api/api";
import {CityType} from "../types";
import {appAction} from "../appReducer/appReducer";

const ADD_WEATHER_CITY = 'ADD-WEATHER-CITY'
const REMOVE_WEATHER_CITY = 'REMOVE-WEATHER-CITY'
const SET_SHOW_CITY = 'SET-SHOW-CITY'

const initialState = {
  cities: (localStorage['weatherCity']
    ? JSON.parse(localStorage['weatherCity']) || [] : []) as Array<CityType>,
  standCity: null as CityType | null
}
export type InitStateType = typeof initialState;
export type AddTableType = ReturnType<typeof cityWeatherAction.addWeatherCityAC>;
export type RemoveTableType = ReturnType<typeof cityWeatherAction.removeSearchCityAC>;
export type SetShowCityType = ReturnType<typeof cityWeatherAction.setShowCity>;
export type ActionsType = AddTableType & RemoveTableType & SetShowCityType;

export const weatherReducer = (
  state = initialState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case ADD_WEATHER_CITY: {
      if (state.cities.some(city => city.name === action.cityInfo.name)) {
        return state;
      } else return {...state, cities: [{...action.cityInfo}, ...state.cities]}
    }
    case REMOVE_WEATHER_CITY: {
      return {...state, cities: state.cities.filter(tl => tl.id !== action.id)}
    }
    case SET_SHOW_CITY: {
      return {...state, standCity: action.city}
    }
    default:
      return state
  }
};
export const cityWeatherAction = {
  addWeatherCityAC: (cityInfo: CityType) => ({
    type: ADD_WEATHER_CITY, cityInfo
  }),
  removeSearchCityAC: (id: number) => ({
    type: REMOVE_WEATHER_CITY, id
  }),
  setShowCity: (city: CityType | null) => ({
    type: SET_SHOW_CITY, city
  })
}
export const getWeatherTC = (currentCity: string) => (
  dispatch: Dispatch) => {
  weatherAPI.getWeather(currentCity)
    .then((city) => {
      dispatch(cityWeatherAction.addWeatherCityAC(city))
      dispatch(cityWeatherAction.setShowCity(null))
      dispatch(appAction.setAppStatus('success'));
      dispatch(appAction.setAppError(''))

    })
    .catch((error) => {
        dispatch(appAction.setAppError(error.message))
        dispatch(appAction.setAppStatus('unsuccessful'));
      }
    )
};
export const showWeatherTC = (currentCity: string) => (
  dispatch: Dispatch) => {
  dispatch(cityWeatherAction.setShowCity(null))
  dispatch(appAction.setAppError(''))
  weatherAPI.getWeather(currentCity)
    .then((city) => {
      dispatch(cityWeatherAction.setShowCity(city))
      dispatch(appAction.setAppStatus('success'));
      dispatch(appAction.setAppError(''))
      return city
    })
    .catch((error) => {
        dispatch(appAction.setAppError(error.message))
        dispatch(appAction.setAppStatus('unsuccessful'));
      }
    )
};
