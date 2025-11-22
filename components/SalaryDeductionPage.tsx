import React, { useState, useEffect, useRef } from 'react';
import type { SalaryDeductionPage } from '../siteData';
import { 
    CheckCircleIcon, UsersIcon, CogIcon, CalculatorIcon, DocumentDuplicateIcon, 
    ChartBarIcon, LinkIcon, ShieldCheckIcon, PayrollIcon, FinanceIcon, TreasuryIcon
} from './Icons';

const iconMap: { [key: string]: React.ElementType } = {
  UsersIcon, CogIcon, CalculatorIcon, DocumentDuplicateIcon, ChartBarIcon, LinkIcon, ShieldCheckIcon, PayrollIcon, FinanceIcon, TreasuryIcon
};

interface SalaryDeductionPageProps {
  content: SalaryDeductionPage;
}

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
            {
                threshold: 0.1,
                ...options,
            }
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

const SalaryDeductionPage: React.FC<SalaryDeductionPageProps> = ({ content }) => {
  const { hero, importance, features, integrations, advancedFeatures, finalCta } = content;
  const [activeTab, setActiveTab] = useState('features');

  const renderIcon = (icon: string, alt: string, className: string) => {
    if (icon && icon.startsWith('data:image')) {
        return <img src={icon} alt={alt} className={className} style={{ objectFit: 'contain' }} />;
    }
    const IconComponent = iconMap[icon];
    if (IconComponent) {
        return <IconComponent className={className} />;
    }
    return null;
  };

  const tabs = [
    { id: 'features', title: 'امکانات تخصصی' },
    { id: 'integrations', title: 'یکپارچه‌سازی' },
    { id: 'advancedFeatures', title: 'قابلیت‌های پیشرفته' },
  ];

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text-primary)] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative hero-gradient pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl animate-pulse-glow animation-delay-3000"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <Animated className="lg:w-1/2 text-center lg:text-right">
              <span className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold px-4 py-1 rounded-full mb-4">{hero.badge}</span>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">{hero.title}</h1>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto lg:mx-0">{hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-text-on-primary)] font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg animate-pulse-glow">{hero.ctaPrimary}</a>
                <a href="#features" className="bg-white hover:bg-gray-100 text-[var(--color-text-primary)] font-bold py-3 px-8 rounded-lg transition-all duration-300 border border-[var(--color-border)] shadow-sm">{hero.ctaSecondary}</a>
              </div>
            </Animated>
            <Animated className="lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0" delay={200}>
              <img src={hero.imageUrl} alt={hero.title} className="rounded-2xl shadow-2xl w-full max-w-lg object-cover transition-transform duration-300 hover:scale-105" style={{ aspectRatio: '4/3' }} />
            </Animated>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-24 bg-[var(--color-card-background)]">
        <div className="container mx-auto px-6">
          <Animated>
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold">{importance.title}</h2>
              <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded-full"></div>
            </div>
          </Animated>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {(importance.items || []).map((item, index) => (
                <Animated key={index} delay={100 + index * 50}>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <CheckCircleIcon className="h-7 w-7 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-[var(--color-text-secondary)]">{item}</p>
                  </div>
                </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section id="features" className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-6">
            <Animated>
                <div className="flex justify-center mb-12 flex-wrap">
                    {tabs.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 sm:px-6 py-3 text-base sm:text-lg font-bold border-b-4 transition-all duration-300 ${activeTab === tab.id ? 'border-[var(--color-primary)] text-[var(--color-text-primary)]' : 'border-transparent text-gray-400 hover:text-[var(--color-text-primary)]'}`}>
                            {tab.title}
                        </button>
                    ))}
                </div>
            </Animated>

            {activeTab === 'features' && (
                <div className="animate-tab-content-fade-in grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(features.items || []).map((feature, index) => {
                        return (
                            <Animated key={index} delay={100 + index * 100}>
                                <div className="group bg-[var(--color-card-background)] rounded-2xl shadow-lg p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--color-primary-hover)_0%,_transparent_20%)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    <div className="flex items-center gap-4 mb-6 relative">
                                        {renderIcon(feature.icon, feature.title, "h-10 w-10 text-[var(--color-primary)]")}
                                        <h3 className="text-lg font-bold">{feature.title}</h3>
                                    </div>
                                    <ul className="space-y-3 text-sm text-[var(--color-text-secondary)] flex-grow relative">
                                        {(feature.points || []).map((point, pIndex) => (
                                        <li key={pIndex} className="flex items-start">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 ml-2 flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </Animated>
                        );
                    })}
                </div>
            )}
            
            {activeTab === 'integrations' && (
                <div className="animate-tab-content-fade-in max-w-lg mx-auto grid grid-cols-2 gap-8">
                    {(integrations.items || []).map((item, index) => {
                        return (
                            <Animated key={index} delay={100 + index * 100}>
                                <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
                                    {renderIcon(item.icon, item.name, "h-8 w-8 text-[var(--color-primary)]")}
                                    <span className="font-semibold text-base text-[var(--color-text-secondary)]">{item.name}</span>
                                </div>
                            </Animated>
                        );
                    })}
                </div>
            )}

            {activeTab === 'advancedFeatures' && (
                 <div className="animate-tab-content-fade-in max-w-4xl mx-auto">
                    <ul className="space-y-4">
                        {(advancedFeatures.items || []).map((item, index) => (
                            <Animated key={index} delay={100 + index * 50}>
                                <li className="flex items-start text-base bg-white p-6 rounded-lg shadow-sm">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                                    <span className="text-[var(--color-text-secondary)]">{item}</span>
                                </li>
                            </Animated>
                        ))}
                    </ul>
                </div>
            )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--color-secondary)] text-[var(--color-text-on-primary)] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-no-repeat bg-center opacity-5" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]" style={{ transform: 'rotate(180deg)' }}>
            <svg preserveAspectRatio="none" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="block w-[calc(100%)] h-[120px]">
                <path d="M0 31.2543C288 -31.2543 576 93.7628 864 80.0107C1152 66.2586 1440 -1.25427 1440 47.4984V120H0V31.2543Z" style={{ fill: 'var(--color-background)' }}></path>
            </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative">
          <Animated>
              <h2 className="text-2xl md:text-3xl font-bold">{finalCta.title}</h2>
              <p className="mt-4 mb-8 max-w-2xl mx-auto opacity-90">{finalCta.subtitle}</p>
              <a href="#contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-text-on-primary)] font-bold py-3 px-10 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105">{finalCta.cta}</a>
          </Animated>
        </div>
      </section>
    </div>
  );
};

export default SalaryDeductionPage;