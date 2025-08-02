import React, { useEffect } from 'react';
import '../index.css'; // We'll create this CSS file next

const CardRows = () => {
  useEffect(() => {
    const rows = document.querySelectorAll('.card-row');
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = (x - centerX) / 30;
      const rotateX = (centerY - y) / 30;
      
      e.currentTarget.style.transform = `translateY(-10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
    };

    rows.forEach(row => {
      row.addEventListener('mousemove', handleMouseMove);
      row.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      rows.forEach(row => {
        row.removeEventListener('mousemove', handleMouseMove);
        row.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cardData = [
    {
      number: '1',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Mountain Majesty',
      description: 'Majestic peaks that touch the sky, where the air is crisp and the views are breathtaking. Mountains offer a serene escape from the hustle of daily life, inviting adventurers to explore their <span class="highlight">natural wonders</span> and discover the beauty of untouched wilderness.'
    },
    {
      number: '2',
      image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Ocean Depths',
      description: 'The endless expanse of the ocean, with its rhythmic waves and deep blue hues, has captivated humans for centuries. It\'s a world of <span class="highlight">mystery and beauty</span>, home to countless species and ecosystems that thrive beneath the surface.'
    },
    {
      number: '3',
      image: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Forest Sanctuary',
      description: 'Walking through a dense forest, surrounded by ancient trees and the sounds of nature, is a truly magical experience. Forests are the <span class="highlight">lungs of our planet</span>, providing oxygen and habitat for diverse wildlife while offering tranquility to weary souls.'
    },
    {
      number: '4',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Desert Mirage',
      description: 'The desert\'s stark beauty lies in its vast, open spaces and ever-shifting dunes. Though seemingly barren, deserts are filled with <span class="highlight">resilient life</span> that has adapted to thrive in extreme conditions, creating unique ecosystems of survival.'
    }
  ];

  return (
    <div className="container">
      <div className="title">
        <h1>Interactive Card Rows</h1>
        <p>Hover over each row to reveal the hidden content and image</p>
      </div>
      
      {cardData.map((card, index) => (
        <div className="card-row" key={index}>
          <div className="number">{card.number}</div>
          <div className="image-container">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="content">
            <h3>{card.title}</h3>
          </div>
          <div className="paragraph-container">
            <p dangerouslySetInnerHTML={{ __html: card.description }} />
          </div>
        </div>
      ))}
      
      <div className="footer">
        <p>Interactive Card Rows with Expand Animation | Hover over each row to see the effect</p>
      </div>
    </div>
  );
};

export default CardRows;