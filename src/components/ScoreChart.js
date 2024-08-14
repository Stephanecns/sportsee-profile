import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { fetchUserData } from '../services/api';
import './ScoreChart.scss';

const ScoreChart = ({ userId }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData(userId);
        setScore(data.score * 100); // Convertir le score en pourcentage
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
      }
    };

    getUserData();
  }, [userId]);

  const data = [
    {
      name: 'Score',
      value: score,
      fill: '#FF0000',
    },
  ];

  return (
    <div className="score-chart">
      <h2 className="score-chart__title">Score</h2>
      <ResponsiveContainer width="100%" height={153}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="100%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={90 + (360 * score) / 100} 
        >
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            cornerRadius={50 / 2}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="score-chart__percentage"
          >
            {`${score}%`}
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="score-chart__text"
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreChart;
