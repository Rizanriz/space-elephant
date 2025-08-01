import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Card from './Card';

const cardData = [
  {
    image: '/src/assets/images/one.png',
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
  },
  {
    image: '/src/assets/images/two.jpg',
    title: 'Digital Marketing',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...'
  },
  {
    image: '/src/assets/images/three.jpg',
    title: 'Digital Solutions',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...'
  },
  {
    image: '/src/assets/images/four.jpg',
    title: 'Web development',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...'
  },
  {
    image: '/src/assets/images/five.jpg',
    title: 'Brand Design',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...'
  },
  {
    image: '/src/assets/images/six.jpg',
    title: 'Rebranding',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...'
  }
];

const StickySection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const stickySection = document.querySelector('.sticky');
    const stickyHeader = document.querySelector('.sticky-header');
    const cards = document.querySelectorAll('.card');
    const stickyHeight = window.innerHeight * 7;

    const transforms = [
      [[10, 50, -10, 10], [20, -10, -45, 20]],      // card 1
      [[0, 47.5, -10, 15], [-25, 15, -45, 30]],     // card 2
      [[10, 50, -10, 10], [20, -10, -45, 20]],      // card 3
      [[0, 47.5, -10, 15], [-25, 15, -45, 30]],     // card 4
      [[10, 50, -10, 10], [20, -10, -45, 20]],      // card 5
      [[0, 47.5, -10, 15], [-25, 15, -45, 30]],     // card 6
    ];

    ScrollTrigger.create({
      trigger: stickySection,
      start: 'top top',
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const maxTransform = stickyHeader.offsetWidth - window.innerWidth;
        const translateX = -progress * maxTransform;
        gsap.set(stickyHeader, { x: translateX });

        cards.forEach((card, index) => {
          const delay = index * 0.1125;
          const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));

          if (cardProgress > 0) {
            const cardStartX = 25;
            const cardEndX = -650;
            const yPos = transforms[index][0];
            const rotations = transforms[index][1];

            const cardX = gsap.utils.interpolate(
              cardStartX,
              cardEndX,
              cardProgress
            );

            const yProgress = cardProgress * 3;
            const yIndex = Math.min(Math.floor(yProgress), yPos.length - 2);
            const yInterpolation = yProgress - yIndex;

            const cardY = gsap.utils.interpolate(
              yPos[yIndex],
              yPos[yIndex + 1],
              yInterpolation
            );

            const cardRotation = gsap.utils.interpolate(
              rotations[yIndex],
              rotations[yIndex + 1],
              yInterpolation
            );

            if (cardProgress > 0) {
              gsap.set(card, {
                xPercent: cardX,
                yPercent: cardY,
                rotation: cardRotation,
                opacity: 1,
              });
            } else {
              gsap.set(card, { opacity: 0 });
            }
          }
        });
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

  return (
    <section className="sticky">
      <div className="sticky-header">
        <h1>Space Elephant</h1>
      </div>

      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default StickySection;