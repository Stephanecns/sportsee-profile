import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../services/api';
import './KeyDataCard.scss';
import caloriesIcon from '../assets/calories-icon.png';
import proteinIcon from '../assets/protein-icon.png';
import carbsIcon from '../assets/carbs-icon.png';
import fatIcon from '../assets/fat-icon.png';

const KeyData = ({ userId }) => {
  const [keyData, setKeyData] = useState({});

  useEffect(() => {
        // Fonction asynchrone pour récupérer les données utilisateur
    const getUserData = async () => {
      try {
        const data = await fetchUserData(userId);
        setKeyData(data.keyData);
      } catch (error) {
        // Gestion des erreurs potentielles lors de la récupération des données
        console.error('Error fetching key data:', error);
      }
    };

    getUserData();
  }, [userId]);

  return (
    <div className="key-data">
      <div className="key-data__card">
        <img src={caloriesIcon} alt="Calories icon" />
        <div>
          <p className="key-data__value">{keyData.calorieCount}kCal</p>
          <p className="key-data__label">Calories</p>
        </div>
      </div>
      <div className="key-data__card">
        <img src={proteinIcon} alt="Proteins icon" />
        <div>
          <p className="key-data__value">{keyData.proteinCount}g</p>
          <p className="key-data__label">Proteines</p>
        </div>
      </div>
      <div className="key-data__card">
        <img src={carbsIcon} alt="Carbs icon" />
        <div>
          <p className="key-data__value">{keyData.carbohydrateCount}g</p>
          <p className="key-data__label">Glucides</p>
        </div>
      </div>
      <div className="key-data__card">
        <img src={fatIcon} alt="Lipids icon" />
        <div>
          <p className="key-data__value">{keyData.lipidCount}g</p>
          <p className="key-data__label">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default KeyData;
