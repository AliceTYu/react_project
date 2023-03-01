import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
        <img src="https://cdn-icons-png.flaticon.com/64/7678/7678144.png" />
        <h1>Лотос</h1>
    </header>
  );
};

export default Header;