import React from 'react';

const LinguaLearn = () => {
  const words = [
    { word: "Serendipity", meaning: "Unexpected good luck" },
    { word: "Eloquent", meaning: "Fluent or persuasive speaking" },
    { word: "Solitude", meaning: "The state of being alone" },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">📚 LinguaLearn</h2>
      <ul className="list-disc pl-5">
        {words.map((w, i) => (
          <li key={i}>
            <strong>{w.word}</strong>: {w.meaning}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinguaLearn;
