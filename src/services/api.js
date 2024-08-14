//permet de séparer la logique de récupération des données du reste de votre application. Plutôt que d'avoir des appels fetch dispersés dans vos composants React, vous centralisez ces appels dans un service, ce qui rend votre code plus organisé et plus facile à maintenir.
// src/services/api.js

const API_URL = 'http://localhost:3000'; // URL API

// Fonction de standardisation des données utilisateur
const standardizeUserData = (responseData) => {
  const data = responseData.data; // Accédez aux données encapsulées
  return {
    id: data.id,
    firstName: data.userInfos.firstName,
    lastName: data.userInfos.lastName,
    age: data.userInfos.age,
    score: data.todayScore || data.score, // Gestion des différences de nom de propriété
    keyData: data.keyData,
  };
};

// Récupérer les informations générales d'un utilisateur
export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const rawData = await response.json();
    console.log('Raw data:', rawData);
    return standardizeUserData(rawData); // Standardisation avant de retourner les données
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Récupérer les activités quotidiennes d'un utilisateur
export const fetchUserActivity = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error('Failed to fetch user activity');
    }
    return await response.json(); // Ajouter une standardisation ici si nécessaire
  } catch (error) {
    console.error('Error fetching user activity:', error);
    throw error;
  }
};

// Récupérer les sessions moyennes d'un utilisateur
export const fetchUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error('Failed to fetch user average sessions');
    }
    return await response.json(); // Ajouter une standardisation ici si nécessaire
  } catch (error) {
    console.error('Error fetching user average sessions:', error);
    throw error;
  }
};

// Récupérer les performances d'un utilisateur
export const fetchUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error('Failed to fetch user performance');
    }
    return await response.json(); // Ajouter une standardisation ici si nécessaire
  } catch (error) {
    console.error('Error fetching user performance:', error);
    throw error;
  }
};
