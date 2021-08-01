import {FC} from 'react';
import style from './autorSectionContainer.module.scss'

type AuthorSectionPropsType = {}

export const AuthorSection: FC<AuthorSectionPropsType> = () => {
  return (
    <div className={style.authorSectionContainer}>
      <p>© 2021 Aleksandr Zaytsev</p>
    </div>
  );
};
