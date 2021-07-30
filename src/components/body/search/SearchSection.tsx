import React, {
  FC,
  useCallback
} from 'react';
import style from './searchSection.module.scss'
import {useDispatch} from "react-redux";
import {getWeatherTC} from "../../../store/weatherReducer/weatherReducer";

type SearchSectionPropsType = {

}

export const SearchSection: FC<SearchSectionPropsType> = ({}) => {
  const dispatch = useDispatch()

  const getWeather = useCallback(
    (event: any) => {
      event.preventDefault();
      const city = event.currentTarget.city.value
      dispatch(getWeatherTC(city))
    }, [])

  return (
    <div className={style.searchSection}>
      <form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="City"/>
        <button>Check weather</button>
      </form>
    </div>
  );
};
