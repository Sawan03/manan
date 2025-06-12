import React from 'react';
import './resources.css'; // Import the CSS file for styles

// Main Resources component
function Resources() {
  // Data for the resource cards, matching the image content
  const resourcesData = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/jerrick/image/upload/c_fill,d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,h_375,pg_1,q_auto,w_625/6849df4dbe8316001d12ed74.jpg',
      title: 'Vocal Bonus Leaderboard: 06/11/2025',
      date: '06/11/2025',
      description: "Welcome to our weekly Leaderboard update! We're delighted to highlight Vocal's most popular stories. Join us as we recognize this week's standout contributors...",
      author: 'Vocal Team',
      authorAvatar: 'https://placehold.co/100x100/A0A0A0/FFFFFF?text=VT',
      timeAgo: 'about 16 hours ago in Resources',
      extraContent: '123 Comments'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/jerrick/image/upload/c_fill,d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,h_375,pg_1,q_auto,w_625/6841e84d5ecafa001de523a8.jpg',
      title: 'I Resign From... Challenge Winners',
      date: '06/05/2025',
      description: "Some roles you take on. Others get handed to you. Quietly Without a conversation. This challenge was about saying you're done. With being the strong one...",
      author: 'Vocal Curation Team',
      authorAvatar: 'https://placehold.co/100x100/A0A0A0/FFFFFF?text=VC',
      timeAgo: '6 days ago in Resources',
      overlayTopLeft: 'Raise Your Voice'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/jerrick/image/upload/c_fill,d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,h_375,pg_1,q_auto,w_625/6841bb60d15151001d7dafa2.jpg',
      title: 'Raise Your Voice Thread: 06/05/2025',
      description: 'Our "Raise Your Voice Threads are hosted most alternating Thursdays at 12PM ET to offer creators more avenues to uncover exceptional stories on Vocal. As...',
      author: 'Raise Your Voice by Vocal',
      authorAvatar: 'https://placehold.co/100x100/A0A0A0/FFFFFF?text=RV',
      timeAgo: '7 days ago in Resources',
      overlayTopRight: 'Thursdays @ 12PM ET'
    },
  ];

  // Helper component for individual resource cards
  const ResourceCard = ({ resource }) => (
    <div className="resource-card">
      <div className="resource-card-image" style={{ backgroundImage: `url(${resource.image})` }}>
        {/* Render overlay text if present */}
        {resource.overlayTopLeft && (
          <span className="image-overlay-text overlay-top-left">{resource.overlayTopLeft}</span>
        )}
        {resource.overlayTopRight && (
          <span className="image-overlay-text overlay-top-right">{resource.overlayTopRight}</span>
        )}
        {/* If no image, display default text */}
        {!resource.image && <span>No Image</span>}
      </div>
      <div className="resource-card-content">
        <h3 className="resource-card-title">{resource.title}</h3>
        <p className="resource-card-date">{resource.date}</p>
        <p className="resource-card-description">{resource.description}</p>
        <div className="resource-card-footer">
          <div className="resource-card-author-info">
            <img
              src={resource.authorAvatar}
              alt={resource.author}
              className="resource-card-author-avatar"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/A0A0A0/FFFFFF?text=Author'; }}
            />
            <span className="resource-card-author">{resource.author}</span>
          </div>
          <span className="resource-card-time">{resource.timeAgo}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Embedded CSS for custom global styles and responsive grid adjustments.
          This replaces the separate resources.css file. */}
      

      <div className="resources-page-container">
        {/* Header Section */}
        <div className="resources-header">
  <div className="resources-header-left">
    <h1 className="resources-title">Resources</h1>
  </div>
 
</div>


        {/* Subtitle */}
        <p className="resources-subtitle">
          Discover tips, guides, updates, and spotlights from our team.
        </p>

        {/* Grid for Resource Cards */}
        <div className="grid-container-resources">
          {resourcesData.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Resources;
