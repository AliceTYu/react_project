import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../img/logo_1.png'
import Ava from '../common/Ava/Ava';

const Header = (props) => {
  return (
    <header className={s.header}>
        <div className={s.headerLogo}>
          <img src={logo} />
          <h1>Лотос</h1>
        </div>

        <div className={s.loginBlock}>
          {props.isAuth ? props.login
             : <NavLink to={'/login'} className={navData => navData.isActive ? s.active : s.loginBlock}>Login</NavLink> }
        </div>
    </header>
  );
};

export default Header;