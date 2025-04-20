import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome ${user.displayName}!`);
    } catch (error) {
      alert('Login Failed 😢');
      console.error(error);
    }
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4">Login to DreamForge</h2>
      <button
        onClick={loginWithGoogle}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
