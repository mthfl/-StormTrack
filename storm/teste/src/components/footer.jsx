import React from 'react';
import { FaGithub, FaLinkedin,  FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';

const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/mthfl",
      label: "GitHub",
      hoverColor: "hover:text-gray-900",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/matheus-fl",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-600",
    },
   
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/mth_fl",
      label: "Instagram",
      hoverColor: "hover:text-pink-600",
    },
    {
      icon: FaEnvelope,
      url: "mailto:matheus.dev91@gmail.com",
      label: "Email",
      hoverColor: "hover:text-red-500",
    },
  ];
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#023059] to-[#023E73] py-12 sm:py-16 relative overflow-hidden">
    
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#5E6D8C] rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#8D95A6] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
     
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#D2D6D9] border-b-2 border-[#5E6D8C]/30 pb-2 inline-block">
              Sobre o Desenvolvedor
            </h3>
            <p className="text-[#8D95A6] leading-relaxed">
              Desenvolvido por{' '}
              <span className="font-semibold text-[#5E6D8C] hover:text-[#023E73] transition-colors duration-300 cursor-pointer">
                Matheus Felix
              </span>
              , um apaixonado desenvolvedor front-end dedicado a criar experiências digitais incríveis e funcionais.
            </p>
          </div>

        
          <div className="space-y-4 text-center md:text-right">
            <h3 className="text-xl font-bold text-[#D2D6D9] border-b-2 border-[#5E6D8C]/30 pb-2 inline-block">
              Contato
            </h3>
            <div className="space-y-4">
             
              
              <div className="flex space-x-5 justify-center md:justify-end">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className={`text-[#D2D6D9] ${link.hoverColor} transform hover:scale-110 transition-all duration-300`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

       
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#5E6D8C]/20 to-transparent" />

 
        <div className="flex flex-col sm:flex-row justify-between items-center text-[#8D95A6] text-sm">
          <p>
            © {currentYear} StormTrack. Todos os direitos reservados.
          </p>
          <p className="mt-2 sm:mt-0 flex items-center">
            Desenvolvido 
            usando{' '}
            <span className="text-blue-400 mx-1">React</span> e{' '}
            <span className="text-blue-400 mx-1">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;