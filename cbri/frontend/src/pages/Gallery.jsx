import React, { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const renderContent = () => {
    switch (activeTab) {
      case 'photos':
        return <div>📸 Displaying Photos here...</div>;
      case 'videos':
        return <div>🎥 Displaying Videos here...</div>;
      case 'events':
        return <div>📅 Displaying Events here...</div>;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>Gallery</h2>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('photos')}>Photos</button>
        <button onClick={() => setActiveTab('videos')}>Videos</button>
        <button onClick={() => setActiveTab('events')}>Events</button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Gallery;
