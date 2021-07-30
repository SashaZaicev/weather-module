import {FC} from 'react';
import style from "./resultSection.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {InfoCity} from "./infoCity";

type ResultSectionPropsType = {}

export const ResultSection: FC<ResultSectionPropsType> = () => {
  const weatherCity = useSelector<AppRootStateType, Array<any>>((state) => state.weatherPage)
  const result = weatherCity.map((city, index) => <InfoCity city={city}
                                                            key={index + city.name}/>)

  return (
    <div className={style.resultSection}>
      {result}
    </div>
  );
};
