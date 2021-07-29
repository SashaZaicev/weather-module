import {FC} from 'react';
import style from './bodyContainer.module.scss'
import {SearchSection} from "./search";

export const BodyContainer: FC<any> = ({}) => {
  return (
    <div className={style.bodyContainer}>
      <SearchSection />
    </div>
  );
};
