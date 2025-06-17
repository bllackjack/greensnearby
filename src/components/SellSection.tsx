'use client';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Users, DollarSign } from 'lucide-react';

// TypeScript declaration for Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const SellSection = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };
  
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-harvest-gold" />,
      title: "Turn Surplus into Income",
      description: "Transform your garden's abundance into meaningful local income"
    },
    {
      icon: <Users className="w-8 h-8 text-forest-green" />,
      title: "Strengthen Community",
      description: "Connect with neighbors and build lasting relationships through fresh food"
    },
    {
      icon: <Leaf className="w-8 h-8 text-sage-green" />,
      title: "Share Your Passion",
      description: "Let others experience the joy of your homegrown organic produce"
    }
  ];

  return (
    <section id="sell" className="py-20 bg-gradient-to-br from-[#89F336] to-earthy-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#244709] mb-6 sell-headline">
            Share Your Garden's Bounty
          </h2>
          <p className="text-xl text-[#244709] max-w-3xl mx-auto leading-relaxed sell-subheadline">
            Turn your homegrown surplus into local income and strengthen your community 
            by connecting with neighbors who value fresh, organic produce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg bg-[#8BB06F]/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 benefit-card"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#244709] mb-3">
                {benefit.title}
              </h3>
              <p className=" font-semibold text-[#244600]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#244709] hover:bg-[#244709] text-white px-10 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200 sell-cta"
            onClick={handleClick}
          >
            Become a Grower
          </Button>
        </div>
      </div>

     
    </section>
  );
};

export default SellSection;
