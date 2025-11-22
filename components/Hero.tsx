import React from 'react';
import type { SiteContent } from '../siteData';

interface HeroProps {
  content: SiteContent['hero'];
  onCtaClick: () => void;
}

const Sparkle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L13.88 7.12L19 9L13.88 10.88L12 16L10.12 10.88L5 9L10.12 7.12L12 2Z" />
  </svg>
);

const Hero: React.FC<HeroProps> = ({ content, onCtaClick }) => {

  return (
    <section className="relative bg-[var(--color-background)] overflow-hidden" dir="rtl">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={content.backgroundImage}
          alt="Office Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
        {/* Gradients for glow effect */}
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-[var(--color-primary)]/20 via-[var(--color-primary)]/5 to-transparent rounded-full blur-3xl animate-slow-rotate"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-transparent rounded-full blur-3xl animate-slow-rotate" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating Elements & Decoratives */}
      <div className="absolute inset-0 hidden lg:block z-10 pointer-events-none">
        {/* The floating images */}
        {content.heroImageFloating2 && <img src={content.heroImageFloating2} alt="Showcase" className="absolute top-[12%] left-[2%] w-[20%] rounded-lg shadow-2xl transform -rotate-6 transition-transform duration-500 hover:scale-105 hover:-rotate-3 animate-float" />}
        {content.heroImageFloating1 && <img src={content.heroImageFloating1} alt="Showcase" className="absolute top-[8%] right-[2%] w-[26%] rounded-lg shadow-2xl transform rotate-3 transition-transform duration-500 hover:scale-105 hover:rotate-1 animate-float" style={{ animationDelay: '1s' }}/>}
        {content.heroImageMain && <img src={content.heroImageMain} alt="Showcase" className="absolute bottom-[25%] left-[5%] w-[23%] rounded-lg shadow-2xl transform rotate-4 transition-transform duration-500 hover:scale-105 hover:rotate-1 animate-float" style={{ animationDelay: '0.5s' }}/>}
        {content.heroImageFloating3 && <img src={content.heroImageFloating3} alt="Showcase" className="absolute bottom-[18%] right-[4%] w-[24%] rounded-lg shadow-2xl transform -rotate-5 transition-transform duration-500 hover:scale-105 hover:rotate-2 animate-float" style={{ animationDelay: '1.5s' }}/>}
        
        {/* Main Showcase Image - Updated for better visibility and positioning */}
        {content.heroImageShowcase && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] max-w-2xl h-[35vh] flex justify-center items-end">
            <img 
              src={content.heroImageShowcase} 
              alt="Main Showcase" 
              className="max-w-full max-h-full object-contain rounded-t-xl shadow-2xl border-4 border-gray-600/50 bg-black/10"
            />
          </div>
        )}
        
        {/* Decorative elements */}
        <Sparkle className="absolute top-[12%] right-[35%] w-6 h-6 text-[var(--color-primary)] opacity-80 animate-twinkle" />
        <Sparkle className="absolute top-[55%] left-[22%] w-8 h-8 text-[var(--color-primary)] opacity-80 animate-twinkle" style={{ animationDelay: '1s' }} />
        <Sparkle className="absolute bottom-[30%] right-[30%] w-5 h-5 text-[var(--color-primary)] opacity-80 animate-twinkle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[15%] left-[2%] w-16 h-16 border-l-4 border-b-4 border-[var(--color-primary)] opacity-50 rotate-12"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 z-20 flex flex-col items-center justify-start min-h-[80vh] md:min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-24 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug max-w-3xl animate-fade-in-up text-[var(--color-text-primary)]" style={{ animationDelay: '200ms' }}>
          {content.title}
        </h1>
        <p className="mt-6 text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          {content.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <button onClick={onCtaClick} className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-text-on-primary)] font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105">
            {content.cta_primary}
          </button>
          {content.cta_secondary && content.cta_secondary.trim() !== '' && (
            <a href="#contact" className="bg-transparent hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 border border-[var(--color-primary)]">
               {content.cta_secondary}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;