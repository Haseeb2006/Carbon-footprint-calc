import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const VideoUpload = ({ onUpload }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    // In a real application, you would upload the file to a server here
    // For this example, we'll simulate processing with a timeout
    setTimeout(() => {
      onUpload({
        title: file.name,
        duration: '10:00', // Simulated duration
        size: file.size,
      });
    }, 1500);
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center ${
        dragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload className="mx-auto text-gray-400" size={48} />
      <h2 className="mt-4 text-xl font-semibold">Upload Educational Video</h2>
      <p className="mt-2 text-gray-500">Drag and drop your video file here, or click to select</p>
      <input
        type="file"
        className="hidden"
        onChange={handleFileInput}
        accept="video/*"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
      >
        Select File
      </label>
    </div>
  );
};

export default VideoUpload;