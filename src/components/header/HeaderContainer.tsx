import {FC} from 'react';
import style from './header.module.scss'

type HeaderContainerPropsType = {}

export const HeaderContainer: FC<HeaderContainerPropsType> = () => {
  return (
    <div className={style.headerContainer}>
      <h3>Welcome to weather module</h3>
    </div>
  );
};
