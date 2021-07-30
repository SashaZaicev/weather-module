import {FC} from 'react';
import {AutorSection} from "./autor";
import style from './footerContainer.module.scss'

type FooterContainerPropsType = {}

export const FooterContainer: FC<FooterContainerPropsType> = () => {
  return (
    <div className={style.footerContainer}>
      <AutorSection/>
    </div>
  );
};
