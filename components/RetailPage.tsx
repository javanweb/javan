import React, { useState, useEffect, useRef } from 'react';
import type { RetailPage } from '../siteData';
import { 
    TransactionIcon, InventoryIcon, CrmIcon, ReportsIcon, PosDeviceIcon, WarehouseManagementIcon,
    AccountingIcon, CustomerClubIcon, UserManagementIcon, DashboardIcon, BarcodeScannerIcon,
    ReceiptPrinterIcon, CreditCardTerminalIcon, SmsPanelIcon, ECommerceIcon, CheckCircleIcon,
    DesktopComputerIcon, StoreIcon, ShieldCheckIcon, PaperAirplaneIcon, ChevronDownIcon,
    CogIcon, CalculatorIcon, ClockIcon, ChartBarIcon, BuildingOfficeIcon,
    // FIX: Import 'JavanWebiLogo' to resolve the 'Cannot find name' error.
    JavanWebiLogo
} from './Icons';

const iconMap: { [key: string]: React.ElementType } = {
  TransactionIcon, InventoryIcon, CrmIcon, ReportsIcon, PosDeviceIcon, WarehouseManagementIcon,
  AccountingIcon, CustomerClubIcon, UserManagementIcon, DashboardIcon, BarcodeScannerIcon,
  ReceiptPrinterIcon, CreditCardTerminalIcon, SmsPanelIcon, ECommerceIcon, CheckCircleIcon,
  DesktopComputerIcon, StoreIcon, ShieldCheckIcon, CogIcon, CalculatorIcon, ClockIcon, ChartBarIcon, BuildingOfficeIcon
};

