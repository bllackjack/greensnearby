
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Truck, Shield } from 'lucide-react';

const BuySection = () => {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-accent-berry" />,
      title: "Grown with Love",
      description: "Every vegetable comes from passionate local gardeners who care about quality"
    },
    {
      icon: <Truck className="w-8 h-8 text-harvest-gold" />,
      title: "Ultra Fresh Delivery",
      description: "From garden to your door in hours, not days - taste the difference"
    },
    {
      icon: <Shield className="w-8 h-8 text-forest-green" />,
      title: "Truly Organic",
      description: "Know your grower, know your food - complete transparency in every bite"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email submission here
    setEmail('');
  };

  return (
    <section id="buy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#244709] mb-6 buy-headline">
            Taste the Difference of 
            <span className="text-accent-berry"> Truly Local</span>
          </h2>
          <p className="text-xl text-[#244709] max-w-3xl mx-auto leading-relaxed buy-subheadline">
            Sign up to discover organic vegetables from gardens near you, 
            delivered fresh to your door with stories from the growers who raised them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 feature-card"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#244709] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#244709]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 email-signup">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border-2 border-[#244709] rounded-lg"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-[#89F336] hover:bg-[#89F336]/90 text-[#244709] px-8 py-3 font-semibold hover:scale-105 transition-all duration-200 whitespace-nowrap"
            >
              Get Fresh Updates
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
