import React from 'react';

const Notes = ({ videoData }) => {
  // In a real application, you would fetch notes from an AI service
  const notes = [
    "• Key point 1: Lorem ipsum dolor sit amet",
    "• Key point 2: Consectetur adipiscing elit",
    "• Key point 3: Sed do eiusmod tempor incididunt",
    "• Key point 4: Ut labore et dolore magna aliqua",
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lecture Notes</h2>
      {videoData ? (
        <div>
          <h3 className="text-xl font-semibold mb-2">{videoData.title}</h3>
          <div className="bg-gray-100 p-4 rounded">
            {notes.map((note, index) => (
              <p key={index} className="mb-2">{note}</p>
            ))}
          </div>
        </div>
      ) : (
        <p>Please upload a video to generate lecture notes.</p>
      )}
    </div>
  );
};

export default Notes;