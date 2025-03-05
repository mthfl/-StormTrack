import React from 'react';
import '../App.css';

function Header() {
  return (
    <>
      <div className="flex relative justify-center">
        <div className="relative w-[200px] h-[200px] rain-wrapper mx-8">
          <div className="rain-container">
            {/* Substituído o <img> pelo SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="64"
              height="64"
              aria-label="Animated thundercloud"
              className="lightning-main"
            >
              {/* Sombra da nuvem */}
              <path
                d="M48.7 26.7c0-8.3-6.7-15-15-15s-15 6.7-15 15c-5.1 0-9.3 4.1-9.3 9.3s4.1 9.3 9.3 9.3h30c5.1 0 9.3-4.1 9.3-9.3s-4.1-9.3-9.3-9.3z"
                fill="#B8BEC3"
                transform="translate(2,2)"
                opacity="0.3"
              />
              {/* Nuvem principal */}
              <path
                d="M47.7 25.7c0-8.3-6.7-15-15-15s-15 6.7-15 15c-5.1 0-9.3 4.1-9.3 9.3s4.1 9.3 9.3 9.3h30c5.1 0 9.3-4.1 9.3-9.3s-4.1-9.3-9.3-9.3z"
                fill="#D2D6D9"
              />
              {/* Detalhes da nuvem (highlights) */}
              <path
                d="M32.7 12.7c-7.2 0-13.2 5.1-14.7 11.9c-0.5-0.1-1-0.1-1.5-0.1c-5.1 0-9.3 4.1-9.3 9.3c0 4.9 3.8 8.9 8.6 9.2"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                opacity="0.5"
              />
              {/* Raio principal */}
              <path
                className="lightning-main"
                d="M32 20l-6 10h4v8l6-10h-4v-8z"
                fill="#FFD700"
              />
            </svg>

            {/* Efeito de chuva */}
            <div className="rain">
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;