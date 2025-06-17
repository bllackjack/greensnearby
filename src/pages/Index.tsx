
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SellSection from '@/components/SellSection';
import BuySection from '@/components/BuySection';
import Footer from '@/components/Footer';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Hero text animations
    gsap.fromTo('.hero-headline', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 }
    );

    gsap.fromTo('.hero-tagline', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.6 }
    );

    gsap.fromTo('.hero-cta', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.9 }
    );

    // Sell section animations
    gsap.fromTo('.sell-headline', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.sell-headline',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.sell-subheadline', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power1.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.sell-subheadline',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.benefit-card', 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power1.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.benefit-card',
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.sell-cta', 
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.sell-cta',
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Buy section animations
    gsap.fromTo('.buy-headline', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.buy-headline',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.buy-subheadline', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power1.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.buy-subheadline',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.feature-card', 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power1.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.feature-card',
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.email-signup', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.email-signup',
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Footer animations
    gsap.fromTo('.footer-section', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power1.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SellSection />
      <BuySection />
      <Footer />
    </div>
  );
};

export default Index;
