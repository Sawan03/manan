import React from 'react';
import './Challenges.css'; // Import the consolidated CSS file

// Dummy Data - Updated to reflect the image content
const challengesData = [
  {
    id: 'challenge-1',
    image: 'https://images.pexels.com/photos/12636164/pexels-photo-12636164.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder for the first image
    title: 'History Would\'ve Burned This Page',
    description: 'Write about a real or historically inspired figure or moment that was erased, rewritten, or overlooked.',
    grandPrize: '$500 Grand Prize',
    timeLeft: '41 hours left',
  },
  {
    id: 'challenge-2',
    image: 'https://images.pexels.com/photos/30237909/pexels-photo-30237909/free-photo-of-close-up-of-circular-saw-blade-in-workshop.jpeg?auto=compress&cs=tinysrgb&w=600', // URL from the image's context clue
    title: "I Didn't Say That Out Loud",
    description: 'Write a poem built from the thoughts you never speak. Confessions, quiet rage, dreams, or fears. What lives in the silence?',
    grandPrize: '$500 Grand Prize',
    timeLeft: '8 days left',
  },
  {
    id: 'challenge-3',
    image: 'https://images.pexels.com/photos/32453322/pexels-photo-32453322/free-photo-of-vintage-envelopes-and-glass-bottle-on-patterned-rug.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder for the third image
    title: 'I Wrote This',
    description: 'Write the story only you could tell—then prove you wrote it.',
    grandPrize: '$500 Grand Prize',
    timeLeft: '15 days left',
  },
];

// --- ChallengeCard Component ---
const ChallengeCard = ({ challenge }) => {
  return (
    <div className="challenge-card">
      <div className="challenge-card__image-wrapper">
        <span className="challenge-card__type-indicator">V+</span> {/* "V+" badge */}
        <img src={challenge.image} alt={challenge.title} className="challenge-card__image" />
      </div>
      <div className="challenge-card__content">
        <h3 className="challenge-card__title">{challenge.title}</h3>
        <p className="challenge-card__description">{challenge.description}</p>
        <div className="challenge-card__footer">
          <p className="challenge-card__grand-prize">{challenge.grandPrize}</p>
          <p className="challenge-card__time-left">{challenge.timeLeft}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main ChallengesPage Component ---
const Challenges = () => {
  return (
    <div className="challenges-page__container">
      <div className="challenges-header">
        <h1 className="challenges-header__title">Challenges</h1>
        <p className="challenges-header__subtitle">Enter themed storytelling contests to put your creativity to the test.</p>
        <button className="explore-all-button">Explore All</button>
      </div>

      <main className="challenges-grid-container">
        {challengesData.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
          />
        ))}
      </main>
    </div>
  );
};

export default Challenges;