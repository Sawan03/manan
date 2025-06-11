import React from 'react';

const StoryCard = ({ story }) => {
  return (
    <div className="story-card">
      <img src={story.image} alt={story.title} className="story-image" />
      <div className="story-content">
        <h3 className="story-title">{story.title}</h3>
        <p className="story-excerpt">{story.excerpt}</p>
        <div className="story-author">
          <img src={story.authorImage} alt={story.author} className="author-image" />
          <span>{story.author}</span>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;