import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import Analytics from './components/Analytics';
import Stats from './components/Stats';
import About from './components/About';
import Footer from './components/Footer';
import Dashboard from './dashbord';
import Login from './components/Login';
import Registration from './components/Registration';
import OtpVerification from './components/OtpVerification';
import { siteContent as initialSiteContent } from './siteData';
import type { SiteContent, NavLink, Sublink } from './siteData';
import PageView from './components/PageView';
import CtaLogin from './components/CtaLogin';
import ProductsPage from './components/ProductsPage';
import CommercePage from './components/CommercePage';
import IndustrialPage from './components/IndustrialPage';
import RetailPage from './components/RetailPage';
import TaxpayerSystemPage from './components/TaxpayerSystemPage';
import RestaurantPage from './components/RestaurantPage';
import HotelHallPage from './components/HotelHallPage';
// FIX: Changed to a named import to match the component's export, resolving the "no default export" error.
import { PayrollPage } from './components/PayrollPage';
import SoftwareShowcase from './components/SoftwareShowcase';
import MoreFeatures from './components/MoreFeatures';
import InsurancePage from './components/InsurancePage';
import SalaryDeductionPage from './components/SalaryDeductionPage';
import OrderRegistrationPage from './components/OrderRegistrationPage';


const Preloader: React.FC<{ isLoaded: boolean }> = ({ isLoaded }) => (
    <div className={`preloader ${isLoaded ? 'loaded' : ''}`}>
        <div className="diamond-loader">
            {[...Array(9)].map((_, i) => <div key={i} className="dot"></div>)}
        </div>
    </div>
);

