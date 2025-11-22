import React, { useState, useEffect, useRef } from 'react';
import type { FeatureData } from '../types';
import { PlusIcon } from './Icons';
import type { SiteContent, NavLink, Sublink } from '../siteData';

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

interface FeaturesProps {
  content: SiteContent['features'];
  onNavigate: (page: NavLink | Sublink) => void;
}

const FeatureCard: React.FC<{ feature: FeatureData; onNavigate: (page: NavLink | Sublink) => void }> = ({ feature, onNavigate }) => {
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (feature.name && feature.href) {
      onNavigate(feature as Sublink);
    }
  };

  return (
    <div className="bg-[var(--color-card-background)] rounded-3xl p-8 shadow-lg shadow-gray-200/50 transition-all duration-300 flex flex-col h-full border border-[var(--color-border)] hover:shadow-2xl hover:-translate-y-1">
      <div className="flex flex-col items-center text-center mb-6">
        <img src={feature.icon} alt={feature.title} className="w-16 h-16 object-contain mb-4" />
        <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{feature.title}</h3>
      </div>
      <ul className="space-y-3 text-[var(--color-text-secondary)] list-disc pr-5 flex-grow">
        {feature.points.map((point, index) => (
          <li key={index} className="text-right text-sm">{point}</li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <a 
          href={feature.href || '#'}
          onClick={handleNavigate}
          className="group text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors flex items-center justify-end font-semibold cursor-pointer"
        >
          <span className="text-sm">بیشتر بدانید</span>
          <PlusIcon className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-90" />
        </a>
      </div>
    </div>
  );
};

const Features: React.FC<FeaturesProps> = ({ content, onNavigate }) => {
  return (
    <section id="features" className="py-16 sm:py-20 bg-[var(--color-background)]">
      <div className="container mx-auto px-4 sm:px-6">
        <Animated>
            <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">{content.title}</h2>
            <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-4 rounded-full"></div>
            </div>
        </Animated>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(content.items || []).map((feature, index) => (
            <Animated key={index} delay={100 + index * 100}>
              <FeatureCard feature={feature} onNavigate={onNavigate} />
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;