import {FC, useCallback, useEffect, useState} from 'react';
import style from "./resultSection.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {InfoCity} from "./infoCity";
import {actionWeatherApp} from "../../../store/weatherReducer/weatherReducer";

type ResultSectionPropsType = {}

export const ResultSection: FC<ResultSectionPropsType> = () => {
  const dispatch = useDispatch()
  const weatherCity = useSelector<AppRootStateType, Array<any>>((state) => state.weatherPage)
  const [nameCity, setNameCity] = useState<any>(localStorage['weatherCity'] ? JSON.parse(localStorage['weatherCity']) || [] : [])
  const removeSearchCity = useCallback(function (id: string) {
    const action = actionWeatherApp.removeSearchCityAC(id)
    dispatch(action)
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('weatherCity', JSON.stringify(weatherCity))
    setNameCity(weatherCity)
  }, [weatherCity])

  const result = nameCity && nameCity.map((city: any, index: number) =>
    <InfoCity
      removeSearchCity={removeSearchCity} city={city}
      key={index + city.name}/>);

  return (
    <div className={style.resultSection}>
      {result}
    </div>
  );
};
