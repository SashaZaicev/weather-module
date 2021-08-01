import React, {
  FC, FormEvent,
  useCallback,
} from 'react';
import style from './searchSection.module.scss'
import {useDispatch} from "react-redux";
import {getWeatherTC} from "../../../store/weatherReducer/weatherReducer";
import {Button, CircularProgress, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useTypedSelector} from "../../../store/store";
import {selectorAppError, selectorRequestStatus} from "./selectors";
import {appAction} from "../../../store/appReducer/appReducer";

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

  const getWeather = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      dispatch(appAction.setAppStatus('loading'))
      event.preventDefault();
      const city = event.currentTarget.city.value
      dispatch(getWeatherTC(city))
      event.currentTarget.city.value = ''
    }, [dispatch])

  return (
    <div className={style.searchSection}>
      <form onSubmit={getWeather}>
        <TextField
          className={classes.root}
          InputProps={{className: classes.root}}
          id="outlined-basic"
          label="City"
          variant="outlined"
          name="city"
          placeholder="City"/>
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
        : <div className={style.error}>{error}</div>}
    </div>
  );
};
