//Affiche le message de bienvenue et le prénom de l'utilisateur (par exemple, "Bonjour Thomas").

import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../services/api'; 
import './UserProfileHeader.scss';

const UserProfileHeader = ({ userId }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData(userId); // Appel API pour obtenir les données utilisateur
        console.log('Données utilisateur:', data);
        setUserName(data.firstName);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
      }
    };

    getUserData();
  }, [userId]);

  return (
    <div className="user-profile-header">
      <h1 className="user-profile-header__greeting">Bonjour <span>{userName}</span></h1>
      <p className="user-profile-header__message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default UserProfileHeader;
