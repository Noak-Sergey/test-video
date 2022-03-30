import React from 'react';
import s from "./StartPage.module.css";
import { ModalWindow } from './ModalWindow';


export const StartPage = () => {
    
    
    return(
        <div className={s.startPage_conteiner}>
            <div className={s.startPage_playIcon}>
            <ModalWindow/>
            </div>
        </div>
    )
}