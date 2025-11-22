import React, { useState, useEffect, useRef } from 'react';
import type { PayrollPage as PayrollPageType } from '../siteData';
import { 
    CheckCircleIcon, UsersIcon, CogIcon, ClockIcon, CurrencyIcon, TreasuryIcon, 
    ReportsIcon, ChartBarIcon, DocumentDuplicateIcon, FinanceIcon, ShieldCheckIcon, CalculatorIcon, LinkIcon
} from './Icons';

const iconMap: { [key: string]: React.ElementType } = {
  UsersIcon, CogIcon, ClockIcon, CurrencyIcon, TreasuryIcon, ReportsIcon, ChartBarIcon, DocumentDuplicateIcon, FinanceIcon,
  CheckCircleIcon, ShieldCheckIcon, CalculatorIcon, LinkIcon
};

interface PayrollPageProps {
  content: PayrollPageType;
  setView: (view: 'homepage' | 'login' | 'dashboard' | 'registration' | 'otp_verification' | 'cta_login') => void;
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
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
            }}
        >
            {children}
        </div>
    );
};

type FeatureItem = {
    icon: string;
    title: string;
    points: string[];
};

// FIX: Changed to a named export to resolve the "no default export" error in App.tsx.
export const PayrollPage: React.FC<PayrollPageProps> = ({ content, setView }) => {
  const { hero, challenges, features, keyAspects, finalCta } = content;
  const [activeTab, setActiveTab] = useState('features');
  const [activeFeature, setActiveFeature] = useState<FeatureItem | null>(null);
  const [activeSpecIndex, setActiveSpecIndex] = useState(0);

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

  useEffect(() => {
    if (features.items && features.items.length > 0 && !activeFeature) {
      setActiveFeature(features.items[0]);
    }
  }, [features.items, activeFeature]);

  const tabs = [
    { id: 'features', title: 'امکانات کلیدی' },
    { id: 'keyAspects', title: 'ویژگی‌های جامع' },
  ];
  
  const benefits = challenges.items.map(item => item.title);

  return (
    <div className="bg-[var(--color-background)]">
      {/* Main Product Info Section */}
      <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <Animated className="lg:sticky top-28">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-[var(--color-border)]">
              <img 
                src={hero.imageUrl} 
                alt={hero.title} 
                className="w-full h-auto object-cover rounded-xl"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </Animated>

          <Animated delay={200} className="flex flex-col gap-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 text-sm text-[var(--color-text-secondary)]">
                <li><a href="#" className="hover:text-[var(--color-primary)]">خانه</a></li>
                <li><span className="opacity-50">/</span></li>
                <li><a href="#" className="hover:text-[var(--color-primary)]">محصولات</a></li>
                <li><span className="opacity-50">/</span></li>
                <li className="font-medium text-[var(--color-text-primary)]" aria-current="page">حقوق و دستمزد</li>
              </ol>
            </nav>

            <div>
                <span className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold px-3 py-1 rounded-full mb-3">{hero.badge}</span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">{hero.title}</h1>
                <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed">{hero.subtitle}</p>
            </div>

            <div className="bg-white/50 border border-[var(--color-border)] rounded-lg p-6">
                <h2 className="text-lg font-bold mb-4">اهداف اصلی:</h2>
                <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                         <li key={index} className="flex items-center text-sm text-[var(--color-text-secondary)]">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" />
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="border-t border-[var(--color-border)] pt-6 space-y-4">
                <a href="#contact" className="w-full text-center block bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-text-on-primary)] font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg text-lg animate-pulse-glow">{hero.ctaPrimary}</a>
                <a href="#features" className="w-full text-center block bg-transparent hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold py-3 px-8 rounded-lg transition-all duration-300 border border-[var(--color-primary)]">{hero.ctaSecondary}</a>
            </div>
          </Animated>
        </div>
      </main>

      {/* Challenges Section */}
      <section className="py-20 sm:py-24 bg-gray-50/50 border-t border-[var(--color-border)] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
            <Animated>
                <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold">{challenges.title}</h2>
                <p className="mt-4 max-w-3xl mx-auto text-[var(--color-text-secondary)]">{challenges.subtitle}</p>
                <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded-full"></div>
                </div>
            </Animated>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {(challenges.items || []).map((item, index) => {
                return (
                    <Animated key={index} delay={100 + index * 100}>
                        <div className="group bg-white rounded-xl shadow-lg hover:shadow-primary/20 hover:shadow-2xl transition-all duration-300 p-8 text-center h-full transform hover:-translate-y-2">
                        <div className="inline-block bg-[var(--color-primary)]/10 group-hover:bg-[var(--color-primary)]/20 p-4 rounded-full mb-5 transition-colors duration-300">
                           {renderIcon(item.icon, item.title, "h-10 w-10 text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110")}
                        </div>
                        <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.description}</p>
                        </div>
                    </Animated>
                );
                })}
            </div>
        </div>
      </section>
      
      {/* Tabs Section */}
      <section id="features" className="py-16 sm:py-20 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="sticky top-[75px] bg-[var(--color-background)] z-30 py-4 mb-12">
            <div className="flex justify-center">
              <div className="bg-gray-200/50 rounded-full p-1 flex items-center gap-1 border border-gray-300/50 shadow-sm">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-2.5 px-6 rounded-full font-bold text-base transition-all duration-300
                      ${activeTab === tab.id
                        ? 'bg-[var(--color-primary)] text-[var(--color-text-on-primary)] shadow-md'
                        : 'text-[var(--color-text-secondary)] hover:bg-white/60 hover:text-[var(--color-text-primary)]'
                      }`
                    }
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-tab-content-fade-in relative">
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                <div className="lg:sticky top-48">
                  {activeFeature && (
                    <div key={activeFeature.title} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 animate-fade-in-up">
                      <div className="flex items-center gap-5 mb-6">
                        {renderIcon(activeFeature.icon, activeFeature.title, "h-16 w-16 text-[var(--color-primary)] flex-shrink-0")}
                        <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{activeFeature.title}</h3>
                      </div>
                      <ul className="space-y-4 text-base text-[var(--color-text-secondary)]">
                        {(activeFeature.points || []).map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start">
                            <CheckCircleIcon className="w-6 h-6 text-green-500 mt-0.5 ml-3 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {(features.items || []).map((feature, index) => {
                    const isActive = activeFeature?.title === feature.title;
                    return (
                      <div 
                        key={index}
                        onMouseEnter={() => setActiveFeature(feature)}
                        className={`group flex flex-col items-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? 'bg-white shadow-lg border-[var(--color-primary)] scale-105' 
                            : 'bg-gray-50 border-transparent hover:bg-white hover:shadow-md'
                        }`}
                      >
                        {renderIcon(feature.icon, feature.title, `h-12 w-12 mb-3 transition-colors duration-300 ${isActive ? 'text-[var(--color-primary)]' : 'text-gray-500 group-hover:text-[var(--color-primary)]'}`)}
                        <h3 className={`text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-[var(--color-text-primary)]' : 'text-gray-600'}`}>{feature.title}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {activeTab === 'keyAspects' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1 lg:sticky top-48">
                        <div className="flex flex-col gap-2 bg-gray-100/50 p-3 rounded-xl border">
                            {(keyAspects.items || []).map((spec, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSpecIndex(index)}
                                    className={`w-full text-right p-4 rounded-lg transition-all duration-300 flex items-center gap-4 ${
                                        activeSpecIndex === index
                                            ? 'bg-white shadow-lg text-[var(--color-primary)] font-bold'
                                            : 'text-[var(--color-text-secondary)] hover:bg-white/70 hover:text-[var(--color-text-primary)]'
                                    }`}
                                >
                                    {renderIcon(spec.icon, spec.title, "w-10 h-10 flex-shrink-0")}
                                    <span className="text-lg">{spec.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 min-h-[400px]">
                        {keyAspects.items && keyAspects.items[activeSpecIndex] && (
                            <div key={activeSpecIndex} className="bg-white p-8 rounded-2xl shadow-xl border animate-fade-in-up">
                                <div className="flex items-center gap-4 mb-8">
                                    {renderIcon(keyAspects.items[activeSpecIndex].icon, keyAspects.items[activeSpecIndex].title, "w-12 h-12 text-[var(--color-primary)]")}
                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                                        {keyAspects.items[activeSpecIndex].title}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {(keyAspects.items[activeSpecIndex].points || []).map((point, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200/80">
                                            <CheckCircleIcon className="w-8 h-8 text-green-500 flex-shrink-0" />
                                            <span className="text-[var(--color-text-secondary)] text-base font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
          </div>
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
              <p className="mt-4 mb-8 max-w-xl mx-auto opacity-90">{finalCta.subtitle}</p>
              <a href="#contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-text-on-primary)] font-bold py-3 px-10 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105">{finalCta.cta}</a>
          </Animated>
        </div>
      </section>
    </div>
  );
};