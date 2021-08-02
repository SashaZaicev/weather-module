import React, {
  ChangeEvent,
  FC, FormEvent,
  useCallback, useEffect, useState,
} from 'react';
import style from './searchSection.module.scss'
import {useDispatch} from "react-redux";
import {
  getWeatherTC,
  showWeatherTC
} from "../../../store/weatherReducer/weatherReducer";
import {Button, CircularProgress, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useTypedSelector} from "../../../store/store";
import {selectorAppError, selectorRequestStatus} from "./selectors";
import {appAction} from "../../../store/appReducer/appReducer";
import {selectorRequestCity} from "../result/selectors";
import {OneCity} from "../../../store/types";

type SearchSectionPropsType = {}
const useStyles = makeStyles({
  main: {
    borderRadius: `0 45px 45px 0`
  },
  root: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3f51b5"
    },
  }
})
export const SearchSection: FC<SearchSectionPropsType> = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const status = useTypedSelector(selectorRequestStatus)
  const error = useTypedSelector(selectorAppError)
  const standCity = useTypedSelector(selectorRequestCity)
  const [sendName, setSendName] = useState('')
  const [name, setName] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  const getWeather = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      dispatch(appAction.setAppStatus('loading'))
      event.preventDefault();
      const city = event.currentTarget.city.value
      dispatch(getWeatherTC(city))
      event.currentTarget.city.value = ''
    }, [dispatch])

  useEffect(() => {
    console.log(standCity)
    if (error || standCity) {
      setIsFetching(false)
      if (name !== sendName) {
        setIsFetching(true)
        setSendName(name)
        dispatch(appAction.setAppStatus('loading'))
        dispatch(showWeatherTC(name))
      }
    }
  }, [standCity, error, name, sendName])

  const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setName(e.currentTarget.value)
    if (!isFetching) {
      setIsFetching(true)
      setSendName(e.currentTarget.value)
      dispatch(appAction.setAppStatus('loading'))
      dispatch(showWeatherTC(e.currentTarget.value))
    }
  }
  const weatherDescription = standCity && standCity.weather.map
  ((weatherEl: OneCity, index: number) => {
    const icon = "http://openweathermap.org/img/w/" + weatherEl.icon + ".png"
    return <div key={index} className={style.description}>
      <img src={icon} alt="icon weather"/></div>
  })
  return (
    <div className={style.searchSection}>
      {standCity && <div
        className={style.moduleWeather}>
        {standCity.main.temp} &#8451;
        {weatherDescription}</div>}
      <form onSubmit={getWeather}>
        <TextField
          className={classes.root}
          InputProps={{className: classes.root}}
          id="outlined-basic"
          label="City"
          variant="outlined"
          name="city"
          placeholder="City"
          onChange={onChange}
        />
        <Button className={classes.main}
                type='submit'
                variant="contained"
                color="primary">
          Check weather
        </Button>
      </form>
      {status === 'loading' ?
        <div className={style.preloader}>
          <CircularProgress color="secondary"/>
        </div>
        : <div className={style.error}>{error}</div>
      }

    </div>
  );
};
