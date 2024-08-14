import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchUserAverageSessions } from '../services/api'; 
import './AverageSessionsChart.scss';

const AverageSessionChart = ({ userId }) => {
  const [sessionData, setSessionData] = useState([]);

  useEffect(() => {
    const getSessionData = async () => {
      try {
        const response = await fetchUserAverageSessions(userId);
        console.log("Fetched Session Data:", response);
        if (response && response.data && response.data.sessions) {
          setSessionData(response.data.sessions);
        }
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    };

    getSessionData();
  }, [userId]);

  // Custom Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="average-session-chart">
      <h2 className="average-session-chart__title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={sessionData}>
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionChart;