const App: React.FC = () => {
  const [loadingState, setLoadingState] = useState<'loading' | 'loaded' | 'inactive'>('loading');
  const [view, setView] = useState<'homepage' | 'login' | 'dashboard' | 'registration' | 'otp_verification' | 'cta_login'>('homepage');
  const [siteContent, setSiteContent] = useState<SiteContent | null>(null);
  const [currentPage, setCurrentPage] = useState<NavLink | Sublink | null>(null);
  const [registrationData, setRegistrationData] = useState<{ mobile: string; nationalId: string; firstName: string; lastName: string; } | null>(null);

  // Effect for preloader
  useEffect(() => {
    const loadTimer = setTimeout(() => {
        setLoadingState('loaded'); // Trigger the exit animation
    }, 2500); // Simulate loading for 2.5 seconds

    const inactiveTimer = setTimeout(() => {
        setLoadingState('inactive'); // Remove from DOM after animation
    }, 2500 + 800); // 2.5s wait + 0.8s animation

    return () => {
        clearTimeout(loadTimer);
        clearTimeout(inactiveTimer);
    };
  }, []);

  // Effect for initial content loading
  useEffect(() => {
    // Load site content from localStorage, or use initial content as a fallback.
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      try {
        setSiteContent(JSON.parse(savedContent));
      } catch (error) {
        console.error("Failed to parse site content from localStorage", error);
        // Fallback to initial content if parsing fails
        setSiteContent(initialSiteContent);
      }
    } else {
      // Load initial content if nothing is saved
      setSiteContent(initialSiteContent);
    }

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setView('dashboard');
    }
  }, []);

  // Effect for applying theme and body classes whenever siteContent or view changes
  useEffect(() => {
    if (!siteContent) return;

    const body = document.body;
    body.className = ''; // Reset all classes first

    // 1. Apply Theme
    const theme = siteContent.theme || 'default';
    let customStyleTag = document.getElementById('custom-theme-styles');

    if (theme === 'custom' && siteContent.themeColors) {
      if (!customStyleTag) {
        customStyleTag = document.createElement('style');
        customStyleTag.id = 'custom-theme-styles';
        document.head.appendChild(customStyleTag);
      }
      
      const colors = siteContent.themeColors;
      customStyleTag.innerHTML = `
        :root, body {
            --color-primary: ${colors.primary};
            --color-primary-hover: ${colors.primaryHover};
            --color-secondary: ${colors.secondary};
            --color-background: ${colors.background};
            --color-card-background: ${colors.cardBackground};
            --color-border: ${colors.border};
            --color-text-primary: ${colors.textPrimary};
            --color-text-secondary: ${colors.textSecondary};
            --color-text-on-primary: ${colors.textOnPrimary};
            --color-hero-gradient: ${colors.heroGradient};
        }
      `;
    } else {
      if (customStyleTag) {
        customStyleTag.innerHTML = ''; // Clear custom styles if not using a custom theme
      }
      body.classList.add(`theme-${theme}`);
    }

    // 2. Apply view-specific styles
    if (view === 'dashboard') {
      body.style.overflow = 'hidden'; // Force hide body scrollbar in dashboard
    } else {
      body.style.overflow = ''; // Reset for other views
    }
    
    if (view === 'login' || view === 'dashboard' || view === 'registration' || view === 'otp_verification' || view === 'cta_login') {
      body.classList.add('bg-gray-100');
    } else {
      // For homepage, the background is controlled by the CSS variable
      body.style.backgroundColor = 'var(--color-background)';
    }

  }, [siteContent, view]);

  const handleNavigateFromDashboard = (page: NavLink | Sublink) => {
    setCurrentPage(page);
    setView('homepage');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHomepage = () => {
    setCurrentPage(null);
    setView('homepage');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: NavLink | Sublink) => {
    if (page.href === '/') {
        goToHomepage();
        return;
    }
    // Special handling for dynamic pages
    if(page.name === 'فروشگاهی' || page.name === 'محصولات' || page.name === 'بازرگانی' || page.name === 'صنعتی' || page.name === 'سامانه مودیان مالیاتی' || page.name === 'رستورانی' || page.name === 'هتل و تالار' || page.name === 'حقوق و دستمزد' || page.name === 'زیر سیستم بیمه' || page.name === 'زیر سیستم کسر از حقوق' || page.name === 'زیر سیستم ثبت سفارش') {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      return;
    }
    if(page.content && page.content.trim() !== '<p><br></p>' && page.content.trim() !== '') {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }
  };

  if (!siteContent) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-xl font-semibold">درحال بارگذاری...</div>
        </div>
    );
  }

  if (view === 'login') {
    return <Login 
              onLoginSuccess={() => {
                localStorage.setItem('isLoggedIn', 'true');
                setView('dashboard');
              }} 
              onBack={() => { setView('homepage'); goToHomepage(); }}
              onGoToRegister={() => setView('registration')}
           />;
  }

  if (view === 'registration') {
    return <Registration 
              onRegisterSuccess={(data) => { setRegistrationData(data); setView('otp_verification'); }} 
              onBack={() => { setView('homepage'); goToHomepage(); }} 
              onGoToLogin={() => setView('login')}
           />;
  }

  if (view === 'cta_login') {
    return <CtaLogin 
              onLoginSuccess={() => setView('dashboard')}
              onBack={() => { setView('homepage'); goToHomepage(); }}
              onGoToRegister={() => setView('registration')}
           />;
  }

  if (view === 'otp_verification' && registrationData) {
    return <OtpVerification 
              mobile={registrationData.mobile} 
              onVerificationSuccess={() => { 
                const usersJSON = localStorage.getItem('users');
                const users = usersJSON ? JSON.parse(usersJSON) : [];
                
                const userExists = users.some((user: any) => user.mobile === registrationData.mobile);

                if (!userExists) {
                    users.push({
                        mobile: registrationData.mobile,
                        password: registrationData.nationalId, // Use national ID as password
                        firstName: registrationData.firstName,
                        lastName: registrationData.lastName
                    });
                    localStorage.setItem('users', JSON.stringify(users));
                }

                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', JSON.stringify({
                    mobile: registrationData.mobile,
                    firstName: registrationData.firstName,
                    lastName: registrationData.lastName
                }));
                setView('dashboard'); 
              }} 
              onBack={() => setView('registration')} 
              onGoToLogin={() => setView('login')}
           />;
  }

  if (view === 'dashboard' && siteContent) {
    return <Dashboard 
            setView={setView} 
            siteContent={siteContent} 
            setSiteContent={setSiteContent}
            onNavigateFromDashboard={handleNavigateFromDashboard}
           />;
  }

  const renderCurrentPage = () => {
    if (!currentPage) return null;

    switch(currentPage.name) {
      case 'محصولات':
        return currentPage.href === '#' ? <ProductsPage content={siteContent.productsPage} /> : null;
      case 'بازرگانی':
        return <CommercePage content={siteContent.commercePage} setView={setView} />;
      case 'صنعتی':
        return <IndustrialPage content={siteContent.industrialPage} setView={setView} />;
      case 'فروشگاهی':
        return <RetailPage content={siteContent.retailPage} setView={setView} />;
      case 'سامانه مودیان مالیاتی':
        return <TaxpayerSystemPage content={siteContent.taxpayerSystemPage} setView={setView} />;
      case 'رستورانی':
        return <RestaurantPage content={siteContent.restaurantPage} setView={setView} />;
      case 'هتل و تالار':
        return <HotelHallPage content={siteContent.hotelHallPage} setView={setView} />;
      case 'حقوق و دستمزد':
        return <PayrollPage content={siteContent.payrollPage} setView={setView} />;
      case 'زیر سیستم بیمه':
        return <InsurancePage content={siteContent.insurancePage} />;
      case 'زیر سیستم کسر از حقوق':
        return <SalaryDeductionPage content={siteContent.salaryDeductionPage} />;
      case 'زیر سیستم ثبت سفارش':
        return <OrderRegistrationPage content={siteContent.orderRegistrationPage} />;
      default:
        return <PageView page={currentPage} />;
    }
  };

  return (
    <div style={{ color: 'var(--color-text-primary)', backgroundColor: 'var(--color-background)' }} className="flex flex-col min-h-screen">
      {loadingState !== 'inactive' && <Preloader isLoaded={loadingState === 'loaded'} />}
      <Header 
        setView={setView} 
        navLinks={siteContent.header.navLinks} 
        onNavigate={handleNavigate}
        onGoHome={goToHomepage}
      />
      <main className="flex-grow pt-20 flex flex-col">
        {currentPage ? (
          renderCurrentPage()
        ) : (
          <>
            <Hero content={siteContent.hero} onCtaClick={() => setView('cta_login')} />
            <Clients content={siteContent.clients} />
            <Features content={siteContent.features} onNavigate={handleNavigate} />
            <div className="lg:hidden">
              <SoftwareShowcase content={siteContent.softwareShowcase} />
            </div>
            <Analytics content={siteContent.analytics} />
            <Stats content={siteContent.stats} />
            <MoreFeatures content={siteContent.moreFeatures} />
            <About content={siteContent.about} />
          </>
        )}
      </main>
      <Footer content={siteContent.footer} />
    </div>
  );
};

export default App;