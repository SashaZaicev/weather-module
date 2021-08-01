import React, {
  FC, FormEvent,
  useCallback,
} from 'react';
import style from './searchSection.module.scss'
import {useDispatch} from "react-redux";
import {getWeatherTC} from "../../../store/weatherReducer/weatherReducer";
import {Button, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

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
export const SearchSection: FC<SearchSectionPropsType> = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const getWeather = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const city = event.currentTarget.city.value
      dispatch(getWeatherTC(city))
      event.currentTarget.city.value = ''
    }, [])

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
    </div>
  );
};
