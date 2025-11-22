import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon } from './Icons';
import type { SiteContent } from '../siteData';

const useIsVisible = (options?: IntersectionObserverInit) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.1, ...options }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [options]);
    return [ref, isVisible] as const;
};

const Animated: React.FC<{ children?: React.ReactNode; delay?: number, className?: string }> = ({ children, delay = 0, className = '' }) => {
    const [ref, isVisible] = useIsVisible();
    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-700 ease-out`}
            style={{
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
        >
            {children}
        </div>
    );
};

interface AboutProps {
  content: SiteContent['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section className="py-16 sm:py-24 bg-[var(--color-card-background)] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <Animated className="lg:w-1/2 w-full lg:pr-8">
            <span className="text-sm font-bold text-[var(--color-primary)] tracking-wider uppercase">چرا جوان وب ای؟</span>
            <h2 className="text-3xl md:text-4xl font-extrabold my-4 text-[var(--color-text-primary)]">{content.title}</h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {content.paragraph}
            </p>
            
            <div className="relative border-r-2 border-[var(--color-primary)]/30 pr-8 space-y-8 mb-10">
              {(content.timeline || []).map((event, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute -right-[2.1rem] top-1.5 w-6 h-6 bg-[var(--color-background)] rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] pr-2">
                    <span className="font-semibold text-[var(--color-text-primary)]">{event.year}:</span> {event.description}
                  </p>
                </div>
              ))}
            </div>

            {content.cta && (
              <a href="#" className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-text-on-primary)] font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105">
                  {content.cta}
              </a>
            )}
          </Animated>
          <Animated delay={200} className="lg:w-1/2 w-full flex justify-center mt-12 lg:mt-0">
            <img 
              src={content.imageUrl}
              alt="About Javan Webi"
              className="rounded-2xl shadow-2xl object-contain w-full max-h-80 sm:max-h-96 lg:max-h-[36rem] transition-transform duration-300 hover:scale-105"
            />
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default About;