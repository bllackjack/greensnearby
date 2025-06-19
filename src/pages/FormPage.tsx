'use client';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// TypeScript declaration for Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const FormPage = () => {
  const navigate = useNavigate();

  // Initialize Tally script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Initialize Tally form when component mounts
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C7E9B0] to-earthy-beige/30">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#244709] hover:bg-[#244709]/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h1 className="font-monster text-3xl font-bold text-[#244709] mb-6 text-center">
            Become a Grower
          </h1>
          <div className="overflow-y-auto">
            <iframe
              src="https://tally.so/embed/wQpVol?alignLeft=1&hideTitle=1&dynamicHeight=1"
              width="100%"
              height="1200"
              frameBorder="0"
              title="Grower Form"
              className="rounded-lg w-full"
              style={{ minHeight: '1200px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
