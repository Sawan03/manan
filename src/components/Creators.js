import React from 'react';
import './creators.css'; // Import the CSS file for styling
// Assuming creators.css is linked in the main HTML file (e.g., index.html)
// <link rel="stylesheet" href="creators.css">

// Main App component
function App() {
  // Data for the creators, matching the image content
  const creators = [
    { name: 'Michelle Liew', stories: 816, image: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/65649c0357d945001d89175c.jpg' },
    { name: 'Nerissha Hunt', stories: 78, image: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/6462cdaa4dab5d001dd4f045.jpg' },
    { name: 'Clyde E. Dawkins', stories: 1706, image: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/67936087a108d3001d27ad1c.jpg' },
    { name: 'Isla Griswald', stories: 55, image: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/669f1b4194244a001d471efe.jpg' },
    { name: 'Violet P. Davies', stories: 78, image: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/rlgavlne9ticzqnevm0a.jpg' },
    { name: 'The Kind Quill', stories: 243, image: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/66fb4a9bc6573b001d18eec2.jpg' },
    { name: 'Conor Matthews', stories: 177, image: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/662fe4c740667d001d556586.jpg' },
    { name: 'Rick Henry Christopher', stories: 323, image: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/67b3f934bb2edb001d84c646.jpg' },
    { name: 'KC', stories: 69, image: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/63d76758d25946001d5808f6.png' },
    { name: 'Henrik Hageland', stories: 95, image: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/66fbccffc55baf001ce0ea02.jpg' },
    { name: 'Ikechukwu Modungwo', stories: 65, isSage: true }, // Special entry for the "sage" logo
    { name: 'MikMacMeerkat', stories: 25, image: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/629469b71060f3001dce578b.jpg' },
  ];

  // Helper component for individual creator cards
  // It receives creator details as props
  const CreatorCard = ({ name, stories, image, isSage }) => (
    <div className="creator-card">
      {/* Conditional rendering for 'sage' logo or standard image */}
      {isSage ? (
        // Renders a green circle with 'sage' text for the specific creator
        <div className="sage-logo">
          sage
        </div>
      ) : (
        // Renders the creator's avatar image
        <img
          src={image}
          alt={name}
          className="creator-avatar"
          // Fallback in case the image fails to load
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/A0A0A0/FFFFFF?text=Creator'; }}
        />
      )}
      {/* Creator name */}
      <h3 className="creator-name">{name}</h3>
      {/* Number of published stories */}
      <p className="creator-stories">{stories} published stories</p>
    </div>
  );

  return (
    <div className="creator-page-container">
      {/* Page Title */}
      <h1 className="page-title">
        Creators We're Loving
      </h1>
      {/* Page Subtitle */}
      <p className="page-subtitle">
        Meet the people in your communities creating extraordinary things.
      </p>

      {/* Grid for Creator Cards */}
      <div className="grid-container-cols">
        {creators.map((creator, index) => (
          <CreatorCard key={index} {...creator} />
        ))}
      </div>
    </div>
  );
}

export default App;
