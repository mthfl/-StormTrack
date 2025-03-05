import React from 'react';
import Box from './components/box.jsx';

function Section2() {
  return (
    <div
      id="buscar"
      className="min-h-screen bg-gradient-to-b from-white to-[#D2D6D9]/20 flex items-center justify-center py-8 sm:py-12"
    >
      <section className="w-full max-w-[90%] sm:max-w-6xl mx-auto px-4">
       
        <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#023059] mb-4 sm:mb-6 tracking-tight">
            Consulte o Clima
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#5E6D8C] max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Explore as condições climáticas em tempo real de qualquer cidade do mundo. 
            Digite o nome da cidade e receba informações detalhadas instantaneamente!
          </p>
        </div>

    
        <div className="flex justify-center items-center mb-10 sm:mb-16">
          <div className="relative w-full sm:w-auto">
            <Box />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#023E73]/10 to-[#8D95A6]/10 
              rounded-3xl blur-xl transform scale-105 transition-all duration-500"></div>
          </div>
        </div>

      
      </section>
    </div>
  );
}

export default Section2;