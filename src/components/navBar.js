//Gère la navigation en haut de la page (Accueil, Profil, Réglage, Communauté).

import React from 'react';
import './Navbar.scss';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="SportSee Logo" className="navbar__logo" />
      <ul className="navbar__menu">
        <li className="navbar__menu-item">Accueil</li>
        <li className="navbar__menu-item">Profil</li>
        <li className="navbar__menu-item">Réglage</li>
        <li className="navbar__menu-item">Communauté</li>
      </ul>
    </nav>
  );
};

export default Navbar;
