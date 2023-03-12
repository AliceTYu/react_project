import React from 'react';
import s from './Ava.module.css';
import image from '../../../img/ava_1.jpg';

const Ava = () => {
    return (
        <div className={s.avaBlock}>
            <img src={image} alt="error" />
        </div>
    );
};

export default Ava;