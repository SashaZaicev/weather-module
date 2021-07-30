import {FC} from 'react';
import style from './infoCity.module.scss'

type InfoCityPropsType = {
  city: any
}
export const InfoCity: FC<InfoCityPropsType> = ({city}) => {

  const nameCity = city.name
  const sysCountry = city.sys.country
  const tempCity = city.main.temp
  const tempMin = city.main.temp_min
  const tempMax = city.main.temp_max
  const windSpeed = city.wind.speed

  const weatherDescription = city.weather.map((weatherEl: any) => {
    const icon = "http://openweathermap.org/img/w/" + weatherEl.icon + ".png"
    return <div className={style.description}><span>{weatherEl.description}</span>
      <img src={icon} alt="icon weather"/></div>
  })
  return (
    <div className={style.infoCityContainer}>
      <div> {nameCity},{sysCountry}</div>
      <div>{weatherDescription}</div>
      <div>Temperature : {tempCity} &#8451;</div>
      <div>Wind speed: {windSpeed} m/s</div>
      <div>Temp(min/max): ({tempMin}/{tempMax})&#8451;</div>
    </div>
  );
};
