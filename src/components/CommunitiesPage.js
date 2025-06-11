import React, { useState } from 'react';
import './CommunitiesPage.css'; // Import your CSS file

const communitiesData = [
  {
    id: 1,
    name: '01',
    category: 'Tech',
    description: 'Tech news, reviews, and how-to\'s',
    stories: '39,709',
    creators: '14,810',
    image: 'url_to_01_image.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'ART',
    category: 'Arts',
    description: 'Where words paint masterpieces',
    stories: '12,048',
    creators: '6,674',
    image: 'url_to_art_image.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Beat',
    category: 'Entertainment',
    description: 'Music artists, reviews, and playlists',
    stories: '11,045',
    creators: '5,007',
    image: 'url_to_beat_image.jpg', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'BLUSH',
    category: 'Health',
    description: 'Skincare, hair, makeup, and body',
    stories: '7,716',
    creators: '3,763',
    image: 'url_to_blush_image.jpg', // Replace with actual image URL
  },
  {
    id: 5,
    name: 'BookClub',
    category: 'Education',
    description: 'Where every page sparks a conversation',
    stories: '8,524',
    creators: '3,881',
    image: 'url_to_bookclub_image.jpg', // Replace with actual image URL
  },
  {
    id: 6,
    name: 'Chapters',
    category: 'Education',
    description: 'Where stories unfold, one chapter at a time',
    stories: '11,415',
    creators: '4,515',
    image: 'url_to_chapters_image.jpg', // Replace with actual image URL
  },
  {
    id: 7,
    name: 'CLEATS',
    category: 'Sports',
    description: 'Association football and soccer',
    stories: '1,041',
    creators: '5,000', // Assuming a placeholder number as it's cut off
    image: 'url_to_cleats_image.jpg', // Replace with actual image URL
  },
  {
    id: 8,
    name: 'CONFESSION',
    category: 'Society',
    description: 'Love, life, and secret confessions',
    stories: '14,120',
    creators: '7,002',
    image: 'url_to_confession_image.jpg', // Replace with actual image URL
  },
  // ... more community data
];

const categories = [
  'All', 'Arts', 'Business', 'Education', 'Entertainment',
  'Health', 'Lifestyle', 'Politics', 'Science', 'Society', 'Sports', 'Technology'
];

function CommunitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCommunities = selectedCategory === 'All'
    ? communitiesData
    : communitiesData.filter(community => community.category === selectedCategory);

  return (
    <div className="communities-page">
      <header className="communities-header">
        <h1>Communities</h1>
        <p>Explore communities powered by creators sharing stories about your interests and passions.</p>
      </header>

      <nav className="communities-filter-nav">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="communities-grid">
        {filteredCommunities.map(community => (
          <div key={community.id} className="community-card">
            <div
              className="community-card-image"
              style={{ backgroundImage: `url(${community.image})` }}
            >
              <h2 className="community-name">{community.name}</h2>
            </div>
            <div className="community-card-content">
              <p className="community-description">{community.description}</p>
              <div className="community-stats">
                <span>{community.stories} Stories</span>
                <span>{community.creators} Creators</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunitiesPage;