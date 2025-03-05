import React from 'react';
import Header from './components/header.jsx';
import './App.css';


function Section1() {
  return (
    <div className="min-h-screen nebula-bg ">
  
      

      <div className="flex flex-col h-full relative z-10">
        <header >
       <Header/>
        </header>

        <main className="flex justify-center items-center flex-grow px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 
              text-transparent bg-clip-text bg-gradient-to-r from-sky-light via-sky-medium to-sky-light
              animate-fade-in select-none">
              StormTrack
            </h1>
            
            <h3 className="text-base sm:text-lg md:text-xl 
              bg-sky-darker/80 backdrop-blur-sm text-sky-light
              rounded-2xl px-8 py-6 mx-auto max-w-2xl
              transform 
              shadow-lg border border-sky-medium/20">
              Nunca foi tão fácil descobrir o clima da sua{' '}
              <span className="font-semibold text-white">cidade</span>
            </h3>

            <div className="mt-12 space-x-4">
              <a href="#buscar" className="px-8 py-3 
                bg-sky-deep hover:bg-sky-darker
                rounded-full text-sky-light font-medium
                transform hover:-translate-y-1 transition-all duration-300
                shadow-md hover:shadow-xl
                border border-sky-medium/20">
                Começar agora
              </a>
             
            </div>
          </div>
        </main>

       
      </div>
    </div>
  );
}

export default Section1;