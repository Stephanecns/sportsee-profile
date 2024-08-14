//Gère la navigation verticale sur le côté gauche (avec les icônes représentant différentes activités comme la méditation, le vélo, etc.).
import React from 'react';
import './Sidebar.scss';
import meditationIcon from '../assets/meditation.png';
import swimmingIcon from '../assets/swimming.png';
import cyclingIcon from '../assets/cycling.png';
import weightliftingIcon from '../assets/weightlifting.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__icons">
        <img src={meditationIcon} alt="Méditation" className="sidebar__icon" />
        <img src={swimmingIcon} alt="Natation" className="sidebar__icon" />
        <img src={cyclingIcon} alt="Vélo" className="sidebar__icon" />
        <img src={weightliftingIcon} alt="Musculation" className="sidebar__icon" />
      </div>
      <div className="sidebar__copyright">
        Copiryght, SportSee 2020
      </div>
    </div>
  );
};

export default Sidebar;
