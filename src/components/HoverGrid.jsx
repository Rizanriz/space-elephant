import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../index.css';

const ServiceGrid = () => {
  const services = [
    {
      number: '01',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
      title: 'Web Design & Development',
      description: 'Logos, colors, type, your brand, fully alive.',
      features: [
        'Responsive Design',
        'Interaction Design',
        'CMS Integration',
        'SEO Optimization'
      ]
    },
    {
      number: '02',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d',
      title: 'Brand Identity',
      description: 'Crafting memorable visual identities that communicate values.',
      features: [
        'Logo Design',
        'Color Theory',
        'Typography',
        'Brand Guidelines'
      ]
    },
    {
      number: '03',
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e',
      title: 'Web Development',
      description: 'Building fast, responsive websites with modern technologies.',
      features: [
        'React.js',
        'Next.js',
        'Node.js',
        'GraphQL'
      ]
    },
    {
      number: '04',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      title: 'Content Creation',
      description: 'Engaging multimedia content for your target audience.',
      features: [
        'Video Production',
        'Photography',
        'Copywriting',
        'Social Media'
      ]
    }
  ];

 const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    let ctx; // GSAP context for cleanup

    // Only proceed if cards exist
    if (cards.length > 0) {
      ctx = gsap.context(() => {
        cards.forEach((card, index) => {
          if (!card) return;
          
          const image = card.querySelector('.service-image img');
          const number = card.querySelector('.service-number');
          const text = card.querySelector('.service-text');
          const description = text?.querySelector('p');
          const features = card.querySelector('.service-features');

          // Skip if elements don't exist
          if (!image || !number || !text || !description || !features) return;

          // Initial state
          gsap.set(image, { scale: 0.5, opacity: 0 });
          gsap.set([description, features], { opacity: 0, y: 10 });

          // Mouse enter animation
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { 
              height: 400,
              duration: 0.6,
              ease: 'power2.inOut'
            });

            gsap.to(number, {
              scale: 1.2,
              color: '#7C83FF',
              duration: 0.4,
              ease: 'back.out(2)'
            });

            gsap.to(image, {
              scale: 1,
              opacity: 1,
              duration: 0.7,
              ease: 'elastic.out(1, 0.5)'
            });

            gsap.to(description, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.2,
              ease: 'power2.out'
            });

            gsap.to(features, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.3,
              ease: 'power2.out'
            });
          });

          // Mouse leave animation
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
              height: 80,
              duration: 0.6,
              ease: 'power2.inOut'
            });

            gsap.to(number, {
              scale: 1,
              color: 'white',
              duration: 0.4,
              ease: 'back.out(1)'
            });

            gsap.to(image, {
              scale: 0.5,
              opacity: 0,
              duration: 0.4,
              ease: 'power2.in'
            });

            gsap.to([description, features], {
              opacity: 0,
              y: 10,
              duration: 0.3,
              ease: 'power2.in'
            });
          });
        });
      }, cardRefs); // Scope GSAP selectors to cardRefs
    }

    return () => {
      // Cleanup GSAP animations and event listeners
      if (ctx) ctx.revert();
      
      cards.forEach(card => {
        if (card) {
          card.removeEventListener('mouseenter');
          card.removeEventListener('mouseleave');
        }
      });
    };
  }, []);

  return (
    <div className="w-screen mx-7 py-8 px-4 bg-gray-900 min-h-screen">
      {services.map((service, index) => (
        <div 
          className="service-card h-20 p-4 mb-6 rounded-lg bg-gray-800 shadow-lg grid grid-cols-[50px_1fr] overflow-hidden relative cursor-pointer transition-all duration-300 border border-gray-700 hover:shadow-xl hover:shadow-indigo-500/20"
          key={index}
          ref={el => cardRefs.current[index] = el}
        >
          <div className="service-number text-3xl font-bold text-white self-center transition-all duration-300">
            {service.number}
          </div>
          
          <div className="service-content grid grid-cols-2 grid-rows-[auto_1fr_auto] h-full">
            <div className="service-image col-span-1 row-span-3 flex justify-center items-center p-4 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="max-h-64 w-auto object-contain rounded"
              />
            </div>
            
            <div className="service-text col-span-1 row-span-1 text-right p-4 self-end">
              <h2 className="text-3xl text-white font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-400 text-base leading-relaxed">{service.description}</p>
            </div>
            
            <div className="service-features col-span-1 row-span-3 flex flex-wrap justify-end gap-2 p-4 self-end">
              {service.features.map((feature, i) => (
                <span 
                  key={i} 
                  className="feature-tag bg-gray-700 px-4 py-2 rounded-full text-xs text-indigo-400 font-medium transition-all duration-300 hover:bg-indigo-400 hover:text-gray-900"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
);}

export default ServiceGrid;