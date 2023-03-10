import React from 'react';
import preloader from '../../../img/loading.gif';
import s from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={s.image}>
            <img src={preloader} />
        </div>
    );
};

export default Preloader;