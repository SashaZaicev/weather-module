import {FC} from 'react';
import style from './autorSectionContainer.module.scss'

type AutorSectionPropsType = {}

export const AutorSection: FC<AutorSectionPropsType> = ({}) => {
  return (
    <div className={style.autorSectionContainer}>
      <p>© 2021 Aleksandr Zaytsev</p>
    </div>
  );
};
