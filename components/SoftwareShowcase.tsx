import React, { useState, useEffect, useRef } from 'react';
import type { SiteContent } from '../siteData';
import ImageSlider from './ImageSlider';

// Re-using the animation hook from other components
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


interface SoftwareShowcaseProps {
  content: SiteContent['softwareShowcase'];
}

const SoftwareShowcase: React.FC<SoftwareShowcaseProps> = ({ content }) => {
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-card-background)]">
      <div className="container mx-auto px-4 sm:px-6">
        <Animated>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold md:text-3xl text-[var(--color-text-primary)]">{content.title}</h2>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mt-3 max-w-3xl mx-auto">{content.subtitle}</p>
          </div>
        </Animated>
        <Animated delay={200}>
          <div className="max-w-5xl mx-auto h-[300px] md:h-[500px] rounded-lg shadow-2xl overflow-hidden border-4 border-gray-200">
             <ImageSlider slides={content.slides || []} />
          </div>
        </Animated>
      </div>
    </section>
  );
};

export default SoftwareShowcase;