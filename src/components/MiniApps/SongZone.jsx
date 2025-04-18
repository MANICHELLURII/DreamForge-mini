import React from 'react';

const SongZone = () => {
  const songs = ["Focus Beats", "Lo-fi Chill", "Rain Sounds", "Night Study"];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">🎵 SongZone</h2>
      <ul className="list-disc pl-5">
        {songs.map((song, i) => (
          <li key={i}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongZone;
