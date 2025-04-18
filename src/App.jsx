import React from 'react';
import Compiler from './components/MiniApps/Compiler';
import SongZone from './components/MiniApps/SongZone';
import LinguaLearn from './components/MiniApps/LinguaLearn';

const App = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-100 to-blue-100">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">🌟 DreamForge Mini</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Compiler />
        <SongZone />
        <LinguaLearn />
      </div>
    </div>
  );
};

export default App;
