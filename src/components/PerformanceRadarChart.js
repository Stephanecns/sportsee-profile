import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { fetchUserPerformance } from '../services/api';
import './PerformanceRadarChart.scss';

const PerformanceRadarChart = ({ userId }) => {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    const getPerformanceData = async () => {
      try {
        const response = await fetchUserPerformance(userId);
        console.log("Fetched Performance Data:", response);
        if (response && response.data && response.data.kind && response.data.data) {
          const formattedData = response.data.data.map(item => ({
            value: item.value,
            kind: response.data.kind[item.kind]
          }));
          setPerformanceData(formattedData);
        }
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    getPerformanceData();
  }, [userId]);

  return (
    <div className="performance-radar-chart">
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" stroke="#fff" />
          <Radar name="Performance" dataKey="value" stroke="rgba(255, 1, 1, 0.70)" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceRadarChart;
