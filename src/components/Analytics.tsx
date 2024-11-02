import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = ({ videoData }) => {
  // In a real application, you would fetch analytics data from a backend service
  const data = [
    { name: 'Video Views', value: 150 },
    { name: 'Quiz Attempts', value: 75 },
    { name: 'Avg. Quiz Score', value: 85 },
    { name: 'Notes Downloads', value: 60 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Performance Analytics</h2>
      {videoData ? (
        <div>
          <h3 className="text-xl font-semibold mb-2">{videoData.title}</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <p>Please upload a video to view analytics.</p>
      )}
    </div>
  );
};

export default Analytics;