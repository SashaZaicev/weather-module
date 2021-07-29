import React from 'react';
import {AutorSection} from "./autor";
import style from './footerContainer.module.scss'

export const FooterContainer = () => {
  return (
    <div className={style.footerContainer}>
      <AutorSection/>
    </div>
  );
};
