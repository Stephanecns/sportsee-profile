import React from 'react';
import Navbar from './components/navBar.js';
import Sidebar from './components/sideBar.js'; 
import UserProfileHeader from './components/UserProfileHeader';
import ActivityChart from './components/ActivityChart';
import AverageSessionChart from './components/AverageSessionsChart';
import PerformanceRadarChart from './components/PerformanceRadarChart';
import ScoreChart from './components/ScoreChart';
import KeyData from './components/KeyDataCard.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App__layout">
        <Sidebar className="App__sidebar" />
        <main className="App__main">
          <UserProfileHeader userId={12} /> 
          <ActivityChart userId={12} />
          <div className="App__charts-container">
            <div className="chart-container">
              <AverageSessionChart userId={12} />
            </div>
            <div className="chart-container">
              <PerformanceRadarChart userId={12} />
            </div>
            <div className="chart-container">
              <ScoreChart userId={12} />
            </div>
          </div>
        </main>
        <KeyData userId={12} className="App__key-data" />
      </div>
    </div>
  );
}

export default App;
