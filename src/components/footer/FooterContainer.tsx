import {FC} from 'react';
import {AuthorSection} from "./autor";
import style from './footerContainer.module.scss'

type FooterContainerPropsType = {}

export const FooterContainer: FC<FooterContainerPropsType> = () => {
  return (
    <div className={style.footerContainer}>
      <AuthorSection/>
    </div>
  );
};
