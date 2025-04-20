import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Compiler from './components/MiniApps/Compiler';
import SongZone from './components/MiniApps/SongZone';
import LinguaLearn from './components/MiniApps/LinguaLearn';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
  }, []);

  if (!user) return <Login />;

  return (
    <div className="p-6 bg-gradient-to-br from-violet-100 to-indigo-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-800">🌟 Welcome, {user.displayName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Compiler />
        <SongZone />
        <LinguaLearn />
      </div>
    </div>
  );
}

export default App;
