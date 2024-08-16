//permet de séparer la logique de récupération des données du reste de votre application. Plutôt que d'avoir des appels fetch dispersés dans vos composants React, vous centralisez ces appels dans un service, ce qui rend votre code plus organisé et plus facile à maintenir.
// src/services/api.js

// src/services/api.js
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from '../services/mockData.js'; // Importer les données mockées

const API_URL = 'http://localhost:3000'; // URL de base de votre API

// Fonction de standardisation des données utilisateur
const standardizeUserData = (data) => {
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
    return standardizeUserData(rawData.data); // Standardisation avant de retourner les données
  } catch (error) {
    console.error('Error fetching user data from API:', error);
    // Utilisation des données mockées en cas de défaillance de l'API
    const mockData = USER_MAIN_DATA.find(user => user.id === userId);
    if (mockData) {
      return standardizeUserData(mockData);
    } else {
      throw new Error('Mock data not found');
    }
  }
};

// Récupérer les activités quotidiennes d'un utilisateur
export const fetchUserActivity = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error('Failed to fetch user activity');
    }
    const rawData = await response.json();
    return rawData.data; // Retourne les données de l'API
  } catch (error) {
    console.error('Error fetching user activity from API:', error);
    // Utilisation des données mockées en cas de défaillance de l'API
    const mockData = USER_ACTIVITY.find(activity => activity.userId === userId);
    if (mockData) {
      return { data: mockData };
    } else {
      throw new Error('Mock activity data not found');
    }
  }
};

// Récupérer les sessions moyennes d'un utilisateur
export const fetchUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error('Failed to fetch user average sessions');
    }
    const rawData = await response.json();
    return rawData.data; // Retourne les données de l'API
  } catch (error) {
    console.error('Error fetching user average sessions from API:', error);
    // Utilisation des données mockées en cas de défaillance de l'API
    const mockData = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
    if (mockData) {
      return { data: mockData };
    } else {
      throw new Error('Mock average sessions data not found');
    }
  }
};

// Récupérer les performances d'un utilisateur
export const fetchUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error('Failed to fetch user performance');
    }
    const rawData = await response.json();
    return rawData.data; // Retourne les données de l'API
  } catch (error) {
    console.error('Error fetching user performance from API:', error);
    // Utilisation des données mockées en cas de défaillance de l'API
    const mockData = USER_PERFORMANCE.find(performance => performance.userId === userId);
    if (mockData) {
      return { data: mockData };
    } else {
      throw new Error('Mock performance data not found');
    }
  }
};
