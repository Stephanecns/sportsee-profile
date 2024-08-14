 //Affiche un BarChart pour l'activité quotidienne (poids et calories brûlées).
 import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { fetchUserActivity } from '../services/api';
import './ActivityChart.scss';

const ActivityChart = ({ userId }) => {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const getActivityData = async () => {
      try {
        const response = await fetchUserActivity(userId);
        console.log("Fetched Activity Data:", response); 
        if (response && response.data && response.data.sessions) {
          setActivityData(response.data.sessions);
        }
      } catch (error) {
        console.error('Error fetching activity data:', error);
      }
    };

    getActivityData();
  }, [userId]);

  return (
    <div className="activity-chart">
      <h2 className="activity-chart__title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart 
          data={activityData} 
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }} 
          barSize={10} 
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis orientation="right" />
          <Tooltip />
          <Legend verticalAlign="top" align="right" iconType="circle" />
          <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
          <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
