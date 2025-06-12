import React from 'react';
import StoryCard from './StoryCard';

// Mock data for the stories
const stories = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/jerrick/image/upload/c_fill,d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,h_375,pg_1,q_auto,w_625/6840d83cff6334001de1c0b5.png',
    title: 'Happy Birthday!',
    excerpt: '“Happy birthday, buddy!” My dad says, bringing out the excessively decorated cake into the living room with the rest o...',
    author: 'AJ',
    authorImage: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    image: '//images.unsplash.com/photo-1579621970795-87facc2f976d?fit=crop&fm=jpg&h=375&ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTc0ODc0NTA0NXw&ixlib=rb-4.1.0&q=75&w=625&utm_medium=referral&utm_source=vocal.media',
    title: 'Word of the day: 休み',
    excerpt: 'I want to write about a few things but I am also not really wanting to say all the things that has been going on right no...',
    author: 'Kayla McIntosh',
    authorImage: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1500679215756-b09636d3786e?fit=crop&fm=jpg&h=375&ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTc0ODk2NjI4Mnw&ixlib=rb-4.1.0&q=75&w=625&utm_medium=referral&utm_source=vocal.media',
    title: 'Robin Hood Neurodivergent Justice',
    excerpt: 'I see the world in my own eyes. If someone steals from me, I feel I can steal back, Provided of equal value. I...',
    author: 'Sid Aaron Hirji',
    authorImage: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    image: '//images.unsplash.com/photo-1631692364644-d6558eab0915?fit=crop&fm=jpg&h=375&ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTc0ODk2MDM1OXw&ixlib=rb-4.1.0&q=75&w=625&utm_medium=referral&utm_source=vocal.mediacTW2IXjFgHAtBiFLr6RAj0hffAl091WsQq4gA&s',
    title: 'Say It Loud and Clear',
    excerpt: 'I wrote the following quickly after hearing the news, but felt it best to go back and add this because so much goes unsaid.',
    author: 'Paul Stewart',
    authorImage: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6842d89a2a4552001d4bf6a2.jpg',
    title: 'Whistle in the Dark',
    excerpt: 'making a show of bravery, whilst resisting the urge to run towards something easier',
    author: 'Amelia',
    authorImage: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_108,pg_1,q_60,w_108/671670ff854709001d8146fd.jpg',
  },
   {
    id: 6,
    image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67b8e8d9fd8708001d7338c5.jpg',
    title: 'Glass Dolls',
    excerpt: '“Happy birthday, buddy!” My dad says, bringing out the excessively decorated cake into the living room with the rest o...',
    author: 'Dana Crandell',
    authorImage: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_108,pg_1,q_60,w_108/6543cb7480e6e7001d4510f7.jpg',
  },
   {
    id: 7,
    image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67ce23b5b81fc6001da64693.jpg',
    title: 'The Absolutely Unfree Life of a Valley Girl',
    excerpt: '“A Review of “Earth to Moon: A Memoir” by Moon Unit Zappa',
    author: ' Kendall Defoe',
    authorImage: 'https://res.cloudinary.com/jerrick/image/upload/c_thumb,h_108,pg_1,q_60,w_108/nbi4hv1tqyzmejetlmoo.jpg',
  },
   {
    id: 8,
    image: 'https://res.cloudinary.com/jerrick/image/upload/c_fill,d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,h_375,pg_1,q_auto,w_625/6840d83cff6334001de1c0b5.png',
    title: 'Happy Birthday!',
    excerpt: '“Happy birthday, buddy!” My dad says, bringing out the excessively decorated cake into the living room with the rest o...',
    author: 'AJ',
    authorImage: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
   
  
];

const TopStories = () => {
  return (
    <section className="top-stories-section">
      <div className="section-header">
        <h2>Top Stories</h2>
        <button className="explore-all-btn">Explore All</button>
      </div>
      <p className="section-description">Find new, handpicked stories you'll love, updated daily.</p>
      <div className="stories-grid">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
};

export default TopStories;