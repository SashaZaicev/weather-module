import {FC, useCallback, useEffect, useState} from 'react';
import style from "./resultSection.module.scss";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../store/store";
import {InfoCity} from "./infoCity";
import {cityWeatherAction} from "../../../store/weatherReducer/weatherReducer";
import {CityType} from "../../../store/types";
import {selectorRequestCities} from "./selectors";

type ResultSectionPropsType = {}

export const ResultSection: FC<ResultSectionPropsType> = () => {
  const dispatch = useDispatch()
  const weatherCity = useTypedSelector<Array<CityType>>(selectorRequestCities)

  const [nameCity, setNameCity] = useState<Array<CityType>>(
    localStorage['weatherCity']
      ? JSON.parse(localStorage['weatherCity']) || []
      : []
  )

  const removeSearchCity = useCallback(function (id: number) {
    const action = cityWeatherAction.removeSearchCityAC(id)
    dispatch(action)
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('weatherCity', JSON.stringify(weatherCity))
    setNameCity(weatherCity)
  }, [weatherCity])

  const result = nameCity && nameCity.map((city: CityType, index: number) =>
    <InfoCity
      removeSearchCity={removeSearchCity}
      city={city}
      key={index + city.name}
    />
  );

  return (
    <div className={style.resultSection}>
      {result}
    </div>
  );
};
