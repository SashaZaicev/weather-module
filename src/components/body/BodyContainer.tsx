import {FC} from 'react';
import style from './bodyContainer.module.scss'
import {SearchSection} from "./search";
import {ResultSection} from "./result";

type BodyContainerPropsType = {

}

export const BodyContainer: FC<BodyContainerPropsType> = () => {

  return (
    <div className={style.bodyContainer}>
      <SearchSection />
      <ResultSection/>
    </div>
  );
};
