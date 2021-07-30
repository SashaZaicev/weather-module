import {Dispatch} from "redux";
import {weatherAPI} from "../../api/api";

const ADD_WEATHER_CITY = 'ADD-WEATHER-CITY'

const initialState: Array<any> = []
export type InitStateType = typeof initialState;
export type StartTableType = ReturnType<typeof actionWeatherApp.addWeatherCityAC>;
export type ActionsType = StartTableType;

export const weatherReducer = (state = initialState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case ADD_WEATHER_CITY: {
      return [{...action.cityInfo}, ...state]
    }
    default:
      return [...state]
  }
};
export const actionWeatherApp = {
  addWeatherCityAC: (cityInfo: any) => ({
    type: ADD_WEATHER_CITY, cityInfo
  } as const),
}
export const getWeatherTC = (currentCity: string) => (
  dispatch: Dispatch) => {
  weatherAPI.getWeather(currentCity)
    .then((res) => {
      console.log(res)
      dispatch(actionWeatherApp.addWeatherCityAC(res))
    })
}
