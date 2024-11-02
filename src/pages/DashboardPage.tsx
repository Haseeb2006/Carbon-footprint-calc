import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import VideoUpload from '../components/VideoUpload';
import Summary from '../components/Summary';
import Quiz from '../components/Quiz';
import Notes from '../components/Notes';
import Analytics from '../components/Analytics';

const DashboardPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('upload');
  const [videoData, setVideoData] = useState(null);
  const [userVideos, setUserVideos] = useState([]);

  useEffect(() => {
    // Fetch user's videos from the backend
    const fetchUserVideos = async () => {
      try {
        const response = await fetch('/api/videos', {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setUserVideos(data.videos);
        }
      } catch (error) {
        console.error('Error fetching user videos:', error);
      }
    };

    fetchUserVideos();
  }, [user]);

  const handleVideoUpload = async (data) => {
    try {
      const response = await fetch('/api/videos/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const uploadedVideo = await response.json();
        setVideoData(uploadedVideo);
        setUserVideos([...userVideos, uploadedVideo]);
        setActiveTab('summary');
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome, {user.name}!</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex border-b">
          <TabButton label="Upload" active={activeTab === 'upload'} onClick={() => setActiveTab('upload')} />
          <TabButton label="Summary" active={activeTab === 'summary'} onClick={() => setActiveTab('summary')} />
          <TabButton label="Quiz" active={activeTab === 'quiz'} onClick={() => setActiveTab('quiz')} />
          <TabButton label="Notes" active={activeTab === 'notes'} onClick={() => setActiveTab('notes')} />
          <TabButton label="Analytics" active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} />
        </div>
        <div className="p-6">
          {activeTab === 'upload' && <VideoUpload onUpload={handleVideoUpload} />}
          {activeTab === 'summary' && <Summary videoData={videoData} />}
          {activeTab === 'quiz' && <Quiz videoData={videoData} />}
          {activeTab === 'notes' && <Notes videoData={videoData} />}
          {activeTab === 'analytics' && <Analytics videoData={videoData} />}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userVideos.map((video) => (
            <VideoCard key={video.id} video={video} onSelect={() => {
              setVideoData(video);
              setActiveTab('summary');
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ label, active, onClick }) => (
  <button
    className={`px-4 py-2 font-semibold ${
      active ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const VideoCard = ({ video, onSelect }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={onSelect}>
    <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
      <p className="text-gray-600 text-sm">{new Date(video.uploadDate).toLocaleDateString()}</p>
    </div>
  </div>
);

export default DashboardPage;