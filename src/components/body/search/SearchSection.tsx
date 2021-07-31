import React, {
  FC,
  useCallback,
} from 'react';
import style from './searchSection.module.scss'
import {useDispatch} from "react-redux";
import {getWeatherTC} from "../../../store/weatherReducer/weatherReducer";
import {Button, TextField} from "@material-ui/core";

type SearchSectionPropsType = {}

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
        <TextField id="outlined-basic" label="City"
                   variant="outlined" name="city" placeholder="City"/>
        <Button type='submit' variant="contained" color="primary">
          Check weather
        </Button>
      </form>
    </div>
  );
};
