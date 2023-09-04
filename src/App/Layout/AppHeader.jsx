import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';
import Vector from '../Images/Vector.svg';
import test from '../Images/test.svg';
import cogwheel from '../Images/setting.svg';
import photo from '../Images/MC50.jpg';

export function AppHeader() {
  return (
    <header>
      {/* <img src={Logo} className="logo" alt="" /> */}
      <div className="left">
        <Link to="/">
          <img src={test} alt="" srcSet="" />
        </Link>
      </div>
      <div className="right">
        <button
          className="settings"
          onClick={() => {
            console.log('Clicked cogwheel');
          }}
        >
          {' '}
          <img src={cogwheel} alt="" className="cogwheel" />{' '}
        </button>
        <div className="profile-picture">
          <div className="placeholder" style={{ backgroundImage: `url(${photo})` }}></div>
        </div>
        <div className="user-details">
          <p>Michał</p>
          <p>kursant</p>
        </div>
        <button className='dropdown-menu' onClick={() => {
            console.log('Clicked setting');
          }}>
          <img src={Vector} className="arrow" alt="" />
        </button>
      </div>
    </header>
  );
}
