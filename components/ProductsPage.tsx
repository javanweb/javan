import React, { useState, useEffect, useRef } from 'react';
import type { ProductsPageContent } from '../siteData';
import { ArrowLeftIcon } from './Icons';

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
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            }}
        >
            {children}
        </div>
    );
};


interface ProductsPageProps {
  content: ProductsPageContent;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ content }) => {
  const backgroundPatternStyle: React.CSSProperties = {
    backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(to right, var(--color-border) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  };

  const heroBackgroundStyle: React.CSSProperties = {
    background: `radial-gradient(ellipse at 70% 80%, color-mix(in srgb, var(--color-hero-gradient) 70%, transparent) 0%, var(--color-background) 60%)`,
  };


  return (
    <div className="bg-[var(--color-background)]">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 text-center border-b border-[var(--color-border)] overflow-hidden" style={heroBackgroundStyle}>
        <div className="container mx-auto px-4 sm:px-6">
          <Animated>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] mb-6">
              {content.title}
            </h1>
          </Animated>
          <Animated delay={200}>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-[var(--color-text-secondary)]">
              {content.intro}
            </p>
          </Animated>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24 relative" style={backgroundPatternStyle}>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-[var(--color-background)]/90 to-[var(--color-background)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <Animated>
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">راهکارهای جامع سه نیک برای هر کسب‌وکار</h2>
              <p className="mt-4 max-w-2xl mx-auto text-[var(--color-text-secondary)]">محصولات ما با دقت طراحی شده‌اند تا فرآیندهای شما را ساده‌تر، سریع‌تر و هوشمندتر کنند.</p>
              <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded-full"></div>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(content.products || []).map((product, index) => {
              return (
                <Animated key={index} delay={100 + index * 100}>
                  <div className="group block rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2">
                    <div className="relative bg-[var(--color-card-background)] rounded-2xl h-full p-8 flex flex-col z-10 overflow-hidden border border-[var(--color-border)] group-hover:border-[var(--color-primary)]/50">
                        <div className="absolute -top-1 -right-1 h-24 w-24 bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
                      <div className="flex-shrink-0 mb-6 flex items-center justify-center w-20 h-20 bg-[var(--color-primary)]/10 rounded-full group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300">
                        <img
                          src={product.icon}
                          alt={product.title}
                          className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                          {product.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                      <div className="mt-8">
                        <div className="text-sm font-bold text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)] transition-colors duration-300 inline-flex items-center gap-3">
                          <span>اطلاعات بیشتر</span>
                          <ArrowLeftIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[-8px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Animated>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
