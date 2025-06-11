import React from 'react';
import './AuthorPage.css';
  // replace with your image path

const AuthorPage = () => {
  return (
    <div className="author-page">
      <div className="header-space"></div>
      <div className="author-profile">
        <img src="https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/6216db144d12fa001d3ff6e2.jpg" alt="Author" className="author-img" />
        <div className="author-details">
          <h1>Mark Gagnon</h1>
          <p className="meta">
            <span role="img" aria-label="calendar">📅</span> Joined December 2021 &nbsp;•&nbsp;
            <span role="img" aria-label="stories">📄</span> 381 stories
          </p>
          <p>I have spent most of my adult life traveling here and abroad. Now it's time to create.</p>
          <p>
            I have published 3 books, <strong>Mitigating Circumstances</strong>, 
            <strong> Short Stories for Open Minds</strong> and, 
            <strong> Short Stories from an Untethered Mind</strong>.
          </p>
        </div>
        <div className="subscribe-box">
          <p className="subscribe-title">Subscribe to my stories</p>
          <p>Show your support and receive all my stories in your feed.</p>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      <div className="pinned-section">
        <h3>Pinned Stories (3/3)</h3>
        <div className="pinned-card">
          <img src="https://images.unsplash.com/photo-1507966791925-5f11b4dc204b?fit=crop&fm=jpg&h=375&ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTcwNzgzNTY2OHw&ixlib=rb-4.0.3&q=75&w=625&utm_medium=referral&utm_source=vocal.media"alt="Story" className="story-img" />
          <div className="story-details">
            <h4>Hidden From View</h4>
            <p>
              “I don’t understand why you don’t like the snow, Grandpa. Look at how beautiful 
              the hills look, tucked under a blanket of white...
            </p>
            <div className="story-author">
              <img src="https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/6216db144d12fa001d3ff6e2.jpg" alt="Author" />
              <span>Mark Gagnon • about a year ago in Fiction</span>
            </div>
          </div>
        </div>

        <div className="pinned-card">
          <img src="https://images.unsplash.com/photo-1507966791925-5f11b4dc204b?fit=crop&fm=jpg&h=375&ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTcwNzgzNTY2OHw&ixlib=rb-4.0.3&q=75&w=625&utm_medium=referral&utm_source=vocal.media"alt="Story" className="story-img" />
          <div className="story-details">
            <h4>Hidden From View</h4>
            <p>
              “I don’t understand why you don’t like the snow, Grandpa. Look at how beautiful 
              the hills look, tucked under a blanket of white...
            </p>
            <div className="story-author">
              <img src="https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_208,pg_1,q_40,w_208/6216db144d12fa001d3ff6e2.jpg" alt="Author" />
              <span>Mark Gagnon • about a year ago in Fiction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
