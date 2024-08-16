// src/services/api.js
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from '../services/mockData'; // Importer les données mockées

const API_URL = 'http://localhost:3000'; // URL de base de votre API

// Fonction de standardisation des données utilisateur
const standardizeUserData = (data) => {
  return {
    id: data.id,
    firstName: data.userInfos.firstName,
    lastName: data.userInfos.lastName,
    age: data.userInfos.age,
    score: data.todayScore || data.score,
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
    return standardizeUserData(rawData.data); // Accès aux données via .data
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Utiliser les données mockées en cas d'échec
    const mockData = USER_MAIN_DATA.find(user => user.id === userId);
    return standardizeUserData(mockData);
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
    return rawData.data.sessions; // Accès aux données via .data
  } catch (error) {
    console.error('Error fetching user activity:', error);
    // Utiliser les données mockées en cas d'échec
    const mockData = USER_ACTIVITY.find(activity => activity.userId === userId);
    return mockData.sessions;
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
    return rawData.data.sessions; // Accès aux données via .data
  } catch (error) {
    console.error('Error fetching user average sessions:', error);
    // Utiliser les données mockées en cas d'échec
    const mockData = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
    return mockData.sessions;
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
    return rawData.data; // Accès aux données via .data
  } catch (error) {
    console.error('Error fetching user performance:', error);
    // Utiliser les données mockées en cas d'échec
    const mockData = USER_PERFORMANCE.find(performance => performance.userId === userId);
    return {
      kind: mockData.kind,
      data: mockData.data
    };
  }
};