interface RetailPageProps {
  content: RetailPage;
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


const RetailPage: React.FC<RetailPageProps> = ({ content, setView }) => {
  const { hero, challenges, features, integrations, keyAspects, finalCta } = content;
  const [activeTab, setActiveTab] = useState('features');
  const [activeFeature, setActiveFeature] = useState<FeatureItem | null>(null);
  const [activeSpecIndex, setActiveSpecIndex] = useState(0);
  const [modalContent, setModalContent] = useState<any | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const leaveTimeout = useRef<number | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

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

  const detailedGoals = [
    {
      icon: CogIcon,
      title: "مدیریت یکپارچه عملیات فروشگاهی",
      description: "تمام فرآیندهای اصلی فروشگاه از ورود کالا تا فروش و گزارش‌گیری در یک سیستم هماهنگ انجام می‌شود."
    },
    {
      icon: CalculatorIcon,
      title: "ثبت دقیق تراکنش‌ها و جلوگیری از اشتباهات مالی",
      description: "با ثبت خودکار اعداد، قیمت‌ها، مالیات و تخفیف‌ها، احتمال خطای انسانی به حداقل می‌رسد."
    },
    {
      icon: DashboardIcon,
      title: "کنترل و نظارت لحظه‌ای بر کسب‌وکار",
      description: "مدیر می‌تواند در هر لحظه از طریق نرم‌افزار (یا اپلیکیشن همراه) وضعیت فروش، سود، موجودی انبار و پرداخت‌ها را مشاهده کند."
    },
    {
      icon: ClockIcon,
      title: "افزایش بهره‌وری و صرفه‌جویی در زمان",
      description: "عملیات ثبت فاکتور، گزارش‌گیری، محاسبه سود و موجودی کالا با چند کلیک انجام می‌شود، بدون نیاز به محاسبات دستی یا نرم‌افزارهای جداگانه."
    },
    {
      icon: ChartBarIcon,
      title: "تصمیم‌گیری آگاهانه و مبتنی بر داده‌ها",
      description: "نرم‌افزار با ارائه نمودارها، گزارش‌های مقایسه‌ای و شاخص‌های مالی به مدیر کمک می‌کند تا تصمیمات دقیق‌تری برای خرید، قیمت‌گذاری یا سرمایه‌گذاری بگیرد."
    },
    {
      icon: ShieldCheckIcon,
      title: "افزایش امنیت اطلاعات مالی فروشگاه",
      description: "دسترسی کاربران بر اساس نقش و سطح آن‌ها تعیین می‌شود تا هیچ شخص غیرمجاز نتواند به اطلاعات حساس دست پیدا کند."
    },
    {
      icon: BuildingOfficeIcon,
      title: "پشتیبانی از رشد و توسعه فروشگاه",
      description: "نرم‌افزارهای حرفه‌ای معمولاً قابلیت پشتیبانی از چند شعبه، چند انبار یا حتی چند شرکت را دارند تا در آینده نیز پاسخگوی رشد کسب‌وکار باشند."
    }
  ];

  const integrationModalData = {
    'بارکدخوان، پرینتر فیش‌زن و کارت‌خوان': {
      title: 'اتصال یکپارچه با سخت‌افزار فروشگاهی',
      image: 'https://images.unsplash.com/photo-1573229648362-ce68f237f3f3?q=80&w=2070&auto=format&fit=crop',
      text: [
        'نرم‌افزار حسابداری ما به‌صورت کامل از بارکدخوان، پرینتر فیش‌زن و کارت‌خوان بانکی پشتیبانی می‌کند و تمام نیازهای فروشگاهی شما را در یک سیستم هوشمند جمع کرده است.',
        'با این نرم‌افزار می‌توانید به‌سرعت فاکتور صادر کنید، پرداخت‌ها را به‌صورت خودکار انجام دهید و گزارش‌های دقیق فروش و موجودی کالا را دریافت کنید.',
        'طراحی ساده و محیط کاربرپسند آن باعث می‌شود حتی کاربران مبتدی هم به‌راحتی از تمام امکانات استفاده کنند.',
        'یک انتخاب ایده‌آل برای فروشگاه‌ها، سوپرمارکت‌ها و کسب‌وکارهای خدماتی مدرن.'
      ]
    }
  };

  const handleMouseEnter = (itemName: keyof typeof integrationModalData) => {
      if (leaveTimeout.current) {
          clearTimeout(leaveTimeout.current);
      }
      const data = integrationModalData[itemName];
      if (data) {
          setModalContent(data);
          setIsModalVisible(true);
      }
  };

  const handleMouseLeave = () => {
      leaveTimeout.current = window.setTimeout(() => {
          setIsModalVisible(false);
      }, 200); // A small delay
  };

  useEffect(() => {
    if (features.items && features.items.length > 0 && !activeFeature) {
      setActiveFeature(features.items[0]);
    }
  }, [features.items, activeFeature]);

  const tabs = [
    { id: 'features', title: 'امکانات و ماژول‌ها' },
    { id: 'specs', title: 'مشخصات فنی' },
  ];
  
  const benefits = challenges.items.map(item => {
    // A simple transformation from challenge to benefit
    let benefitText = item.title;
    if (benefitText.startsWith("حجم بالای")) benefitText = benefitText.replace("حجم بالای", "مدیریت سریع");
    if (benefitText.startsWith("تنوع")) benefitText = benefitText.replace("تنوع", "کنترل آسان");
    if (benefitText.startsWith("کنترل دقیق")) benefitText = benefitText;
    if (benefitText.startsWith("مدیریت تعامل")) benefitText = benefitText;
    return benefitText;
  });

  return (
    <div className="bg-[var(--color-background)]">
      {/* Main Product Info Section */}
      <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image */}
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

          {/* Right Column: Details */}
          <Animated delay={200} className="flex flex-col gap-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 text-sm text-[var(--color-text-secondary)]">
                <li><a href="#" className="hover:text-[var(--color-primary)]">خانه</a></li>
                <li><span className="opacity-50">/</span></li>
                <li><a href="#" className="hover:text-[var(--color-primary)]">محصولات</a></li>
                <li><span className="opacity-50">/</span></li>
                <li className="font-medium text-[var(--color-text-primary)]" aria-current="page">نرم‌افزار فروشگاهی</li>
              </ol>
            </nav>

            <div>
                <span className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold px-3 py-1 rounded-full mb-3">{hero.badge}</span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">{hero.title}</h1>
                <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed">{hero.subtitle}</p>
            </div>

            <div className="bg-white/50 border border-[var(--color-border)] rounded-lg p-6">
                <h2 className="text-lg font-bold mb-4">مزایای کلیدی:</h2>
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

            <div className="text-xs text-[var(--color-text-secondary)]">
                <p>نسخه‌ها: 
                    {(keyAspects.items.find(item => item.title === 'نسخه‌های نرم‌افزار')?.points || []).map((version, i) => (
                        <span key={i} className="bg-gray-200/50 border border-gray-300/50 text-gray-600 px-2 py-0.5 rounded-md mr-1">{version}</span>
                    ))}
                </p>
            </div>
          </Animated>
        </div>
      </main>

      {/* Definition Section */}
      <section className="py-20 sm:py-24 bg-gray-50/50 border-t border-[var(--color-border)] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            <Animated className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-4xl">🧾</span>
                  <span>تعریف و هدف نرم‌افزار حسابداری فروشگاهی</span>
              </h2>
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">{`نرم‌افزار حسابداری فروشگاهی، یک سیستم هوشمند و جامع است که برای مدیریت مالی، انبارداری، فروش، خرید، گزارش‌گیری و کنترل عملیات روزمره فروشگاه‌ها طراحی شده است. این نرم‌افزار وظیفه دارد تمام تراکنش‌های مالی و تجاری فروشگاه را به‌صورت دقیق، خودکار و یکپارچه ثبت و تحلیل کند تا مدیر یا حسابدار بتواند در هر لحظه از وضعیت مالی، موجودی کالا و سود و زیان کسب‌وکار خود اطلاع دقیق داشته باشد.`}</p>
              
              <div className="bg-white rounded-xl shadow-lg border border-[var(--color-border)] p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                      <span>🎯</span>
                      <span>هدف اصلی نرم‌افزار</span>
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">{`هدف از طراحی نرم‌افزار حسابداری فروشگاهی، کاهش خطای انسانی، افزایش سرعت کار، و ایجاد شفافیت مالی کامل در کسب‌وکار است. در واقع این نرم‌افزار جایگزینی برای دفاتر حسابداری سنتی و یادداشت‌های پراکنده است، اما با قابلیت‌هایی بسیار پیشرفته‌تر.`}</p>
                  
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <span>⚙️</span>
                      <span>اهداف جزئی و عملکردی</span>
                  </h3>
                  <div className="border-t border-[var(--color-border)] rounded-lg overflow-hidden">
                      {detailedGoals.map((goal, index) => {
                          const Icon = goal.icon;
                          const isOpen = openAccordion === index;
                          return (
                              <div key={index} className="border-b border-[var(--color-border)] last:border-b-0">
                                  <button onClick={() => setOpenAccordion(isOpen ? null : index)} className="w-full flex justify-between items-center text-right p-4 hover:bg-gray-50/50 transition-colors">
                                      <div className="flex items-center gap-4">
                                          <Icon className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                                          <span className="font-semibold text-base text-[var(--color-text-primary)]">{goal.title}</span>
                                      </div>
                                      <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                  </button>
                                  <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                      <div className="overflow-hidden">
                                        <p className="px-4 pb-4 pt-0 text-sm text-[var(--color-text-secondary)] leading-relaxed">{goal.description}</p>
                                      </div>
                                  </div>
                              </div>
                          );
                      })}
                  </div>
              </div>
            </Animated>
            
            <Animated className="lg:col-span-2 flex items-center justify-center h-full" delay={200}>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
                <div className="absolute inset-2 bg-[var(--color-primary)]/10 rounded-full blur-2xl transition-all duration-1000 animate-pulse group-hover:bg-[var(--color-primary)]/20"></div>

                <div className="absolute top-0 left-0 w-full h-full transition-transform duration-700 group-hover:rotate-[-8deg]">
                    <div className="bg-white/70 backdrop-blur-md h-full w-full p-6 rounded-2xl shadow-lg border border-gray-200/50 flex flex-col justify-center">
                        <h4 className="font-semibold text-sm text-gray-500">گزارشات فروش</h4>
                        <div className="w-full h-24 bg-gray-100 mt-2 rounded-md flex items-end justify-around p-2 gap-1">{[4, 7, 5, 8, 6].map((h, i) => <div key={i} className="bg-[var(--color-primary)]/20 w-full rounded-t-sm" style={{height: `${h*10}%`}}></div>)}</div>
                    </div>
                </div>
                
                <div className="absolute top-0 left-0 w-full h-full transition-transform duration-700 group-hover:rotate-[8deg]">
                    <div className="bg-white/70 backdrop-blur-md h-full w-full p-6 rounded-2xl shadow-lg border border-gray-200/50 flex flex-col justify-center">
                        <h4 className="font-semibold text-sm text-gray-500">مدیریت موجودی</h4>
                        <div className="w-full h-24 bg-gray-100 mt-2 rounded-md p-2 space-y-2">{[...Array(3)].map((_, i) => <div key={i} className="h-4 bg-gray-200 rounded-sm w-full animate-pulse" style={{animationDelay: `${i*100}ms`}}></div>)}</div>
                    </div>
                </div>
                
                <div className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center p-6 border border-gray-200 transition-transform duration-700 group-hover:scale-110">
                  <JavanWebiLogo className="w-16 h-16 text-[var(--color-primary)] mb-4" />
                  <h3 className="font-extrabold text-lg text-[var(--color-text-primary)]">نرم‌افزار یکپارچه</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">فروش | انبار | حسابداری</p>
                </div>
              </div>
            </Animated>

          </div>
        </div>
      </section>
      
      {/* Integrations Section */}
      <section className="py-16 sm:py-20 bg-[var(--color-card-background)] border-y border-[var(--color-border)]">
        <div className="container mx-auto px-4 sm:px-6">
          <Animated>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">{integrations.title}</h2>
              <p className="mt-3 max-w-2xl mx-auto text-[var(--color-text-secondary)]">{integrations.subtitle}</p>
              <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded-full"></div>
            </div>
          </Animated>
          <Animated delay={200}>
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {(integrations.items || []).map((item, index) => {
                const isTrigger = item.name === 'بارکدخوان، پرینتر فیش‌زن و کارت‌خوان';
                return (
                  <div 
                    key={index} 
                    className="group flex flex-col items-center text-center p-4 rounded-xl border-2 border-transparent transition-all duration-300 hover:bg-white hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                    onMouseEnter={isTrigger ? () => handleMouseEnter(item.name as any) : undefined}
                    onMouseLeave={isTrigger ? handleMouseLeave : undefined}
                  >
                    {renderIcon(item.icon, item.name, "h-10 w-10 mb-3 text-gray-500 group-hover:text-[var(--color-primary)] transition-colors duration-300")}
                    <h3 className={`text-sm font-semibold text-gray-600 group-hover:text-[var(--color-text-primary)] transition-colors duration-300`}>{item.name}</h3>
                  </div>
                );
              })}
            </div>
          </Animated>
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
                
                {/* START: Left column (sticky details) */}
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
                {/* END: Left column */}

                {/* START: Right column (icon grid) */}
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
                {/* END: Right column */}
              </div>
            )}
            {activeTab === 'specs' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Right Column: Navigation */}
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

                    {/* Left Column: Content */}
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

      {/* Comments Section */}
      <section className="py-16 sm:py-20 bg-gray-50/50 border-t border-[var(--color-border)]">
        <div className="container mx-auto px-4 sm:px-6">
          <Animated>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200/80">
              
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-dotted border-gray-300">
                <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-gray-800">
                  <SmsPanelIcon className="w-7 h-7 text-[var(--color-primary)]" />
                  نظرات
                </h2>
                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors">
                  ارسال نظر
                  <PaperAirplaneIcon className="w-5 h-5" style={{transform: 'rotate(-45deg)'}} />
                </a>
              </div>

              {/* Login Prompt */}
              <button 
                onClick={() => setView('registration')}
                className="w-full text-left mt-6 bg-amber-100/60 p-3 rounded-lg hover:bg-amber-200/70 transition-colors duration-200"
              >
                <p className="text-sm font-semibold text-center text-amber-900">برای ارسال نظر ابتدا وارد سایت شوید.</p>
              </button>
              
              {/* Main Content Area */}
              <div className="flex items-start mt-6 py-8 min-h-[250px]">
                {/* Image placeholder */}
                <div className="w-2/5 lg:w-1/3 flex justify-center items-center">
                    <CrmIcon className="w-40 h-40 text-gray-200" />
                </div>
                {/* Comments list (empty for now) */}
                <div className="w-3/5 lg:w-2/3">
                  {/* Comments will be rendered here */}
                </div>
              </div>

              {/* Footer */}
              <div className="text-center pt-4 border-t border-dotted border-gray-300">
                 <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                  <span>نمایش نظرات بیشتر</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </a>
              </div>

            </div>
          </Animated>
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

      {isModalVisible && modalContent && (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in"
        >
            <div 
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl m-4 flex flex-row overflow-hidden anim-zoomIn"
              onMouseEnter={() => { if (leaveTimeout.current) clearTimeout(leaveTimeout.current); }}
              onMouseLeave={handleMouseLeave}
            >
              {/* Right Column (Image) */}
              <div className="w-1/2 hidden md:block">
                <img src={modalContent.image} className="w-full h-full object-cover" alt={modalContent.title} />
              </div>
              {/* Left Column (Text) */}
              <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] mb-6">{modalContent.title}</h2>
                <div className="space-y-4 text-[var(--color-text-secondary)]">
                  {modalContent.text.map((p: string, i: number) => <p key={i} className="text-sm sm:text-base leading-relaxed">{p}</p>)}
                </div>
              </div>
            </div>
        </div>
    )}
    </div>
  );
};

export default RetailPage;