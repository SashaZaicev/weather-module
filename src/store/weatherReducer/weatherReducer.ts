import {Dispatch} from "redux";
import {weatherAPI} from "../../api/api";
import {CityType} from "../types";
import {appAction} from "../appReducer/appReducer";

const ADD_WEATHER_CITY = 'ADD-WEATHER-CITY'
const REMOVE_WEATHER_CITY = 'REMOVE-WEATHER-CITY'

const initialState: Array<CityType> = localStorage['weatherCity']
  ? JSON.parse(localStorage['weatherCity']) || [] : []
export type InitStateType = typeof initialState;
export type AddTableType = ReturnType<typeof cityWeatherAction.addWeatherCityAC>;
export type RemoveTableType = ReturnType<typeof cityWeatherAction.removeSearchCityAC>;
export type ActionsType = AddTableType & RemoveTableType;

export const weatherReducer = (
  state = initialState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case ADD_WEATHER_CITY: {
      if (state.some(city => city.name === action.cityInfo.name)) {
        return state;
      } else return [{...action.cityInfo}, ...state]
    }
    case REMOVE_WEATHER_CITY: {
      return state.filter(tl => tl.id !== action.id)
    }
    default:
      return [...state]
  }
};
export const cityWeatherAction = {
  addWeatherCityAC: (cityInfo: CityType) => ({
    type: ADD_WEATHER_CITY, cityInfo
  }),
  removeSearchCityAC: (id: number) => ({
    type: REMOVE_WEATHER_CITY, id
  })
}
export const getWeatherTC = (currentCity: string) => (
  dispatch: Dispatch) => {
  weatherAPI.getWeather(currentCity)
    .then((city) => {
      dispatch(cityWeatherAction.addWeatherCityAC(city))
      dispatch(appAction.setAppStatus('success'));
      dispatch(appAction.setAppError(''))
    })
    .catch((error) => {
        dispatch(appAction.setAppError(error.message))
        dispatch(appAction.setAppStatus('unsuccessful'));
      }
    )
};
