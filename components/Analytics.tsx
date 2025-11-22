import React, { useState, useEffect, useRef } from 'react';
import { JavanWebiLogo } from './Icons';
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


interface AnalyticsProps {
  content: SiteContent['analytics'];
}

const Analytics: React.FC<AnalyticsProps> = ({ content }) => {
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-card-background)] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <Animated className="lg:w-1/2 w-full">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-text-primary)]">{content.title1}</h2>
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                {content.paragraph1}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[var(--color-background)] p-2 rounded-full shadow-md">
                    <JavanWebiLogo className="w-8 h-8 text-[var(--color-primary)]"/>
                  </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">{content.title2}</h2>
              </div>
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                {content.paragraph2}
              </p>
                {content.cta && (
                 <a href="#" className="inline-block mt-8 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-text-on-primary)] font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105">
                    {content.cta}
                </a>
                )}
            </div>
          </Animated>
          <Animated delay={200} className="lg:w-1/2 w-full">
            <img 
              src={content.imageUrl}
              alt="Analytics visual representation"
              className="rounded-2xl shadow-lg border border-[var(--color-border)] object-cover w-full h-auto"
            />
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default Analytics;