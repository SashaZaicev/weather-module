import React, {FC, useCallback} from 'react';
import style from './infoCity.module.scss';
import {Delete} from '@material-ui/icons';
import {IconButton} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import {CityType, OneCity} from "../../../../store/types";


const useStyles = makeStyles({
  main: {
    color: `#e96e50`,
  }
})

type InfoCityPropsType = {
  city: CityType,
  removeSearchCity: (cityId: number) => void
}

export const InfoCity: FC<InfoCityPropsType> = React.memo(({
                                                             city,
                                                             removeSearchCity
                                                           }) => {

  const classes = useStyles();
  const nameCity = city.name;
  const sysCountry = city.sys.country;
  const tempCity = city.main.temp;
  const tempMin = city.main.temp_min;
  const tempMax = city.main.temp_max;
  const windSpeed = city.wind.speed;

  const removeCity = useCallback(() => {
    removeSearchCity(city.id)
  }, []);
  const weatherDescription = city.weather.map
  ((weatherEl: OneCity, index: number) => {
    const icon = "http://openweathermap.org/img/w/" + weatherEl.icon + ".png"
    return <div key={index} className={style.description}>
      <span>{weatherEl.description}</span>
      <img src={icon} alt="icon weather"/></div>
  })

  return (
    <div className={style.infoCityContainer}>
      <div className={style.firstRow}> {nameCity},{sysCountry}
        <IconButton
          className={classes.main} style={{
          "padding": "0"
        }} onClick={removeCity}
        >
          <Delete style={{
            "width": "20px",
            "height": "20px"
          }}
          />
        </IconButton>
      </div>
      <div>{weatherDescription}</div>
      <div>Temperature : {tempCity} &#8451;</div>
      <div>Wind speed: {windSpeed} m/s</div>
      <div>Temp(min/max): ({tempMin}/{tempMax}) &#8451;</div>
    </div>
  );
});
