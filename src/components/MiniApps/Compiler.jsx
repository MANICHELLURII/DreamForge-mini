import React, { useState } from 'react';

const Compiler = () => {
  const [code, setCode] = useState('// Start typing code...');

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">🧠 Compiler</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-40 p-2 border border-gray-300 rounded"
      />
      <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Run
      </button>
    </div>
  );
};

export default Compiler;
