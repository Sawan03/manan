import React from 'react';
import './HomePageContent.css';
import TopStories from './TopStories';
import Challenges from './Challenges';
import Creators from './Creators'; // Make sure Creators.js exists in components
import Resources from './resources'; // Make sure resources.js exists in components
import CommunitiesPage from './CommunitiesPage';
import Footer from './Footer';


const StoryCard = ({ image, title, description, authorName, authorAvatar, contentWarning = false }) => {
  return (
    <div className="story-card">
      <img
        src={image}
        alt={title}
        className="story-image"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e0e0e0/555555?text=Image+Missing'; }}
      />
      <div className="story-content">
        {contentWarning && (
          <span className="content-warning">Content Warning</span>
        )}
        <h3 className="story-title">{title}</h3>
        <p className="story-description">{description}</p>
        <div className="story-author">
          <img
            src={authorAvatar}
            alt={authorName}
            className="author-avatar"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/24x24/cccccc/333333?text=A'; }}
          />
          <span className="author-name">{authorName}</span>
        </div>
      </div>
    </div>
  );
};

const HomePageContent = () => {
  const topStories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507539989371-99615e449486?fit=crop&fm=jpg&h=375&ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTc0OTU3OTg0MXw&ixlib=rb-4.1.0&q=75&w=625&utm_medium=referral&utm_source=vocal.media',
      title: 'Move to the Rhythm',
      description: 'We are all born with a natural rhythm...',
      authorName: 'Mark Gagnon',
      authorAvatar: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/6216db144d12fa001d3ff6e2.jpg',
      time: 'about 16 hours ago in Humans',
    },
  ];

  const bottomStories = [
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1528738984120-effa2ecf6abc?fit=crop&fm=jpg&h=375&ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTc0OTMzNzU3MXw&ixlib=rb-4.1.0&q=75&w=625&utm_medium=referral&utm_source=vocal.media',
      title: 'Dear Sister',
      description: 'Dear Sister, Don\'t worry, I\'m right behind you...',
      authorName: 'Lore S. Crown',
      authorAvatar: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_120,pg_1,q_40,w_120/684830992e1ae8001de45617.jpg',
      contentWarning: true,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1513682121497-80211f36a7d3?fit=crop&fm=jpg&h=375&ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTc0OTEzODc0OHw&ixlib=rb-4.1.0&q=75&w=625&utm_medium=referral&utm_source=vocal.media',
      title: 'Who Are The Truly Scary People In Our World',
      description: 'A deep dive into the shadows of human nature...',
      authorName: 'Kendall Defoe',
      authorAvatar: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_108,pg_1,q_60,w_108/nbi4hv1tqyzmejetlmoo.jpg',
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/jerrick/image/upload/c_fill,d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,h_375,pg_1,q_auto,w_625/6843a494f07e56001dc5b645.jpg',
      title: 'I\'ve had PTSD',
      description: 'PTSD is flooring me at the moment...',
      authorName: 'Rob',
      authorAvatar: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_120,pg_1,q_40,w_120/653aeaf5a88d15001da20502.jpg',
      contentWarning: true,
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/jerrick/image/upload/c_fill,d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,h_375,pg_1,q_auto,w_625/6842d89a2a4552001d4bf6a2.jpg',
      title: 'Whistle in the Dark',
      description: 'Calamity bit and sucked and kissed with...',
      authorName: 'Alex',
      authorAvatar: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_120,pg_1,q_40,w_120/s7vbc68ubzt6iezjc5zp.jpg',
    },
  ];

  return (
    <div className="homepage">
      <main className="homepage-main">
        <section className="top-section">
          <div>
            <h2 className="top-title">Top Stories</h2>
            <p className="top-subtitle">Find new, handpicked stories you'll love, updated daily.</p>
          </div>
          <button className="explore-btn">Explore All</button>
        </section>

        <div className="homepage-grid">
          <div className="left-column">
            {topStories.map((story) => (
              <div key={story.id} className="featured-story">
                <img
                  src={story.image}
                  alt={story.title}
                  className="featured-image"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x600/e0e0e0/555555?text=Main+Image+Missing'; }}
                />
                <div className="featured-content">
                  <h3 className="featured-title">{story.title}</h3>
                  <p className="featured-description">{story.description}</p>
                  <div className="featured-author">
                    <img
                      src={story.authorAvatar}
                      alt={story.authorName}
                      className="featured-avatar"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/32x32/cccccc/333333?text=A'; }}
                    />
                    <div>
                      <span className="author-name">{story.authorName}</span><br />
                      <span className="author-time">{story.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            

            <section className="story-grid">
              {bottomStories.map((story) => (
                <StoryCard key={story.id} {...story} />
              ))}
            </section>
          </div>

          <div className="right-column">
            <h3 className="creator-title">Share your stories and support creators.</h3>
            <p className="creator-text">
              Vocal is an all-in-one platform where you can share your stories, build an audience, and earn money.
            </p>
            <button className="creator-btn">Become a Creator</button>
            <h4 className="creator-subtitle">Why creators choose Vocal:</h4>
            <ul className="creator-list">
              <li>✔ Easy-to-use story creation tools</li>
              <li>✔ Earn money from reads, tips and challenges</li>
              <li>✔ We moderate every story for safety</li>
              <li>✔ No annoying ads</li>
            </ul>
            <p className="learn-more">Learn more about how Vocal works</p>
          </div>
          
        </div>
        {/* ✅ TopStories inserted here */}
            <TopStories />
            <Challenges/>
            <Creators/>
            <Resources/>
            <CommunitiesPage/>
            <Footer/>
            
      </main>
      
    </div>
  );
};

export default HomePageContent;
