import type { FeatureData, TimelineEvent } from './types';

export interface Sublink {
  name: string;
  href: string;
  content?: string;
  sublinks?: Sublink[];
}

export interface NavLink {
  name:string;
  href: string;
  sublinks?: Sublink[];
  content?: string;
}

export interface CustomThemeColors {
  primary: string;
  primaryHover: string;
  secondary: string;
  background: string;
  cardBackground: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textOnPrimary: string;
  heroGradient: string;
}

// New interface for a feature/benefit item
export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

// New interface for the Retail Page content
export interface RetailPage {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  challenges: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  features: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  integrations: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      name: string;
    }[];
  };
  keyAspects: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

// New interface for the Products Page content
export interface ProductsPageContent {
  title: string;
  intro: string;
  products: {
    icon: string;
    title: string;
    description: string;
    href: string;
  }[];
}

// New interface for the Commerce Page content
export interface CommercePageModule {
  icon: string;
  title: string;
  points: string[];
}

export interface CommercePage {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  challenges: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  modules: {
    title: string;
    items: CommercePageModule[];
  };
  keyAspects: {
      title: string;
      items: {
        icon: string;
        title: string;
        points: string[];
      }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

// New interface for the Industrial Page content
export interface IndustrialPageModule {
  icon: string;
  title: string;
  points: string[];
}

export interface IndustrialPage {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  challenges: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  modules: {
    title: string;
    items: IndustrialPageModule[];
  };
  keyAspects: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export interface TaxpayerSystemPage {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  challenges: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  features: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  integrations: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      name: string;
    }[];
  };
  keyAspects: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
}


// New interface for Restaurant Page content
export interface RestaurantPage {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  challenges: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  features: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  integrations: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      name: string;
    }[];
  };
  keyAspects: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

// New interface for Hotel & Hall Page content (copy of RestaurantPage)
export interface HotelHallPage {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  challenges: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  features: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  integrations: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      name: string;
    }[];
  };
  keyAspects: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export interface PayrollPage {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  challenges: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  features: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  integrations: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      name: string;
    }[];
  };
  keyAspects: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
}


export interface InsurancePage {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  importance: {
    title: string;
    items: string[];
  };
  features: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  integrations: {
    title: string;
    items: {
      icon: string;
      name: string;
    }[];
  };
  advancedFeatures: {
    title: string;
    items: string[];
  };
  targetIndustries: {
    title: string;
    items: {
      icon: string;
      name: string;
    }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export interface SalaryDeductionPage {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  importance: {
    title: string;
    items: string[];
  };
  features: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  integrations: {
    title: string;
    items: {
      icon: string;
      name: string;
    }[];
  };
  advancedFeatures: {
    title: string;
    items: string[];
    examples: {
      title: string,
      items: string[]
    }
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export interface OrderRegistrationPage {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  introduction: string;
  keyObjectives: {
    title: string;
    items: string[];
  };
  features: {
    title: string;
    items: {
      icon: string;
      title: string;
      points: string[];
    }[];
  };
  integrations: {
    title: string;
    items: {
      icon: string;
      name: string;
    }[];
  };
  reports: {
    title: string;
    items: string[];
  };
  benefits: {
    title: string;
    items: string[];
  };
  summary: string;
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export interface SiteContent {
  theme: string;
  themeColors?: CustomThemeColors;
  header: {
    navLinks: NavLink[];
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
    heroImageMain: string;
    heroImageFloating1: string;
    heroImageFloating2: string;
    heroImageFloating3: string;
    heroImageShowcase: string;
    backgroundImage: string;
  };
  clients: {
    title: string;
    subtitle: string;
    logos: { name: string; imageUrl: string; url?: string; }[];
  };
  features: {
    title: string;
    items: FeatureData[];
  };
  softwareShowcase: {
    title: string;
    subtitle: string;
    slides: string[];
  };
  analytics: {
    title1: string;
    paragraph1: string;
    title2: string;
    paragraph2: string;
    cta: string;
    imageUrl: string;
  };
  stats: {
    experience: { value: string; label: string };
    customers: { value: string; label: string };
    team: { value: string; label: string };
    satisfaction: { value: string; label: string };
  };
  moreFeatures: {
    title: string;
    items: FeatureData[];
  };
  about: {
    title: string;
    paragraph: string;
    cta: string;
    timeline: TimelineEvent[];
    imageUrl: string;
  };
  footer: {
    description: string;
    contact: {
      title: string;
      phone: string;
      email: string;
      address?: string;
    };
    copyright: string;
  };
  retailPage: RetailPage;
  productsPage: ProductsPageContent;
  commercePage: CommercePage;
  industrialPage: IndustrialPage;
  taxpayerSystemPage: TaxpayerSystemPage;
  restaurantPage: RestaurantPage;
  hotelHallPage: HotelHallPage;
  payrollPage: PayrollPage;
  insurancePage: InsurancePage;
  salaryDeductionPage: SalaryDeductionPage;
  orderRegistrationPage: OrderRegistrationPage;
}

export const defaultThemeColors: CustomThemeColors = {
  primary: '#009688',
  primaryHover: '#00796B',
  secondary: '#263238',
  background: '#F5F5F5',
  cardBackground: '#ffffff',
  border: '#e5e7eb',
  textPrimary: '#1f2937',
  textSecondary: '#4b5563',
  textOnPrimary: '#ffffff',
  heroGradient: '#E0F2F1',
};

export const siteContent: SiteContent = {
  theme: 'default',
  themeColors: defaultThemeColors,
  header: {
    navLinks: [
      { name: 'صفحه اصلی', href: '/', content: '' },
      { 
        name: 'محصولات', 
        href: '#',
        content: '',
        sublinks: [
            {
              name: 'سیستم های ما',
              href: '#',
              sublinks: [
                { 
                  name: 'محصولات', 
                  href: '#', 
                  content: ''
                },
                { name: 'فروشگاهی', href: '#', content: '' },
                { name: 'بازرگانی', href: '#', content: '' },
                { name: 'صنعتی', href: '#', content: '' },
                { name: 'رستورانی', href: '#', content: '' },
                { name: 'هتل و تالار', href: '#', content: '' },
                { name: 'سامانه مودیان مالیاتی', href: '#', content: '' },
                { name: 'حقوق و دستمزد', href: '#', content: '' },
              ]
            },
            {
              name: 'زیر سیستم های ما',
              href: '#',
              sublinks: [
                {
                  name: 'زیر سیستم بیمه',
                  href: '#',
                  content: ''
                },
                {
                  name: 'زیر سیستم کسر از حقوق',
                  href: '#',
                  content: ''
                },
                {
                  name: 'زیر سیستم ثبت سفارش',
                  href: '#',
                  content: ''
                }
              ]
            }
        ]
      },
      { 
        name: 'پشتیبانی', 
        href: '#',
        content: '',
        sublinks: [
            { name: 'مرکز آموزش', href: '#', content: '' },
            { name: 'دانلودها', href: '#', content: '' },
            { name: 'تیکت پشتیبانی / تماس با پشتیبانی', href: '#', content: '' },
            { name: 'باشگاه مشتریان', href: '#', content: '' },
        ]
      },
      { 
        name: 'درباره ما', 
        href: '#',
        content: '',
        sublinks: [
            { name: 'ماموریت و چشم انداز جوان وب ای', href: '#', content: '' },
            { name: 'تیم جوان وب ای', href: '#', content: '' },
            { name: 'نمایندگی ها و شرکای تجاری', href: '#', content: '' },
        ]
      },
      { 
        name: 'بلاگ',
        href: '#',
        content: '',
        sublinks: [
            { name: 'مقالات آموزشی حسابداری و مالی', href: '#', content: '' },
            { name: 'نکات قانونی و مالیاتی', href: '#', content: '' },
            { name: 'اخبار و به روزرسانی های جوان وب ای', href: '#', content: '' },
        ]
      },
      { 
        name: 'تماس با ما', 
        href: '#',
        content: '',
        sublinks: [
            { name: 'فرم تماس سریع', href: '#', content: '' },
            { name: 'آدرس و تلفن', href: '#', content: '' },
            { name: 'شبکه‌های اجتماعی', href: '#', content: '' },
        ]
      },
      { 
        name: 'فرصت های همکاری', 
        href: '#',
        content: '',
        sublinks: [
            { name: 'فرصت‌های شغلی / همکاری', href: '#', content: '' },
            { name: 'اخذ نمایندگی', href: '#', content: '' },
        ]
      },
    ]
  },
  hero: {
    title: 'جوان وب ای — طراحی و توسعه مدرن نرم افزار',
    subtitle: 'راهکارهای خلاقانه برای اندروید، وب و دسکتاپ، متناسب با نیاز کسب‌وکار شما',
    description: '',
    cta_primary: 'شروع رایگان',
    cta_secondary: 'درخواست دمو',
    heroImageMain: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2231&auto=format&fit=crop',
    heroImageFloating1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    heroImageFloating2: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop',
    heroImageFloating3: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop',
    heroImageShowcase: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop',
    backgroundImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
  },
  clients: {
    title: 'به جمع صدها مشتری راضی جوان وب ای بپیوندید',
    subtitle: 'از استارتاپ‌های نوپا تا شرکت‌های بزرگ، جوان وب ای انتخاب مشترک کسب‌وکارهایی است که به کیفیت و نوآوری در نرم‌افزار اهمیت می‌دهند.',
    logos: [
        { name: 'Digikala', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMjEuNDMgNS41N2gtMy45YS40My40MyAwIDAgMC0uNDMuNDN2Ni41YS40My40MyAwIDAgMCAuNDMuNDNoMi4xNVY3LjcyaDEuNzV2MTAuNWgtNS45MnYtMS43Nmg0LjE3VjE0LjdIMTcuMWEuNDMuNDMgMCAwIDAtLjQzLjQzdjIuMzloLTEuNzV2LTguMjVoMS43NXYxLjIzaDIuNjFWNmgtMi42djUuODJoLTEuNzZWNmgtNC44djEyLjIyaDYuNTVWMTkuN0g4Ljgzdi0yLjIyaDQuMzV2LTEuMjNINi42M3YtNi41SDIuNTd2MTIuMjJoNi41NnYtMS40OEg0LjMyVjZoMi4zMXY1LjgxSDQuMzJ2MS4yM2g0LjUxdjIuMzlINC4zMnYxLjQ4aDQuNTF2MS40OEgyLjU3QTEuNDcgMS40NyAwIDAgMSAxLjEgMTguMjJWNS41N2ExLjQ3IDEuNDcgMCAwIDEgMS40Ny0xLjQ3aDE4Ljg2YTEuNDcgMS40NyAwIDAgMSAxLjQ3IDEuNDd2MTIuNjVhMS40NyAxLjQ3IDAgMCAxLTEuNDcgMS40N2gtNi41NXYtMS40OGg0Ljh2LTEuNDhoLTQuOHYtMi4zOWg0Ljh2LTEuMjNoLTQuOHYtNS44WiIvPjwvc3ZnPg==', url: '#' },
        { name: 'Snapp', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMjIuNTEgMTYuMjNhLjguOCAwIDAgMS0uOTQuMDUgNS41NCA1LjU0IDAgMCAwLTQuOC0yLjU4IDUuNjIgNS42MiAwIDAgMC01LjYyIDUuNjIgNS41NyA1LjU3IDAgMCAwIDIuNTkgNC44LjguODEgMCAwIDEtLjM2IDEuNS44Mi44MiAwIDAgMS0uMzYtLjA4IDcuMTcgNy4xNyAwIDAgMS0zLjMyLTYuMTQgNy4yMiA3LjIyIDAgMCAxIDcuMjItNy4yMiA3LjE3IDcuMTcgMCAwIDEgNi4xMyAzLjMyLjguODEgMCAwIDEgLjA4Ljc4LjgyLjgyIDAgMCAxLS42Mi4zNXptLTktOC40OWEuODEuODEgMCAwIDEtLjc4LS4wOCA3LjE3IDcuMTcgMCAwIDAtNi4xNC0zLjMyQTcuMjIgNy4yMiAwIDAgMC0xLjAyIDExLjU2YTcuMTcgNy4xNyAwIDAgMCAzLjMyIDYuMTQuODEuODEgMCAwIDAgMS4xNC0uNzIuODIuODIgMCAwIDAtLjA1LS4zNiA1LjU0IDUuNTQgMCAwIDEgMi41OC00LjggNS42MiA1LjYyIDAgMCAxIDUuNjIgNS42MiA1LjU3IDUuNTcgMCAwIDEtNC44IDIuNTkuOC44IDAgMCAwIC4wNS45NC44MS44MSAwIDAgMCAuNzMuNDEuODIuODIgMCAwIDAgLjM1LS4wOCA3LjE3IDcuMTcgMCAwIDAgNi4xNC0zLjMyIDcuMjIgNy4yMiAwIDAgMC03LjIyLTcuMjJaIi8+PC9zdmc+', url: '#' },
        { name: 'CafeBazaar', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTkuOTIuOTNINC4wOEEzLjE1IDMuMTUgMCAwIDAgLjkzIDQuMDh2MTUuODRhMy4xNSAzLjE1IDAgMCAwIDMuMTUgMy4xNWgxNS44NGEzLjE1IDMuMTUgMCAwIDAgMy4xNS0zLjE1VjQuMDhBMy4xNSAzLjE1IDAgMCAwIDE5LjkyLjkzek04Ljg4IDE3LjZhLjY1LjY1IDAgMCAxLS42NS42NEg2LjQyYS42NS42NSAwIDAgMS0uNjUtLjY0di0xLjVhLjY1LjY1IDAgMCAxIC42NS0uNjRoMS44MWEuNjUuNjUgMCAwIDEgLjY1LjY0em0wLTQuNDdhLjY1LjY1IDAgMCAxLS42NS42NEg2LjQyYS42NS42NSAwIDAgMS0uNjUtLjY0di0xLjVhLjY1LjY1IDAgMCAxIC42NS0uNjRoMS44MWEuNjUuNjUgMCAwIDEgLjY1LjY0em00LjQ5IDQuNDdhLjY1LjY1IDAgMCAxLS42NS42NGgtMS44YS42NS42NSAwIDAgMS0uNjUtLjY0di0xLjVhLjY1LjY1IDAgMCAxIC42NS0uNjRoMS44YS42NS42NSAwIDAgMSAuNjUuNjR6bTAtNC40N2EuNjUuNjUgMCAwIDEtLjY1LjY0aC0xLjhhLjY1LjY1IDAgMCAxLS42NS0uNjR2LTEuNWEuNjUuNjUgMCAwIDEgLjY1LS42NGgxLjhhLjY1LjY1IDAgMCAxIC42NS42NHptNC40OCA0LjQ3YS42NS42NSAwIDAgMS0uNjUuNjRoLTEuOGEuNjUuNjUgMCAwIDEtLjY1LS42NHYtMS41YS42NS42NSAwIDAgMSAuNjUtLjY0aDEuOGEuNjUuNjUgMCAwIDEgLjY1LjY0em0wLTQuNDdhLjY1LjY1IDAgMCAxLS42NS42NGgtMS44YS42NS42NSAwIDAgMS0uNjUtLjY0di0xLjVhLjY1LjY1IDAgMCAxIC42NS0uNjRoMS44YS42NS42NSAwIDAgMSAuNjUuNjR6TTEwLjEgOC4yNGMuNyAwIDEuMjgtLjU4IDEuMjgtMS4yOFMxMC44IDUuNjggMTAuMSA1LjY4cy0xLjI4LjU4LTEuMjggMS4yOC41NyAxLjI4IDEuMjggMS4yOHptMy44IDBjLjcgMCAxLjI4LS41OCAxLjI4LTEuMjhTLTE0LjcgNS42OCAxMy45IDUuNjhzLTEuMjguNTgtMS4yOCAxLjI4LjU4IDEuMjggMS4yOCAxLjI4eiIvPjwvc3ZnPg==', url: '#' },
        { name: 'Irancell', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTIgMEM1LjM3IDAgMCA1LjM3IDAgMTJzNS4zNyAxMiAxMiAxMiAxMi01LjM3IDEyLTEyUzE4LjYzIDAgMTIgMHptNS4xNiAxMi45Yy0xLjEyIDEuMS0yLjYyIDEuNy00LjI1IDEuNy0xLjYgMC0zLjEtLjU4LTQuMi0xLjY1bC44LS44MmMuOS44NyAyLjEyIDEuMzUgMy40IDEuMzUgMS4zIDAgMi41LS41IDMuNC0xLjQuOS0uOSAxLjQtMi4xIDEuNC0zLjRzLS41LTIuNS0xLjQtMy40Yy0uOS0uOS0yLjEtMS40LTMuNC0xLjRzLTIuNS41LTMuNCAxLjRjLS45LjktMS40IDIuMS0xLjQgMy40IDAgLjQuMDQuOC4xIDEuMTdsLTEuMDcuMkE1LjggNS44IDAgMCAxIDYuOCAxMmMwLTEuNi42LTMuMSAxLjctNC4yUzEwLjQgNi4xIDEyIDYuMXMzLjEuNiA0LjIgMS43YzEuMSAxLjEgMS43IDIuNiAxLjcgNC4ycy0uNiAzLjEtMS43NCA0LjJ6Ii8+PC9zdmc+', url: '#' },
        { name: 'MelliBank', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMjEuNSAyLjVIMi41djE5aDE5VjIuNXpNODMzIDE5LjMzSDQuNjdWNC42N2gzLjY2djE0LjY2em01LjUtMTAuNUgxMC41djEwLjVoMy4zM1Y4Ljgzem01LjUgOC4zNEgxNlYxMWgzLjMzdiYuMTdaIi8+PC9zdmc+', url: '#' },
        { name: 'Hamrah-e Aval', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6Ii8+PHBhdGggZD0iTTEzLjA1IDEzLjQ0Yy0xLjY5IDAtMy4wNS0xLjM2LTMuMDUtMy4wNVMxMS4zNiA3LjM0IDEzLjA1IDcuMzRzMy4wNSAxLjM2IDMuMDUgMy4wNS0xLjM2IDMuMDUtMy4wNSAzLjA1em0tMy4wNC0zLjA0YzAtMS42OSAxLjM2LTMuMDUgMy4wNC0zLjA1czMuMDUgMS4zNiAzLjA1IDMuMDUtMS4zNiAzLjA1LTMuMDUgMy4wNS0zLjA0LTEuMzYtMy4wNC0zLjA1eiIvPjwvc3ZnPg==', url: '#' },
        { name: 'Bank Saderat', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTAgMjB2LTYxSDh2Nmgyek0xNCAyMGgtMmwtNCA2aDJ6Ii8+PHBhdGggZD0iTTMgMjBoMTh2LTJoMTh6Ii8+PC9zdmc+', url: '#' },
        { name: 'Tapsi', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6Ii8+PHBhdGggZD0iTTExLjUgOS41bDEuNS0xLjUgMS41IDEuNUwxMyA5LjVsLTEuNS0xLjV6Ii8+PC9zdmc+', url: '#' },
        { name: 'Divar', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMjAgMmg2djIwaC02eiIvPjxwYXRoIGQ9Ik00IDJoNnY2SDR6Ii8+PHBhdGggZD0iTTQgMTBoNnY2SDR6Ii8+PC9zdmc+', url: '#' },
        { name: 'Aparat', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTIgLjAxMUM1LjQ1Mi4wMTEgMCA1LjQ2MyAwIDEyLjE2NmMwIDYuNzAyIDUuNDUyIDExLjgzOCAxMi4xNTUgMTEuODM4YzYuNzAzIDAgMTEuODQyLTUuMTM2IDExLjg0Mi0xMS44MzhDMjMuOTk3IDUuNDYyIDE4Ljg1OC4wMSAxMi4xNTUuMDF6bS01LjYxIDUuOTI1aDQuNjMydjQuNjMzaC00LjYzMlY1LjkzNnptNy4yNTggMGg0LjYzM3Y0LjYzM2gtNC42MzNWNS45MzZ6bS03LjI1OCA2LjI1N2g0LjYzMnY0LjYzMmgtNC42MzJ2LTQuNjMyem03LjI1OCAwmg0LjYzM3Y0LjYzMmgtNC42MzN2LTQuNjMyeiIvPjwvc3ZnPg==', url: '#' },
        { name: 'Filimo', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMjIgNXYxNEgyVjUzem0tOSA4LjVMNyAxMGwyLjUgMy41TDcgMTd6Ii8+PC9zdmc+', url: '#' },
        { name: 'Bank Mellat', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMCAwbDEyIDEyTDI0IDBIMHoiLz48cGF0aCBkPSJNMCAyNGwxMi0xMkwyNCAyNEgweiIvPjwvc3ZnPg==', url: '#' },
    ],
  },
  features: {
    title: 'محصولات و سیستم‌های یکپارچه جوان وب ای',
    items: [
      {
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xMy41IDIxdi03LjVhLjc1Ljc1IDAgMDEuNzUtLjc1aDNhLjc1Ljc1IDAgMDEuNzUuNzVWMjFtLTQuNSAwSDIuMjVtMTEuMjUgMGg4LjI1YTIuMjUgMi4yNSAwIDAwMi4yNS0yLjI1VjUuMjVBMi4yNSAyLjI1IDAgMDAyMC4yNSAzSDMuNzVBMi4yNSAyLjI1IDAgMDAxLjUgNS4yNXYxMy41QTIuMjUgMi4yNSAwIDAwMy43NSAyMW0xMS4yNSAwaC00LjUiIC8+PC9zdmc+',
        title: 'نرم افزار فروشگاهی',
        points: [
          'مدیریت یکپارچه فروش، خرید، موجودی و صندوق',
          'باشگاه مشتریان و سیستم امتیازدهی هوشمند',
        ],
        name: 'فروشگاهی',
        href: '#'
      },
      {
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yLjI1IDE4Ljc1YTYwLjA3IDYwLjA3IDAgMDExNS43OTcgMi4xMDFjLjcyNy4xOTggMS40NTMtLjM0MiAxLjQ1My0xLjA5NlYxOC43NU0zLjc1IDQuNXYuNzVBLjc1Ljc1IDAgMDExIDYgNmgtLjc1bTAtMHYtLjc1QS43NS43NSAwIDAxMyA0LjVoLjc1bTAtMGguNzVBLjc1Ljc1IDAgMDE1LjI1IDZ2Ljc1bTAtMHYtLjc1QS43NS43NSAwIDAxNS4yNSA0LjVoLjc1bTAtMGguNzVhLjc1Ljc1IDAgMDEuNzUuNzV2Ljc1bTAtMHYtLjc1YS43NS43NSAwIDAxLjc1LS43NWguNzVtMC0waC43NWEuNzUuNzUgMCAwMS43NS43NXYuNzVtMC0wdi0uNzVhLjc1Ljc1IDAgMDEuNzUtLjc1aC43NWEuNzUuNzUgMCAwMS43NS43NXYuNzVtLTYgMTJ2LTYuMzc1YTMuMzc1IDMuMzc1IDAgMDEzLjM3NS0zLjM3NWgxLjVhMy4zNzUgMy4zNzUgMCAwMTMuMzc1IDMuMzc1VjE4Ljc1bS02IDBoNiIgLz48L3N2Zz4=',
        title: 'نرم افزار بازرگانی',
        points: ['مدیریت فرآیندهای خرید، فروش و انبارداری', 'کنترل حساب‌های دریافتنی، پرداختنی و عملیات ارزی'],
        name: 'بازرگانی',
        href: '#'
      },
      {
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0zLjc1IDIxaDE2LjVNNC41IDNoMTVNNTUuMjUgM3YxOG0xMy41LTE4djE4TTkgNi43NWg2TTkgMTEuMjVoNm0tNiA0LjVoNk02Ljc1IDIxdi0yLjI1YTIuMjUgMi4yNSAwIDAxMi4yNS0yLjI1aDZhMi4yNSAyLjI1IDAgMDEyLjI1IDIuMjVWMjEiIC8+PC9zdmc+',
        title: 'نرم افزار صنعتی',
        points: [
          'محاسبه بهای تمام‌شده و کنترل هزینه‌های تولید',
          'مدیریت فرمول ساخت (BOM) و ردیابی مواد اولیه',
        ],
        name: 'صنعتی',
        href: '#'
      },
      {
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yMS43NSA4LjI1di0yLjI1YTMuMzc1IDMuMzc1IDAgMDAtMy4zNzUtMy4zNzVINTYyNWEzLjM3NSAzLjM3NSAwIDAwLTMuMzc1IDMuMzc1djIuMjVtMTkuNSAwdjlhMi4yNSAyLjI1IDAgMDEtMi4yNSAyLjI1SDIuMjVhMi4yNSAyLjI1IDAgMDEtMi4yNS0yLjI1di05bTE5LjUgMGgtMTkuNSIgLz48L3N2Zz4=',
        title: 'نرم افزار رستورانی',
        points: [
            'ثبت سفارش حضوری، تلفنی و آنلاین',
            'کنترل لحظه‌ای موجودی و تعریف فرمول ساخت (BOM)',
        ],
        name: 'رستورانی',
        href: '#'
      },
      {
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yLjI1IDIxaDE5LjVtLTE4LTE4djE4bTEwLjUtMTh2MThtNi0xMy41VjIxTTYuNzUgNi43NWguNzVtLS43NSAzdi43NW0tLjc1IDNoLjc1TTkgMjF2LTMuMzc1YzAtLjYyMS41MDQtMS4xMjUgMS4xMjUtMS4xMjVoMy43NWMuNjIxIDAgMS4xMjUuNTA0IDEuMTI1IDEuMTI1VjIxIiAvPjwvc3ZnPg==',
        title: 'نرم افزار هتل و تالار',
        points: [
            'مدیریت رزرو و پذیرش هتل و وضعیت اتاق‌ها',
            'مدیریت مراسم، رویدادها و منوهای پذیرایی در تالار',
        ],
        name: 'هتل و تالار',
        href: '#'
      },
      {
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yLjI1IDE4TDkgMTEuMjVsNC4zMDYgNC4zMDdhMTEuOTUgMTEuOTUgMCAwMTUuODE0LTUuNTE5bDIuNzQtMS4yMm0wIDBsLTUuOTQtMi4yOG01Ljk0IDIuMjhsLTIuMjggNS45NDEiIC8+PC9zdmc+',
        title: 'سامانه مودیان مالیاتی',
        points: [
            'ارسال الکترونیکی و ایمن اطلاعات به سامانه مودیان',
            'یکپارچه‌سازی با سیستم‌های حسابداری، حقوق و انبار',
        ],
        name: 'سامانه مودیان مالیاتی',
        href: '#'
      },
      {
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNSA4LjI1SDltNiAzSDltMyA2bC0zLTNoMS41YTMgMyAwIDEwMC02TTIxIDEyYTkgOSAwIDExLTE4IDAgOSAxIDkgMCAwMTE4IDB6IiAvPjwvc3ZnPg==',
        title: 'نرم افزار حقوق و دستمزد',
        points: [
            'محاسبه دقیق و خودکار حقوق، مزایا و کسورات',
            'انطباق کامل با آخرین قوانین بیمه و مالیات کشور',
        ],
        name: 'حقوق و دستمزد',
        href: '#'
      },
    ]
  },
  softwareShowcase: {
    title: "نمایی از محیط نرم افزار",
    subtitle: "محیطی کاربرپسند و قدرتمند برای مدیریت یکپارچه امور مالی شما.",
    slides: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634733620281-9f4c35a6e376?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611095965942-161b4d3341d3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633355444132-695d5876cd00?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  analytics: {
    title1: 'چرا جوان وب ای؟',
    paragraph1: 'جوان وب ای با تکیه بر تیمی از متخصصان خلاق و با تجربه، راهکارهای نرم‌افزاری سفارشی و مدرن ارائه می‌دهد. ما به کیفیت، کارایی و طراحی کاربرپسند اهمیت می‌دهیم و در تمام مراحل پروژه، از ایده تا اجرا و پشتیبانی، در کنار شما هستیم تا به اهداف دیجیتال خود برسید.',
    title2: 'ماموریت ما',
    paragraph2: 'ماموریت ما در جوان وب ای این است که با استفاده از تکنولوژی‌های روز، نرم‌افزارهایی قدرتمند و در عین حال ساده خلق کنیم که به رشد و موفقیت کسب‌وکارها کمک کنند. ما باور داریم هر ایده خوبی شایسته یک اجرای بی‌نقص است.',
    cta: '',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  stats: {
     experience: { value: '8+', label: 'سال تجربه' },
     customers: { value: '50+', label: 'پروژه موفق' },
     team: { value: '10+', label: 'عضو تیم متخصص' },
     satisfaction: { value: '95%', label: 'رضایت مشتریان' }
  },
  moreFeatures: {
      title: 'برخی از امکانات جوان وب ای',
      items: [
        {
            "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzAwOTY4OCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjIuNSAxOC43NWE2MC4wNyA2MC4wNyAwIDAxMTUuNzk3IDIuMTAxYy43MjcuMTk4IDEuNDUzLS4zNDIgMS40NTMtMS4wOTZWMTguNzVNMzAuNzUgNC41di43NUEuNzUuNzUgMCAwMTMgNmgtLjc1bTAtMHYtLjc1QS43NS43NSAwIDAxMyA0LjVoLjc1bTAtMGguNzVBLjc1Ljc1IDAgMDE1LjI1IDZ2Ljc1bTAtMHYtLjc1QS43NS43NSAwIDAxNS4yNSA0LjVoLjc1bTAtMGguNzVhLjc1Ljc1IDAgMDEuNzUuNzV2Ljc1bTAtMHYtLjc1YS43NS43NSAwIDAxLjc1LS43NWguNzVtMC0waC43NWEuNzUuNzUgMCAwMS43NS43NXYuNzVtMC0wdi0uNzVhLjc1Ljc1IDAgMDEuNzUtLjc1aC43NWEuNzUuNzUgMCAwMS43NS43NXYuNzVtLTYgMTJ2LTYuMzc1YTMuMzc1IDMuMzc1IDAgMDEzLjM3NS0zLjM3NWgxLjVhMy4zNzUgMy4zNzUgMCAwMTMuMzc1IDMuMzc1VjE4Ljc1bS02IDBoNiIgLz48L3N2Zz4=",
            "title": "امکانات سیستم خرید و فروش",
            "points": [
              "امکان ثبت فاکتور فروش با قیمت گذاری های مختلف از قبل تعیین شده",
              "امکان ثبت دو نوع سند تولید براساس فرمول تولید و بدون فرمول"
            ]
        },
        {
            "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzAwOTY4OCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOC4yNSAzVjQuNU00LjUgOC4yNUgzbTE4IDBoLTEuNU00LjUgMTJIM20xOCAwdi0xLjVtLTE1IDMuNzVIM20xOCAwdi0xLjVNOC4yNSAxOS41VjIxTTEyIDN2MS41bTAgMTVWMjFtMy43NS0xOHYxLjVtMCAxNVYyMW0tOS0xLjVoMTAuNWEyLjI1IDIuMjUgMCAwMDIuMjUtMi4yNVY3LjVhMi4yNSAyLjI1IDAgMDAtMi4yNS0yLjI1SDYuNzVBMi4yNSAyLjI1IDAgMDA0LjUgNy41djEwLjVhMi4yNSAyLjI1IDAgMDAyLjI1IDIuMjV6IiAvPjwvc3ZnPg==",
            "title": "امکانات سیستم تولید",
            "points": [
              "تعریف فرمول تولید با دقت بالا",
              "امکان ثبت دو نوع سند تولید براساس فرمول تولید و بدون فرمول"
            ]
        },
        {
            "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzAwOTY4OCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMzAuNzUgMjFoMTYuNU00LjUgM2gxNU01LjI1IDN2MThtMTMuNS0xOHYxOE05IDYuNzVoNi4zNzVhLjc1Ljc1IDAgMDEuNzUuNzV2My43NWEuNzUuNzUgMCAwMS0uNzUuNzVIOSIgLz48L3N2Zz4=",
            "title": "امکانات انبارداری",
            "points": [
              "امکان انبارداری به هر دو روش ادواری و دائمی",
              "محاسبه موجودی پایان دوره براساس میانگین موزون و لحظه"
            ]
        },
        {
            "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzAwOTY4OCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjIuNSAxOGw2Ljc1IDYuNzUgNC4zMDYgNC4zMDdhMTEuOTUgMTEuOTUgMCAwMTUuODE0LTUuNTE5bDIuNzQtMS4yMm0wIDBsLTUuOTQtMi4yOG01Ljk0IDIuMjhsLTIuMjggNS45NDEiIC8+PC9zdmc+",
            "title": "امکانات سیستم مالی",
            "points": [
              "معرفی سرفصل حسابها در سطح گروه، کل، معین، تفصیلی به همراه دوسطح شناور مرکز هزینه و مرکز پروژه",
              "امکان محاسبه و ثبت سند سود و زیان به صورت اتوماتیک"
            ]
        },
        {
            "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzAwOTY4OCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTUgOC4yNUg5bTYgM0g5bTMgNmwtMy0zaDEuNWEzIDMgMCAxMDAtNk0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHoiIC8+PC9zdmc+",
            "title": "امکانات سیستم حقوق و دستمزد",
            "points": [
              "ثبت تمامی اطلاعات پرسنل جهت بایگانی و کارگزینی",
              "امکان تعریف مزایا و کسورات به تعداد نامحدود به همراه فرمول نویسی"
            ]
        },
        {
            "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzAwOTY4OCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTIgNnYxMm0tMy0yLjgxOGwuODc5LjY1OWMxLjE3MS44NzkgMy4wNy44NzkgNC4yNDIgMCAxLjE3Mi0uODc5IDEuMTcyLTIuMzAzIDAtMy4xODJDMTMuNTM2IDEyLjIxOSAxMi43NjggMTIgMTIgMTJjLS43MjUgMC0xLjQ1LS4yMi0yLjAwMy0uNjU5LTEuMTA2LS44MjYtMS4xMDYtMi4xNTYgMC0yLjk4MkMxMC41NDQgOC4yMTkgMTEuMjcyIDggMTIgOGMuNzI1IDAgMS40NS4yMiAyLjAwMy42NTltLTIuMDAzLjY1OWwyLjAwMy42NTltMCAwbDIuMDAzLjY1OSIgLz48L3N2Zz4=",
            "title": "امکانات سیستم ارزی",
            "points": [
              "امکان گزارش صورتحساب ارزی",
              "امکان تسعیر ارز و ثبت سند هزینه و درآمدهای حاصل از تسعیر ارزی"
            ]
        },
        {
            "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzAwOTY4OCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjEgMTEuMjV2OC4yNWEyLjI1IDIuMjUgMCAwMS0yLjI1IDIuMjVINS4yNWEyLjI1IDIuMjUgMCAwMS0yLjI1LTIuMjV2LTguMjVNMTIgNC44NzVBMi42MjUgMi42MjUgMCAxMDEyIDEwLjEyNUEyLjYyNSAyLjYyNSAwIDAwMTIgNC44NzV6TTEyIDE1YTIuMjUgMi4yNSAwIDEwMC00LjUgMi4yNSAyLjI1IDAgMDAwIDQuNXoiIC8+PC9zdmc+",
            "title": "امکانات سیستم خزانه داری",
            "points": [
              "امکان چاپ برگه چک پرداختی و فیش واگذاری چک به بانک",
              "امکان چاپ چک بر روی برگه چک"
            ]
        },
        {
            "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzAwOTY4OCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOC4yNSAyMXYtNC44NzVjMC0uNjIxLjUwNC0xLjEyNSAxLjEyNS0xLjEyNWgyLjI1Yy42MjEgMCAxLjEyNS41MDQgMS4xMjUgMS4xMjVWMjFtMCAwaDQuNUEyLjI1IDIuMjUgMCAwMDIxIDE4Ljc1VjE2LjVhMi4yNSAyLjI1IDAgMDAtMi4yNS0yLjI1aC0xLjVtLTMgMGgtM20tMyAwaC0xLjVBMi4yNSAyLjI1IDAgMDAzIDE2LjV2Mi4yNUEyLjI1IDIuMjUgMCAwMDUuMjUgMjFoNC41bS0zLTE1VjUuMjVjMC0uNjIxLjUwNC0xLjEyNSAxLjEyNS0xLjEyNWgyLjI1Yy42MjEgMCAxLjEyNS41MDQgMS4xMjUgMS4xMjVWNiIgLz48L3N2Zz4=",
            "title": "امکانات سیستم تسهیلات",
            "points": [
              "امکان ثبت وام های پرداختی شرکت و یادآوری اقساط وام های پرداختی و دریافتی",
              "امکان تقسیم سود سال گذشته به سهام داران شرکت براساس معدل حساب سرمایه هر سهامدار"
            ]
        }
      ]
  },
  about: {
    title: 'درباره جوان وب ای',
    paragraph: 'جوان وب با بیش از ۸ سال سابقه در حوزه برنامه نویسی و طراحی، در پلتفرم‌های اندروید، وب و دسکتاپ فعالیت می‌کند و راهکارهای نرم‌افزاری خلاقانه ارائه می‌دهد.',
    cta: 'بیشتر بدانید',
    timeline: [
      {
        "year": "۸+ سال",
        "description": "تجربه موفق در حوزه برنامه نویسی و طراحی نرم‌افزار."
      },
      {
        "year": "تخصص",
        "description": "ارائه راهکارهای یکپارچه در پلتفرم‌های اندروید، وب و دسکتاپ."
      },
      {
        "year": "هدف ما",
        "description": "طراحی و تولید نرم‌افزارهای خلاقانه و کاربردی برای کسب‌وکارها."
      }
    ],
    imageUrl: 'https://cdn.dribbble.com/users/1787323/screenshots/11310813/media/d83f7214713c79a05b38a7c1ad7071e6.png?resize=1200x900&vertical=center'
  },
  footer: {
    description: 'با تکیه بر تجربه و تخصص، بهترین راهکارهای نرم‌افزاری را برای کسب‌وکار شما خلق می‌کنیم.',
    contact: {
        title: 'تماس با ما',
        address: 'آدرس: یزد، [آدرس دقیق شرکت]',
        phone: 'شماره همراه: 09925063800',
        email: 'info@javanwebi.com'
    },
    copyright: '© ۱۴۰۳ تمامی حقوق این وب‌سایت متعلق به جوان وب ای می‌باشد.'
  },
  retailPage: {
    hero: {
      badge: "راهکار یکپارچه و تخصصی",
      title: "نرم‌افزار حسابداری فروشگاهی جوان وب ای",
      subtitle: "مدیریت یکپارچه مالی، فروش، خرید، موجودی، صندوق و مشتریان برای فروشگاه‌های کوچک، متوسط و زنجیره‌ای. با جوان وب ای عملیات دستی را حذف کنید، خطای انسانی را کاهش دهید و به شفافیت مالی کامل برسید.",
      ctaPrimary: "دریافت مشاوره رایگان",
      ctaSecondary: "مشاهده امکانات",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
    },
    challenges: {
      title: "غلبه بر چالش‌های روزمره فروشگاه‌داری",
      subtitle: "کسب‌وکار شما با چالش‌های منحصر به فردی روبروست. نرم‌افزار فروشگاهی جوان وب ای برای حل دقیق همین مشکلات طراحی شده است.",
      items: [
        { icon: "TransactionIcon", title: "حجم بالای تراکنش‌های روزانه", description: "مدیریت سریع و دقیق فروش‌های نقدی، اعتباری و اقساطی، مرجوعی‌ها و تسویه‌حساب‌ها بدون اتلاف وقت." },
        { icon: "InventoryIcon", title: "تنوع کالا و تغییرات قیمت", description: "کنترل آسان هزاران نوع کالا و به‌روزرسانی قیمت‌های مصرف‌کننده، عمده و همکار به صورت آنی." },
        { icon: "WarehouseManagementIcon", title: "کنترل دقیق موجودی و صندوق", description: "ردیابی لحظه‌ای موجودی، دریافت هشدار اتمام کالا و جلوگیری از هرگونه مغایرت در صندوق." },
        { icon: "CrmIcon", title: "مدیریت تعامل با مشتریان", description: "حفظ مشتریان فعلی و جذب مشتریان جدید از طریق باشگاه وفاداری، سیستم امتیازدهی و پیامک‌های هوشمند." }
      ]
    },
    features: {
      title: "ماژول‌ها و امکانات کلیدی",
      items: [
        { icon: "PosDeviceIcon", title: "مدیریت فروش و صدور فاکتور", points: ["صدور فوری فاکتور رسمی و فروش", "پشتیبانی از بارکدخوان و پرینتر فیش‌زن", "فروش نقدی، اقساطی، اعتباری و بانکی", "چند نرخ قیمتی (مصرف‌کننده، عمده، همکار)", "تخفیف درصدی، مبلغی یا مناسبتی"] },
        { icon: "WarehouseManagementIcon", title: "مدیریت انبار و موجودی کالا", points: ["تعریف کالا با کد، بارکد، واحد و قیمت پایه", "رسید خودکار خرید و ورود به انبار", "گزارش لحظه‌ای موجودی و نقطه سفارش", "هشدار اتمام موجودی و سفارش‌گذاری مجدد", "انبارگردانی و انتقال بین انبارها"] },
        { icon: "AccountingIcon", title: "حسابداری مالی یکپارچه", points: ["ثبت اتوماتیک اسناد فروش، خرید، هزینه و حقوق", "دفتر روزنامه، کل، معین و ترازنامه", "تعریف کدینگ چندسطحی", "گزارش سود و زیان به تفکیک کالا یا مشتری", "ارسال گزارشات قانونی (مالیات و ارزش افزوده)"] },
        { icon: "CustomerClubIcon", title: "مدیریت مشتریان و باشگاه وفاداری (CRM)", points: ["تعریف و دسته‌بندی مشتریان", "سقف اعتبار و رصد سوابق خرید", "کارت وفاداری و سیستم امتیازدهی", "پیامک تخفیف، تبریک تولد، یا موجودی جدید", "گزارش تحلیلی مشتریان پرفروش یا بدهکار"] },
        { icon: "UserManagementIcon", title: "مدیریت کاربران و سطوح دسترسی", points: ["تعریف نقش‌ها (صندوقدار، انباردار، مدیر و …)", "رصد تراکنش‌ها و عملکرد کاربران", "دسترسی محدود به فاکتور، گزارش یا قیمت‌گذاری", "رمزگذاری روی عملیات خاص"] },
        { icon: "SalesIcon", title: "مدیریت فاکتور خرید و تأمین‌کنندگان", points: ["ثبت خرید رسمی یا غیررسمی", "ردیابی بدهی و تسویه حساب تأمین‌کنندگان", "گزارش خرید بر اساس کالا، زمان یا تأمین‌کننده", "کنترل روند تغییر قیمت‌ها"] },
        { icon: "DashboardIcon", title: "گزارشات و داشبورد مدیریتی", points: ["گزارش فروش روزانه، هفتگی، ماهانه", "سود ناخالص و خالص به تفکیک کالاها", "کالاهای پرفروش یا کم‌گردش", "داشبورد گرافیکی زنده", "خروجی به Excel و اتصال به Power BI"] }
      ]
    },
    integrations: {
      title: "یکپارچگی کامل با ابزارهای فروشگاهی",
      subtitle: "جوان وب ای به راحتی به تمام سخت‌افزارها و نرم‌افزارهای مورد نیاز فروشگاه شما متصل می‌شود تا یک اکوسیستم یکپارچه و کارآمد ایجاد کند.",
      items: [
        { icon: "PosDeviceIcon", name: "بارکدخوان، پرینتر فیش‌زن و کارت‌خوان" },
        { icon: "SmsPanelIcon", name: "سامانه پیامک تبلیغاتی" },
        { icon: "CreditCardTerminalIcon", name: "POS فروشگاهی و ترازو دیجیتال" },
        { icon: "ECommerceIcon", name: "فروشگاه اینترنتی و اپلیکیشن موبایل" },
        { icon: "ReportsIcon", name: "ارسال خودکار گزارش به سامانه‌های رسمی" }
      ]
    },
    keyAspects: {
      title: "ویژگی‌های جامع برای کسب‌وکارهای فروشگاهی",
      items: [
        { icon: "DesktopComputerIcon", title: "نسخه‌های نرم‌افزار", points: ["ویندوز: مناسب فروشگاه‌های حضوری", "تحت وب: مدیریت از راه دور با مرورگر", "اندروید: فاکتور موبایلی و مشاهده سریع موجودی", "چندشعبه‌ای: ویژه فروشگاه‌های زنجیره‌ای"] },
        { icon: "StoreIcon", title: "فروشگاه‌های هدف", points: ["پوشاک، کیف و کفش", "سوپرمارکت‌ها و هایپرمارکت‌ها", "لوازم خانگی و آرایشی", "نوشت‌افزار و کتاب", "ابزارفروشی، الکتریکی و مصالح ساختمانی", "فروشگاه‌های زنجیره‌ای چندشعبه‌ای"] },
        { icon: "ShieldCheckIcon", title: "مزایای رقابتی", points: ["طراحی تخصصی متناسب با بازار ایران", "رابط کاربری ساده برای کاربران غیرمالی", "حسابداری هوشمند و ثبت خودکار اسناد", "گزارشات تحلیلی و تصمیم‌سازی سریع", "پشتیبانی قوی و آموزش مداوم", "مقیاس‌پذیر برای فروشگاه‌های کوچک تا بزرگ"] }
      ]
    },
    finalCta: {
      title: "فروشگاه خود را هوشمندانه مدیریت کنید",
      subtitle: "با نرم‌افزار فروشگاهی جوان وب ای، مدیریت را ساده کنید، فروش را افزایش دهید و با خیالی آسوده بر توسعه کسب‌وکار خود تمرکز کنید.",
      cta: "دریافت دموی رایگان"
    }
  },
  productsPage: {
    title: "محصولات نرم‌افزاری جوان وب ای",
    intro: "مجموعه نرم‌افزارهای جوان وب ای برای پاسخگویی به نیازهای متنوع کسب‌وکارهای مختلف طراحی شده‌اند. هر یک از این محصولات، راهکاری تخصصی برای مدیریت یکپارچه امور مالی، فروش، انبارداری و منابع انسانی ارائه می‌دهند.",
    // FIX: Populated the products array with complete objects to match the interface.
    products: [
      {
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xMy41IDIxdi03LjVhLjc1Ljc1IDAgMDEuNzUtLjc1aDNhLjc1Ljc1IDAgMDEuNzUuNzVWMjFtLTQuNSAwSDIuMjVtMTEuMjUgMGg4LjI1YTIuMjUgMi4yNSAwIDAwMi4yNS0yLjI1VjUuMjVBMi4yNSAyLjI1IDAgMDAyMC4yNSAzSDMuNzVBMi4yNSAyLjI1IDAgMDAxLjUgNS4yNXYxMy41QTIuMjUgMi4yNSAwIDAwMy43NSAyMW0xMS4yNSAwaC00LjUiIC8+PC9zdmc+",
        title: "نرم افزار فروشگاهی",
        description: "مدیریت یکپارچه فروش، خرید، موجودی، صندوق و مشتریان برای انواع فروشگاه‌ها.",
        href: "#"
      },
      {
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yLjI1IDE4Ljc1YTYwLjA3IDYwLjA3IDAgMDExNS43OTcgMi4xMDFjLjcyNy4xOTggMS40NTMtLjM0MiAxLjQ1My0xLjA5NlYxOC43NU0zLjc1IDQuNXYuNzVBLjc1Ljc1IDAgMDExIDYgNmgtLjc1bTAtMHYtLjc1QS43NS43NSAwIDAxMyA0LjVoLjc1bTAtMGguNzVBLjc1Ljc1IDAgMDE1LjI1IDZ2Ljc1bTAtMHYtLjc1QS43NS43NSAwIDAxNS4yNSA0LjVoLjc1bTAtMGguNzVhLjc1Ljc1IDAgMDEuNzUuNzV2Ljc1bTAtMHYtLjc1YS43NS43NSAwIDAxLjc1LS43NWguNzVtMC0waC43NWEuNzUuNzUgMCAwMS43NS43NXYuNzVtMC0wdi0uNzVhLjc1Ljc1IDAgMDEuNzUtLjc1aC43NWEuNzUuNzUgMCAwMS43NS43NXYuNzVtLTYgMTJ2LTYuMzc1YTMuMzc1IDMuMzc1IDAgMDEzLjM3NS0zLjM3NWgxLjVhMy4zNzUgMy4zNzUgMCAwMTMuMzc1IDMuMzc1VjE4Ljc1bS02IDBoNiIgLz48L3N2Zz4=",
        title: "نرم افزار بازرگانی",
        description: "کنترل کامل فرآیندهای خرید، فروش، انبارداری و عملیات ارزی برای شرکت‌های بازرگانی.",
        href: "#"
      },
      {
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0zLjc1IDIxaDE2LjVNNC41IDNoMTVNNTUuMjUgM3YxOG0xMy41LTE4djE4TTkgNi43NWg2TTkgMTEuMjVoNm0tNiA0LjVoNk02Ljc1IDIxdi0yLjI1YTIuMjUgMi4yNSAwIDAxMi4yNS0yLjI1aDZhMi4yNSAyLjI1IDAgMDEyLjI1IDIuMjVWMjEiIC8+PC9zdmc+",
        title: "نرم افزار صنعتی",
        description: "محاسبه دقیق بهای تمام‌شده، مدیریت فرمول ساخت (BOM) و ردیابی مواد اولیه در خط تولید.",
        href: "#"
      },
      {
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yMS43NSA4LjI1di0yLjI1YTMuMzc1IDMuMzc1IDAgMDAtMy4zNzUtMy4zNzVINTYyNWEzLjM3NSAzLjM3NSAwIDAwLTMuMzc1IDMuMzc1djIuMjVtMTkuNSAwdjlhMi4yNSAyLjI1IDAgMDEtMi4yNSAyLjI1SDIuMjVhMi4yNSAyLjI1IDAgMDEtMi4yNS0yLjI1di05bTE5LjUgMGgtMTkuNSIgLz48L3N2Zz4=",
        title: "نرم افزار رستورانی",
        description: "راهکار کامل برای مدیریت سفارشات حضوری، تلفنی و آنلاین، انبار و آشپزخانه.",
        href: "#"
      },
      {
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yLjI1IDIxaDE5LjVtLTE4LTE4djE4bTEwLjUtMTh2MThtNi0xMy41VjIxTTYuNzUgNi43NWguNzVtLS43NSAzdi43NW0tLjc1IDNoLjc1TTkgMjF2LTMuMzc1YzAtLjYyMS41MDQtMS4xMjUgMS4xMjUtMS4xMjVoMy43NWMuNjIxIDAgMS4xMjUuNTA0IDEuMTI1IDEuMTI1VjIxIiAvPjwvc3ZnPg==",
        title: "نرم افزار هتل و تالار",
        description: "مدیریت یکپارچه رزرو و پذیرش هتل، وضعیت اتاق‌ها و مدیریت مراسم و رویدادها در تالار.",
        href: "#"
      },
      {
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yLjI1IDE4TDkgMTEuMjVsNC4zMDYgNC4zMDdhMTEuOTUgMTEuOTUgMCAwMTUuODE0LTUuNTE5bDIuNzQtMS4yMm0wIDBsLTUuOTQtMi4yOG01Ljk0IDIuMjhsLTIuMjggNS45NDEiIC8+PC9zdmc+",
        title: "سامانه مودیان مالیاتی",
        description: "ارسال الکترونیکی و ایمن اطلاعات به سامانه مودیان و یکپارچه‌سازی با سیستم‌های حسابداری.",
        href: "#"
      },
      {
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNSA4LjI1SDltNiAzSDltMyA2bC0zLTNoMS41YTMgMyAwIDEwMC02TTIxIDEyYTkgOSAwIDExLTE4IDAgOSAxIDkgMCAwMTE4IDB6IiAvPjwvc3ZnPg==",
        title: "نرم افزار حقوق و دستمزد",
        description: "محاسبه دقیق و خودکار حقوق، مزایا، کسورات و انطباق کامل با قوانین بیمه و مالیات.",
        href: "#"
      }
    ]
  },
  commercePage: {
    hero: {
      badge: "راهکار تخصصی برای تجارت",
      title: "نرم‌افزار حسابداری بازرگانی جوان وب ای",
      subtitle: "مدیریت جامع و یکپارچه فرآیندهای خرید، فروش، انبارداری، حسابداری، خزانه‌داری و عملیات ارزی برای شرکت‌های تجاری و بازرگانی. با اتوماسیون هوشمند، کنترل دقیقی بر سود و زیان و گردش مالی خود داشته باشید.",
      ctaPrimary: "دریافت دموی تخصصی",
      ctaSecondary: "بررسی ماژول‌ها",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-942bb68b3b36?q=80&w=2070&auto=format&fit=crop"
    },
    challenges: {
      title: "چالش‌های شرکت‌های بازرگانی که ما حل می‌کنیم",
      subtitle: "از مدیریت پیچیده سفارشات تا نوسانات ارزی، نرم‌افزار بازرگانی جوان وب ای برای غلبه بر این موانع طراحی شده است.",
      items: [
        { icon: "CurrencyIcon", title: "مدیریت نوسانات ارزی و چند ارزی", description: "ثبت دقیق معاملات با ارزهای مختلف، محاسبه خودکار سود و زیان تسعیر ارز و ارائه گزارشات ارزی یکپارچه." },
        { icon: "WarehouseManagementIcon", title: "کنترل پیچیده انبار و موجودی", description: "ردیابی کالا از لحظه سفارش تا تحویل، مدیریت انبارها و مکان‌یابی کالا، و جلوگیری از کمبود یا انباشت موجودی." },
        { icon: "FinanceIcon", title: "محاسبه دقیق سود و زیان هر معامله", description: "تحلیل سودآوری بر اساس هر کالا، هر مشتری یا هر فاکتور با در نظر گرفتن تمام هزینه‌های مستقیم و غیرمستقیم." },
        { icon: "ReportsIcon", title: "نیاز به گزارشات جامع و لحظه‌ای", description: "دسترسی به گزارشات تحلیلی از فروش، خرید، موجودی، نقدینگی و وضعیت اعتباری مشتریان برای تصمیم‌گیری سریع." }
      ]
    },
    modules: {
      title: "ماژول‌های قدرتمند برای مدیریت ۳۶۰ درجه کسب‌وکار شما",
      items: [
        { icon: "SalesIcon", title: "مدیریت فروش", points: ["صدور پیش‌فاکتور، فاکتور فروش و برگشت از فروش", "قیمت‌گذاری پویا بر اساس مشتری یا حجم خرید", "مدیریت پورسانت بازاریابان", "تحلیل فروش بر اساس کالا، مشتری و منطقه"] },
        { icon: "TransactionIcon", title: "مدیریت خرید", points: ["ثبت سفارشات خرید داخلی و خارجی", "مدیریت هزینه‌های جانبی خرید (حمل، گمرک و...)", "مقایسه قیمت و شرایط تامین‌کنندگان", "کنترل فرآیند از درخواست تا تحویل"] },
        { icon: "WarehouseManagementIcon", title: "مدیریت انبارداری", points: ["مدیریت چند انبار و انتقال کالا", "ردیابی بر اساس شماره سریال یا بچ", "انبارگردانی و کنترل مغایرت‌ها", "کاردکس تعدادی و ریالی کالا"] },
        { icon: "FinanceIcon", title: "حسابداری مالی", points: ["ثبت اتوماتیک اسناد مالی", "کدینگ حساب‌ها تا سطوح تفصیلی شناور", "تهیه صورت‌های مالی (ترازنامه، سود و زیان)", "مدیریت مراکز هزینه و پروژه"] },
        { icon: "TreasuryIcon", title: "خزانه‌داری و کنترل نقدینگی", points: ["مدیریت چک‌های دریافتی و پرداختی", "کنترل صندوق‌ها و حساب‌های بانکی", "گزارش جریان وجوه نقد", "عملیات بانکی و مغایرت‌گیری"] },
        { icon: "CurrencyIcon", title: "عملیات ارزی", points: ["تعریف نامحدود ارز و نرخ تبدیل", "صدور فاکتورهای ارزی", "محاسبه و ثبت سند تسعیر ارز", "گزارشات مانده حساب ارزی"] },
        { icon: "CustomerClubIcon", title: "مدیریت مشتریان (CRM)", points: ["پرونده کامل مشتریان و تامین‌کنندگان", "تعیین سقف اعتبار و دوره تسویه", "گزارش مشتریان بدهکار و خوش‌حساب", "دسته‌بندی مشتریان و تحلیل رفتار خرید"] },
        { icon: "ReportsIcon", title: "گزارشات و هوش تجاری (BI)", points: ["داشبوردهای مدیریتی پویا", "گزارشات سودآوری تحلیلی", "ساخت گزارشات سفارشی", "خروجی به Excel و اتصال به ابزارهای BI"] }
      ]
    },
    keyAspects: {
      title: "ویژگی‌های جامع برای کسب‌وکارهای بازرگانی",
      items: [
        { icon: "DesktopComputerIcon", title: "نسخه‌های نرم‌افزار", points: ["ویندوز: قدرت و پایداری برای عملیات اصلی", "تحت وب: دسترسی و مدیریت از هر کجا", "چندشرکتی: مدیریت متمرکز چند شخصیت حقوقی"] },
        { icon: "IndustryIcon", title: "کسب‌وکارهای هدف", points: ["شرکت‌های واردات و صادرات", "عمده‌فروشان و مراکز پخش", "شرکت‌های بازرگانی داخلی", "تامین‌کنندگان قطعات و تجهیزات"] },
        { icon: "ShieldCheckIcon", title: "مزایای رقابتی", points: ["یکپارچگی کامل بین تمام ماژول‌ها", "انعطاف‌پذیری بالا و قابلیت سفارشی‌سازی", "گزارشات دقیق و کاربردی برای تصمیم‌سازی", "پشتیبانی از آخرین قوانین مالیاتی و تجاری کشور"] }
      ]
    },
    finalCta: {
      title: "تجارت خود را هوشمندانه و دقیق مدیریت کنید",
      subtitle: "با نرم‌افزار بازرگانی جوان وب ای، پیچیدگی‌ها را به فرصت تبدیل کرده و با اطمینان در مسیر رشد قدم بردارید.",
      cta: "درخواست مشاوره و دموی رایگان"
    }
  },
  industrialPage: {
    hero: {
      badge: "راهکار تخصصی تولید و صنعت",
      title: "نرم‌افزار حسابداری صنعتی و بهای تمام شده جوان وب ای",
      subtitle: "مدیریت دقیق و یکپارچه خط تولید، از تعریف فرمول ساخت (BOM) و برآورد هزینه‌ها تا محاسبه بهای تمام شده واقعی و کنترل انحرافات. با جوان وب ای، بهره‌وری را افزایش داده و سودآوری تولید را به حداکثر برسانید.",
      ctaPrimary: "درخواست دموی صنعتی",
      ctaSecondary: "بررسی ماژول‌ها",
      imageUrl: "https://images.unsplash.com/photo-1581092921449-41b43973343a?q=80&w=2070&auto=format&fit=crop"
    },
    challenges: {
      title: "چالش‌های واحدهای تولیدی که ما حل می‌کنیم",
      subtitle: "از پیچیدگی محاسبه بهای تمام شده تا کنترل ضایعات، نرم‌افزار صنعتی جوان وب ای برای پاسخ به این نیازها طراحی شده است.",
      items: [
        { icon: "CalculatorIcon", title: "محاسبه پیچیده بهای تمام شده", description: "محاسبه دقیق هزینه مواد، دستمزد و سربار برای هر محصول و شناسایی نقاط پرهزینه فرآیند تولید." },
        { icon: "ProductionIcon", title: "مدیریت فرمول ساخت (BOM)", description: "تعریف و مدیریت فرمول‌های تولید چند مرحله‌ای، کنترل نسخه‌های مختلف و برآورد هزینه قبل از تولید." },
        { icon: "TrashIcon", title: "کنترل ضایعات و انحرافات", description: "ردیابی و ثبت ضایعات عادی و غیرعادی در هر مرحله از تولید و مقایسه آن با استانداردهای تعریف شده." },
        { icon: "WarehouseManagementIcon", title: "ردیابی مواد اولیه و محصولات", description: "کنترل دقیق موجودی مواد اولیه، کالای در جریان ساخت و محصولات نهایی در انبارها و خط تولید." }
      ]
    },
    modules: {
      title: "ماژول‌های تخصصی برای مدیریت کامل فرآیند تولید",
      items: [
        { icon: "ProductionIcon", title: "مدیریت تولید و بهای تمام شده", points: ["تعریف فرمول ساخت (BOM) و نسخه‌های مختلف", "ثبت سفارش کار و حواله تولید", "جذب هزینه‌های دستمزد و سربار", "محاسبه بهای تمام شده واقعی و استاندارد", "تحلیل انحرافات تولید"] },
        { icon: "WarehouseManagementIcon", title: "مدیریت انبار مواد و محصولات", points: ["کنترل موجودی مواد اولیه، نیمه‌ساخته و محصول", "سیستم مکان‌یابی (LIFO, FIFO, میانگین)", "درخواست کالا از انبار و ثبت رسید تولید", "ردیابی کالا بر اساس بچ نامبر (Batch Number)"] },
        { icon: "SalesIcon", title: "فروش و مدیریت سفارشات", points: ["ثبت سفارش مشتری و برنامه‌ریزی تولید", "صدور فاکتور فروش بر اساس قیمت تمام شده", "تحلیل حاشیه سود هر محصول", "مدیریت توزیع و ارسال محصول"] },
        { icon: "FinanceIcon", title: "حسابداری مالی و صنعتی", points: ["ثبت اتوماتیک اسناد تولید، فروش و انبار", "یکپارچگی کامل حسابداری مالی و صنعتی", "گزارشات بهای تمام شده کالای فروش رفته", "مدیریت مراکز هزینه (دوایر تولیدی و پشتیبانی)"] },
        { icon: "PayrollIcon", title: "حقوق و دستمزد", points: ["محاسبه حقوق پرسنل تولیدی و اداری", "تسهیم هزینه حقوق بر اساس مراکز هزینه", "ثبت سند حقوق در حسابداری مالی و صنعتی", "انطباق با قوانین کار و تامین اجتماعی"] },
        { icon: "ReportsIcon", title: "گزارشات و داشبورد مدیریتی", points: ["گزارش بهای تمام شده به تفکیک محصول", "گزارش انحرافات مواد، دستمزد و سربار", "تحلیل نقطه سر به سر و سودآوری", "داشبوردهای هوش تجاری (BI) برای مدیران"] }
      ]
    },
    keyAspects: {
      title: "ویژگی‌های جامع برای کسب‌وکارهای صنعتی",
      items: [
        { icon: "DesktopComputerIcon", title: "نسخه‌های نرم‌افزار", points: ["ویندوز: ایده‌آل برای استقرار در کارخانه", "تحت وب: نظارت بر تولید از هر مکان", "یکپارچه: اتصال تمام بخش‌ها در یک پلتفرم"] },
        { icon: "IndustryIcon", title: "صنایع هدف", points: ["تولیدکنندگان مواد غذایی و آشامیدنی", "صنایع قطعه‌سازی و ماشین‌سازی", "تولیدکنندگان محصولات شیمیایی و پلیمری", "صنایع نساجی، پوشاک و چاپ"] },
        { icon: "ShieldCheckIcon", title: "مزایای رقابتی", points: ["محاسبه دقیق و قابل اتکای بهای تمام شده", "انعطاف‌پذیری در تعریف فرآیندهای تولید", "کاهش هزینه‌ها از طریق کنترل انحرافات", "گزارشات قدرتمند برای بهینه‌سازی تولید"] }
      ]
    },
    finalCta: {
      title: "خط تولید خود را به سودآوری برسانید",
      subtitle: "با نرم‌افزار صنعتی جوان وب ای، با حذف عدم قطعیت‌ها، کنترل هزینه‌ها و تصمیم‌گیری مبتنی بر داده، حاشیه سود خود را افزایش دهید.",
      cta: "مشاوره و دریافت دموی رایگان"
    }
  },
  taxpayerSystemPage: {
    hero: {
      badge: "مطابق با آخرین قوانین مالیاتی",
      title: "نرم‌افزار واسط سامانه مودیان جوان وب ای",
      subtitle: "ارسال آسان، سریع و ایمن صورتحساب‌های الکترونیکی به سامانه مودیان مالیاتی، بدون نیاز به تغییر در نرم‌افزار حسابداری فعلی شما. با راهکار جوان وب ای، با خیال راحت به تکالیف قانونی خود عمل کنید.",
      ctaPrimary: "شروع اتصال به سامانه",
      ctaSecondary: "مشاهده امکانات",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d044b408221?q=80&w=2070&auto=format&fit=crop"
    },
    challenges: {
      title: "اهداف اصلی نرم‌افزار واسط سامانه مودیان",
      subtitle: "این نرم‌افزار طراحی شده تا فرآیند پیچیده اتصال به سامانه مودیان را برای شما ساده، سریع و بدون خطا کند.",
      items: [
        { icon: "UploadCloudIcon", title: "ارسال سریع و خودکار صورتحساب‌ها", description: "اتصال مستقیم به نرم‌افزار حسابداری شما و ارسال دسته‌ای یا تکی فاکتورها به سامانه مودیان با چند کلیک." },
        { icon: "CogIcon", title: "مدیریت خطاها و وضعیت صورتحساب", description: "دریافت بازخورد لحظه‌ای از سامانه، شناسایی و رفع خطاهای احتمالی قبل از ارسال نهایی و پیگیری وضعیت هر صورتحساب." },
        { icon: "DatabaseIcon", title: "سازگاری و یکپارچگی", description: "قابلیت اتصال به انواع نرم‌افزارهای حسابداری و فروش از طریق فایل اکسل، وب‌سرویس (API) یا اتصال مستقیم به دیتابیس." },
        { icon: "ReportsIcon", title: "بایگانی و گزارش‌گیری مطمئن", description: "ذخیره‌سازی تمام سوابق ارسال، دریافت کدهای مالیاتی منحصر به فرد و تهیه گزارشات مدیریتی و قانونی." }
      ]
    },
    features: {
      title: "امکانات کلیدی برای اتصال بی‌دردسر",
      items: [
        { icon: "UsersIcon", title: "مدیریت مودیان و پرونده‌های مالیاتی", points: ["تعریف چندین شرکت و پرونده مالیاتی", "مدیریت کلیدهای عمومی و خصوصی به صورت امن", "دریافت شناسه یکتای حافظه مالیاتی"] },
        { icon: "UploadCloudIcon", title: "روش‌های متنوع ورود اطلاعات", points: ["ورود اطلاعات از طریق فایل اکسل", "اتصال مستقیم به دیتابیس نرم‌افزار حسابداری", "فراخوانی از طریق وب‌سرویس (API)", "ورود دستی اطلاعات صورتحساب"] },
        { icon: "CogIcon", title: "پردازش و آماده‌سازی صورتحساب", points: ["اعتبارسنجی اولیه اطلاعات قبل از ارسال", "تطابق با الگوهای مختلف صورتحساب (نوع اول و دوم)", "محاسبه خودکار مالیات بر ارزش افزوده", "مدیریت شناسه‌های کالا/خدمت"] },
        { icon: "ChartBarIcon", title: "ارسال، استعلام و مدیریت وضعیت", points: ["ارسال دسته‌ای و تکی صورتحساب‌ها", "دریافت آنی شماره منحصر به فرد مالیاتی", "استعلام وضعیت هر صورتحساب (تایید، رد، در حال بررسی)", "قابلیت ابطال یا اصلاح صورتحساب‌های ارسالی"] },
        { icon: "ReportsIcon", title: "گزارش‌گیری و بایگانی", points: ["گزارش کامل از صورتحساب‌های ارسالی", "خروجی اکسل از وضعیت فاکتورها", "بایگانی الکترونیکی امن سوابق", "داشبورد مدیریتی برای مشاهده آمار کلی"] }
      ]
    },
    // FIX: Added missing 'integrations' property to conform to the TaxpayerSystemPage interface.
    integrations: {
        title: "یکپارچگی با سیستم‌های شما",
        subtitle: "نرم‌افزار واسط جوان وب ای به راحتی با نرم‌افزارهای حسابداری و فروش شما یکپارچه می‌شود تا فرآیند ارسال صورتحساب‌ها کاملاً خودکار شود.",
        items: [
          { icon: "LinkIcon", name: "اتصال به نرم‌افزارهای حسابداری" },
          { icon: "DatabaseIcon", name: "ورود اطلاعات از اکسل و دیتابیس" },
          { icon: "SmsPanelIcon", name: "ارسال اعلان‌های پیامکی" }
        ]
    },
    keyAspects: {
      title: "ویژگی‌های جامع نرم‌افزار واسط",
      items: [
        {
          icon: "ShieldCheckIcon",
          title: "امنیت و پایداری",
          points: [
            "رمزنگاری اطلاعات مطابق با استانداردهای سامانه",
            "پشتیبانی فنی و به‌روزرسانی مداوم",
            "عملکرد پایدار و بدون قطعی"
          ]
        },
        {
          icon: "LinkIcon",
          title: "انعطاف‌پذیری و سازگاری",
          points: [
            "سازگار با اکثر نرم‌افزارهای حسابداری موجود در بازار",
            "قابل استفاده برای شرکت‌های خدماتی، بازرگانی و تولیدی",
            "ارائه در نسخه‌های ویندوزی و تحت وب"
          ]
        }
      ]
    },
    finalCta: {
      title: "با خیال آسوده به سامانه مودیان متصل شوید",
      subtitle: "پیچیدگی‌های فنی را به ما بسپارید و با نرم‌افزار واسط جوان وب ای، به سادگی و با اطمینان، تکالیف مالیاتی خود را انجام دهید.",
      cta: "دریافت مشاوره رایگان"
    }
  },
  restaurantPage: {
    hero: {
      badge: "راهکار تخصصی رستوران و کافی‌شاپ",
      title: "نرم‌افزار جامع مدیریت رستوران جوان وب ای",
      subtitle: "از ثبت سفارش سر میز تا مدیریت آشپزخانه، انبار و حسابداری، همه چیز در یک سیستم یکپارچه. با نرم‌افزار رستورانی جوان وب ای، سرعت سرویس‌دهی را افزایش دهید، هزینه‌ها را کنترل کنید و رضایت مشتریان را به اوج برسانید.",
      ctaPrimary: "درخواست دموی رایگان",
      ctaSecondary: "مشاهده امکانات",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
    },
    challenges: {
      title: "چالش‌های مدیریت رستوران که ما حل می‌کنیم",
      subtitle: "محیط پویای رستوران نیازمند ابزاری سریع، دقیق و قابل اعتماد است. نرم‌افزار جوان وب ای برای پاسخ به این نیازها طراحی شده است.",
      items: [
        { icon: "ClockIcon", title: "سرعت پایین در ثبت سفارش و تسویه", description: "ثبت سفارش آنی سر میز با تبلت، ارسال مستقیم به آشپزخانه و صدور سریع فیش برای جلوگیری از اتلاف وقت." },
        { icon: "InventoryIcon", title: "عدم کنترل بر موجودی و هزینه‌ها", description: "مدیریت دقیق انبار مواد اولیه، محاسبه بهای تمام شده غذا و کنترل ضایعات برای افزایش حاشیه سود." },
        { icon: "CrmIcon", title: "نبود ارتباط موثر با مشتریان", description: "ایجاد باشگاه مشتریان، ارائه تخفیف‌های هوشمند و ارسال پیامک برای حفظ مشتریان وفادار و جذب مشتریان جدید." },
        { icon: "WarehouseManagementIcon", title: "ناهماهنگی بین سالن و آشپزخانه", description: "ارسال دیجیتال و بدون خطای سفارشات به پرینترهای مختلف آشپزخانه و مدیریت صف آماده‌سازی غذا." }
      ]
    },
    features: {
      title: "ماژول‌ها و امکانات کلیدی برای هر نوع رستوران",
      items: [
        { icon: "PosDeviceIcon", title: "مدیریت فروش و صندوق", points: ["صندوق فروش لمسی (POS) با کاربری آسان", "ثبت سفارش حضوری، بیرون‌بر و دلیوری", "مدیریت میزها و رزرو", "تسویه نقدی، کارتی و اعتباری", "اتصال به کالرآیدی برای سفارشات تلفنی"] },
        { icon: "ProductionIcon", title: "مدیریت آشپزخانه و تولید", points: ["تعریف فرمول ساخت (BOM) برای هر غذا", "چاپ سفارش در پرینترهای مختلف (آشپزخانه، بار...)", "کسر خودکار مواد اولیه از انبار پس از فروش", "محاسبه دقیق بهای تمام شده هر پرس غذا"] },
        { icon: "WarehouseManagementIcon", title: "مدیریت انبار و انبارگردانی", points: ["تعریف مواد اولیه با واحدهای مختلف (کیلو، عدد)", "ثبت رسید خرید و حواله مصرف", "انبارگردانی و کنترل مغایرت‌ها", "گزارش کاردکس مواد و نقطه سفارش"] },
        { icon: "CustomerClubIcon", title: "باشگاه مشتریان و بازاریابی", points: ["ثبت اطلاعات مشتریان و سوابق خرید", "سیستم امتیازدهی و اعتبار مشتری", "ارائه تخفیف‌های مناسبتی و حجمی", "ارسال پیامک‌های هوشمند (تبریک تولد، نظرسنجی)"] },
        { icon: "ReportsIcon", title: "گزارشات و داشبورد مدیریتی", points: ["گزارش فروش روزانه و دوره‌ای", "تحلیل غذاهای پرفروش و پرسود", "گزارش عملکرد پیک‌ها و صندوق‌داران", "داشبورد مدیریتی زنده و گرافیکی"] },
        { icon: "FinanceIcon", title: "حسابداری و امور مالی", points: ["ثبت اتوماتیک اسناد فروش و هزینه", "مدیریت هزینه‌های رستوران", "گزارش سود و زیان جامع", "اتصال به سامانه مودیان مالیاتی"] }
      ]
    },
    integrations: {
      title: "یکپارچگی کامل با اکوسیستم رستوران شما",
      subtitle: "نرم‌افزار جوان وب ای به راحتی با سخت‌افزارها و پلتفرم‌های مورد نیاز شما یکپارچه می‌شود.",
      items: [
        { icon: "PosDeviceIcon", name: "نمایشگر مشتری و پرینتر حرارتی" },
        { icon: "ReceiptPrinterIcon", name: "پرینترهای آشپزخانه و فیش‌زن" },
        { icon: "CreditCardTerminalIcon", name: "دستگاه‌های کارتخوان بانکی" },
        { icon: "SmsPanelIcon", name: "پنل‌های پیامکی" },
        { icon: "ECommerceIcon", name: "پلتفرم‌های سفارش آنلاین" }
      ]
    },
    keyAspects: {
      title: "ویژگی‌های جامع برای کسب‌وکارهای صنعت غذا",
      items: [
        { icon: "DesktopComputerIcon", title: "نسخه‌های نرم‌افزار", points: ["نسخه کامل ویندوزی برای صندوق و مدیریت", "اپلیکیشن اندروید گارسون برای ثبت سفارش", "پنل مدیریتی تحت وب برای نظارت از راه دور"] },
        { icon: "RestaurantIcon", title: "کسب‌وکارهای هدف", points: ["رستوران‌ها و فست‌فودها", "کافی‌شاپ‌ها و آبمیوه‌فروشی‌ها", "فودکورت‌ها و مجموعه‌های غذایی", "کترینگ‌ها و آشپزخانه‌های صنعتی"] },
        { icon: "UserManagementIcon", title: "مزایای رقابتی", points: ["رابط کاربری فوق‌العاده سریع و ساده", "انعطاف‌پذیری بالا برای انواع کسب‌وکارها", "یکپارچگی کامل بین تمام بخش‌ها", "پشتیبانی تخصصی و ۲۴ ساعته"] }
      ]
    },
    finalCta: {
      title: "رستوران خود را به یک کسب‌وکار هوشمند تبدیل کنید",
      subtitle: "با نرم‌افزار رستورانی جوان وب ای، فرآیندها را بهینه کنید، هزینه‌ها را کاهش دهید و با ارائه سرویس بی‌نقص، مشتریان خود را شگفت‌زده کنید.",
      cta: "دریافت دموی تخصصی رستوران"
    }
  },
  hotelHallPage: {
    hero: {
      badge: "راهکار یکپارچه هتلداری و تشریفات",
      title: "نرم‌افزار مدیریت هتل و تالار جوان وب ای",
      subtitle: "از رزرواسیون و پذیرش مهمانان تا مدیریت کامل مراسم و حسابداری، همه چیز در یک پلتفرم هوشمند. با نرم‌افزار جوان وب ای، تجربه اقامتی بی‌نظیر برای مهمانان خود خلق کنید و رویدادهایی خاطره‌انگیز برگزار نمایید.",
      ctaPrimary: "درخواست دموی تخصصی",
      ctaSecondary: "بررسی امکانات",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
    },
    challenges: {
      title: "چالش‌های مدیریت هتل و تالار که ما حل می‌کنیم",
      subtitle: "صنعت هتلداری و تشریفات نیازمند هماهنگی دقیق، سرعت عمل و توجه به جزئیات است. نرم‌افزار جوان وب ای برای پاسخ به این نیازها طراحی شده است.",
      items: [
        { icon: "ClockIcon", title: "پیچیدگی رزرواسیون و پذیرش", description: "مدیریت آسان وضعیت اتاق‌ها و سالن‌ها، ثبت رزروهای فردی و گروهی و انجام سریع فرآیند Check-in/Check-out." },
        { icon: "ProductionIcon", title: "ناهماهنگی در خدمات و سرویس‌ها", description: "هماهنگی دقیق بین بخش پذیرش، خانه‌داری، رستوران و تالار برای ارائه خدمات بدون نقص به مهمانان و مراجعین." },
        { icon: "CalculatorIcon", title: "کنترل هزینه‌ها و محاسبه صورتحساب", description: "مدیریت هزینه‌های اقامتی، خدمات اضافی، منوهای غذایی و قراردادهای مراسم با صدور صورتحساب‌های شفاف و دقیق." },
        { icon: "CrmIcon", title: "مدیریت ارتباط با مهمانان و مشتریان", description: "ایجاد پرونده برای مهمانان و مشتریان تالار، ارائه بسته‌های ویژه و حفظ ارتباط برای مراجعات بعدی." }
      ]
    },
    features: {
      title: "ماژول‌های تخصصی برای مدیریت کامل مجموعه شما",
      items: [
        { icon: "HotelIcon", title: "مدیریت پذیرش و رزرواسیون هتل", points: ["نمایش گرافیکی وضعیت اتاق‌ها (روم‌رک)", "رزرواسیون آنلاین، تلفنی و حضوری", "پذیرش سریع مهمانان فردی و گروهی", "مدیریت خانه‌داری و وضعیت نظافت اتاق‌ها", "اتصال به سیستم‌های قفل کارتی"] },
        { icon: "RestaurantIcon", title: "مدیریت تالار و برگزاری مراسم", points: ["تقویم رزرو سالن‌ها و مدیریت قراردادها", "تعریف منوهای غذایی و پکیج‌های تشریفاتی", "مدیریت خدمات جانبی (گل‌آرایی، موسیقی و...)", "صدور پیش‌فاکتور و صورتحساب نهایی مراسم"] },
        { icon: "FinanceIcon", title: "حسابداری و امور مالی", points: ["ثبت اتوماتیک درآمدهای اقامتی و خدمات", "مدیریت حساب مهمانان (فولیوی مهمان)", "گزارش‌های مالی و سود و زیان", "اتصال به سامانه مودیان مالیاتی"] },
        { icon: "WarehouseManagementIcon", title: "انبارداری و مدیریت هزینه‌ها", points: ["کنترل موجودی ملزومات هتلی و مواد اولیه", "محاسبه بهای تمام شده خدمات و غذا", "مدیریت خرید و تامین‌کنندگان", "گزارشات مصرف و کنترل هزینه‌ها"] },
        { icon: "CrmIcon", title: "مدیریت ارتباط با مشتریان (CRM)", points: ["ایجاد پروفایل برای مهمانان و آژانس‌ها", "ارسال پیامک خوش‌آمدگویی و نظرسنجی", "ارائه تخفیف به مهمانان وفادار", "تحلیل رفتار و ترجیحات مهمانان"] },
        { icon: "ReportsIcon", title: "گزارشات و داشبورد مدیریتی", points: ["گزارش درصد اشغال هتل (Occupancy)", "تحلیل درآمد بر اساس هر اتاق (RevPAR)", "گزارش عملکرد تالار و مراسم", "داشبورد مدیریتی جامع و لحظه‌ای"] }
      ]
    },
    integrations: {
      title: "یکپارچگی کامل با اکوسیستم هتلداری",
      subtitle: "نرم‌افزار جوان وب ای به راحتی با سیستم‌های استاندارد هتلداری و تشریفات یکپارچه می‌شود.",
      items: [
        { icon: "CogIcon", name: "سیستم‌های قفل کارتی اتاق" },
        { icon: "PosDeviceIcon", name: "صندوق‌های فروش رستوران و کافی‌شاپ" },
        { icon: "CreditCardTerminalIcon", name: "دستگاه‌های کارتخوان بانکی" },
        { icon: "ECommerceIcon", name: "موتورهای رزرواسیون آنلاین (Booking Engine)" }
      ]
    },
    keyAspects: {
      title: "ویژگی‌های جامع برای کسب‌وکارهای اقامتی و تشریفاتی",
      items: [
        { icon: "DesktopComputerIcon", title: "نسخه‌های نرم‌افزار", points: ["نسخه کامل ویندوزی برای پذیرش و مدیریت", "پنل مدیریتی تحت وب برای نظارت از راه دور", "یکپارچگی کامل بین ماژول هتل و تالار"] },
        { icon: "HotelIcon", title: "کسب‌وکارهای هدف", points: ["هتل‌ها و هتل‌آپارتمان‌ها", "مهمان‌پذیرها و اقامتگاه‌ها", "تالارهای پذیرایی و باغ‌سراها", "مجموعه‌های اقامتی و تفریحی"] },
        { icon: "UserManagementIcon", title: "مزایای رقابتی", points: ["رابط کاربری ساده و تخصصی", "پوشش کامل نیازهای هتل و تالار", "گزارشات استاندارد هتلداری", "پشتیبانی و آموزش حرفه‌ای"] }
      ]
    },
    finalCta: {
      title: "تجربه‌ای به‌یادماندنی برای مهمانان، مدیریتی آسان برای شما",
      subtitle: "با نرم‌افزار یکپارچه هتل و تالار جوان وب ای، با افزایش بهره‌وری و ارائه خدمات بی‌نقص، کسب‌وکار خود را به سطح جدیدی از کیفیت و سودآوری برسانید.",
      cta: "درخواست دموی تخصصی"
    }
  },
  payrollPage: {
    hero: {
      badge: "دقیق، سریع و مطابق با قانون",
      title: "نرم‌افزار حقوق و دستمزد جوان وب ای",
      subtitle: "محاسبه خودکار و دقیق حقوق، مزایا، کسورات، مالیات و بیمه پرسنل، مطابق با آخرین قوانین کار و تامین اجتماعی. با نرم‌افزار جوان وب ای، فرآیندهای پیچیده حقوق و دستمزد را به یک عملیات ساده و بدون خطا تبدیل کنید.",
      ctaPrimary: "درخواست دموی رایگان",
      ctaSecondary: "مشاهده امکانات",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    challenges: {
      title: "اهداف اصلی نرم‌افزار حقوق و دستمزد",
      subtitle: "این نرم‌افزار برای حل چالش‌های کلیدی مدیران مالی و منابع انسانی طراحی شده است تا دقت، سرعت و انطباق قانونی را تضمین کند.",
      items: [
        { icon: "CalculatorIcon", title: "محاسبه دقیق و بدون خطای حقوق", description: "اتوماسیون کامل محاسبات پیچیده حقوق، اضافه کاری، نوبت کاری، مزایا، وام‌ها، مالیات و بیمه برای جلوگیری از هرگونه اشتباه." },
        { icon: "ClockIcon", title: "صرفه‌جویی در زمان و کاهش عملیات دستی", description: "کاهش چشمگیر زمان مورد نیاز برای پردازش حقوق ماهانه از طریق ورود اطلاعات کارکرد و محاسبه خودکار حقوق صدها پرسنل." },
        { icon: "ShieldCheckIcon", title: "انطباق کامل با قوانین و مقررات", description: "به‌روزرسانی مداوم نرم‌افزار مطابق با آخرین تغییرات قوانین کار، تامین اجتماعی و مالیات برای جلوگیری از جرائم." },
        { icon: "ReportsIcon", title: "ارائه گزارشات قانونی و مدیریتی", description: "تهیه سریع و آسان فایل‌های مورد نیاز بیمه و دارایی، و ارائه گزارشات تحلیلی برای مدیران جهت کنترل هزینه‌های پرسنلی." }
      ]
    },
    features: {
      title: "امکانات جامع برای مدیریت کامل پرسنل",
      items: [
        { icon: "UsersIcon", title: "مدیریت اطلاعات پرسنل و کارگزینی", points: ["ثبت پرونده کامل پرسنلی (اطلاعات فردی، استخدامی، تحصیلی)", "بایگانی الکترونیکی مدارک (قرارداد، مدارک شناسایی)", "مدیریت قراردادهای کار و سوابق شغلی", "صدور انواع حکم (استخدام، افزایش حقوق، تغییر سمت)"] },
        { icon: "ClockIcon", title: "مدیریت کارکرد و حضور و غیاب", points: ["اتصال به انواع دستگاه‌های کارت‌خوان", "تعریف شیفت‌های کاری مختلف (عادی، چرخشی، نوبتی)", "محاسبه خودکار کارکرد، غیبت، مرخصی و ماموریت", "مدیریت درخواست‌های مرخصی و ماموریت"] },
        { icon: "CalculatorIcon", title: "محاسبه حقوق و مزایا", points: ["تعریف نامحدود عوامل حقوقی (مزایا و کسورات)", "محاسبه خودکار حقوق، عیدی، سنوات و بازخرید مرخصی", "مدیریت وام‌ها و اقساط پرسنل", "محاسبه انواع اضافه کاری، نوبت کاری و شب کاری"] },
        { icon: "FinanceIcon", title: "محاسبات قانونی (بیمه و مالیات)", points: ["محاسبه دقیق مالیات حقوق بر اساس جدول مالیاتی سال", "محاسبه سهم بیمه کارگر و کارفرما", "امکان تعریف انواع معافیت‌های قانونی", "انطباق کامل با ماده‌های ۸۲ تا ۹۲ قانون مالیات‌های مستقیم"] },
        { icon: "DocumentDuplicateIcon", title: "خروجی‌ها و گزارشات قانونی", points: ["تهیه دیسکت بیمه (لیست ماهانه) برای سامانه تامین اجتماعی", "تهیه فایل مالیات حقوق برای سامانه امور مالیاتی", "چاپ فیش حقوقی با فرمت‌های متنوع", "گزارشات جامع از کارکرد و حقوق پرسنل"] },
        { icon: "ChartBarIcon", title: "گزارشات مدیریتی و تحلیلی", points: ["گزارش هزینه حقوق به تفکیک واحد و مرکز هزینه", "تحلیل روند تغییرات حقوق و دستمزد", "گزارش مانده مرخصی پرسنل", "داشبورد مدیریتی هزینه‌های پرسنلی"] }
      ]
    },
    integrations: {
      title: "یکپارچگی هوشمند با سایر سیستم‌ها",
      subtitle: "نرم‌افزار حقوق و دستمزد جوان وب ای به راحتی با سایر سیستم‌های اداری و مالی شما یکپارچه می‌شود.",
      items: []
    },
    keyAspects: {
      title: "ویژگی‌های جامع برای هر نوع کسب‌وکار",
      items: [
        { icon: "CogIcon", title: "انعطاف‌پذیری و سفارشی‌سازی", points: ["قابلیت تعریف فرمول برای عوامل حقوقی پیچیده", "طراحی فیش حقوقی و گزارشات دلخواه", "سازگاری با شرکت‌های خدماتی، پیمانکاری، تولیدی و بازرگانی"] },
        { icon: "ShieldCheckIcon", title: "امنیت و کنترل دسترسی", points: ["تعیین سطح دسترسی برای کاربران مختلف", "رمزنگاری اطلاعات حساس پرسنلی", "ثبت کامل تاریخچه عملیات کاربران"] },
        { icon: "LinkIcon", title: "یکپارچگی کامل", points: ["اتصال به سیستم حسابداری و ثبت خودکار سند حقوق", "ارتباط با سیستم حضور و غیاب", "یکپارچگی با سیستم اتوماسیون اداری"] }
      ]
    },
    finalCta: {
      title: "محاسبات حقوق و دستمزد را به متخصصان بسپارید",
      subtitle: "با نرم‌افزار حقوق و دستمزد جوان وب ای، ضمن اطمینان از صحت محاسبات و انطباق با قوانین، زمان و انرژی خود را بر روی مدیریت استراتژیک منابع انسانی متمرکز کنید.",
      cta: "دریافت مشاوره و دموی رایگان"
    }
  },
  insurancePage: {
    hero: {
      badge: "زیرسیستم یکپارچه و هوشمند",
      title: "زیرسیستم بیمه در نرم‌افزار حقوق و دستمزد جوان وب ای",
      subtitle: "محاسبه دقیق و خودکار حق بیمه، تهیه لیست بیمه مطابق با آخرین استانداردهای سازمان تامین اجتماعی و ایجاد فایل خروجی برای سامانه آنلاین. با این زیرسیستم، پیچیدگی‌های ارسال لیست بیمه را برای همیشه فراموش کنید.",
      ctaPrimary: "درخواست مشاوره تخصصی",
      ctaSecondary: "بررسی قابلیت‌ها",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-942bb68b3b36?q=80&w=2070&auto=format&fit=crop"
    },
    importance: {
      title: "چرا مدیریت یکپارچه بیمه اهمیت دارد؟",
      items: [
        "جلوگیری از جرائم دیرکرد و عدم ارسال لیست بیمه.",
        "اطمینان از صحت محاسبات حق بیمه سهم کارگر و کارفرما.",
        "صرفه‌جویی چشمگیر در زمان و کاهش خطاهای انسانی.",
        "انطباق کامل با آخرین تغییرات قوانین و مقررات تامین اجتماعی.",
        "ایجاد سوابق دقیق و قابل استناد برای پرسنل و سازمان."
      ]
    },
    features: {
      title: "امکانات کلیدی زیرسیستم بیمه",
      items: [
        { icon: "CalculatorIcon", title: "محاسبه خودکار و دقیق", points: ["محاسبه حق بیمه بر اساس کارکرد ماهانه و عوامل مشمول بیمه", "پشتیبانی از انواع معافیت‌های بیمه‌ای (مانند معافیت سهم کارفرما)", "محاسبه بیمه بیکاری و سایر موارد قانونی"] },
        { icon: "CogIcon", title: "تنظیمات انعطاف‌پذیر", points: ["قابلیت تعریف کارگاه‌های مختلف با کدهای متفاوت", "امکان تعیین مشاغل و نرخ‌های بیمه مرتبط", "تنظیم آیتم‌های حقوقی مشمول و غیرمشمول بیمه"] },
        { icon: "DocumentDuplicateIcon", title: "تهیه و ارسال لیست بیمه", points: ["ایجاد خودکار لیست بیمه ماهانه بر اساس کارکرد ثبت‌شده", "تولید فایل خروجی (DSKKAR.txt) برای بارگذاری در سامانه تامین اجتماعی", "چاپ لیست بیمه با فرمت رسمی سازمان"] },
        { icon: "ReportsIcon", title: "گزارش‌گیری و بایگانی", points: ["گزارش ماهانه از لیست‌های بیمه ارسالی", "گزارش تفکیکی حق بیمه به ازای هر پرسنل", "بایگانی الکترونیکی سوابق بیمه‌ای پرسنل"] }
      ]
    },
    integrations: {
      title: "یکپارچگی کامل با سایر بخش‌ها",
      items: [
        { icon: "PayrollIcon", name: "سیستم حقوق و دستمزد" },
        { icon: "FinanceIcon", name: "سیستم حسابداری مالی" },
        { icon: "SmsPanelIcon", name: "سامانه تامین اجتماعی" }
      ]
    },
    advancedFeatures: {
      title: "قابلیت‌های پیشرفته",
      items: [
        "پشتیبانی از لیست بیمه برای قراردادهای پیمانکاری و محاسبه ضریب مربوطه.",
        "امکان تهیه لیست بیمه برای ماه‌های گذشته و محاسبات معوقه.",
        "مدیریت ترک کار پرسنل و ثبت تاریخ آن در لیست بیمه.",
        "گزارشات مقایسه‌ای از هزینه‌های بیمه در دوره‌های مختلف."
      ]
    },
    targetIndustries: {
      title: "مخاطبین اصلی",
      items: [
        { icon: "BuildingOfficeIcon", name: "شرکت‌های خدماتی و بازرگانی" },
        { icon: "IndustryIcon", name: "کارخانه‌ها و واحدهای تولیدی" },
        { icon: "StoreIcon", name: "فروشگاه‌های زنجیره‌ای و اصناف" }
      ]
    },
    finalCta: {
      title: "ارسال لیست بیمه را به یک کار ساده تبدیل کنید",
      subtitle: "با زیرسیستم بیمه جوان وب ای، با اطمینان از صحت محاسبات و با سرعت بالا، تکالیف قانونی خود را در قبال سازمان تامین اجتماعی انجام دهید.",
      cta: "دریافت مشاوره رایگان"
    }
  },
  salaryDeductionPage: {
    hero: {
      badge: "زیرسیستم هوشمند و کاربردی",
      title: "زیرسیستم کسر از حقوق در نرم‌افزار جوان وب ای",
      subtitle: "مدیریت یکپارچه و خودکار انواع وام‌ها، مساعده‌ها، اقساط و سایر کسورات پرسنل با قابلیت تعریف فرمول‌های پیچیده و گزارش‌گیری دقیق. این زیرسیستم، بار محاسبات دستی را از دوش شما برمی‌دارد.",
      ctaPrimary: "درخواست مشاوره تخصصی",
      ctaSecondary: "بررسی قابلیت‌ها",
      imageUrl: "https://images.unsplash.com/photo-1579621970795-87f54f12c2a2?q=80&w=2070&auto=format&fit=crop"
    },
    importance: {
      title: "چرا مدیریت هوشمند کسورات اهمیت دارد؟",
      items: [
        "جلوگیری از خطاهای محاسباتی در کسر اقساط وام و مساعده.",
        "افزایش شفافیت مالی بین کارمند و کارفرما.",
        "صرفه‌جویی در زمان و کاهش بار کاری واحد مالی و اداری.",
        "ایجاد سوابق دقیق و قابل استناد از تمام پرداخت‌ها و کسورات.",
        "انعطاف‌پذیری در مدیریت انواع تعهدات مالی پرسنل."
      ]
    },
    features: {
      title: "امکانات کلیدی زیرسیستم کسر از حقوق",
      items: [
        { icon: "CalculatorIcon", title: "مدیریت وام و تسهیلات", points: ["تعریف انواع وام با نرخ سود و تعداد اقساط مختلف", "محاسبه خودکار مبلغ هر قسط (ثابت یا متغیر)", "ثبت پرداخت وام و شروع خودکار کسر اقساط از حقوق", "گزارش کامل از وضعیت وام‌های هر پرسنل"] },
        { icon: "CurrencyIcon", title: "مدیریت مساعده و علی‌الحساب", points: ["ثبت درخواست و پرداخت مساعده", "امکان کسر مساعده به صورت یکجا یا در چند قسط", "کنترل سقف مجاز پرداخت مساعده برای هر فرد"] },
        { icon: "CogIcon", title: "تعریف انواع کسورات", points: ["امکان تعریف کسورات ثابت یا متغیر (مانند جریمه، بیمه تکمیلی)", "قابلیت فرمول‌نویسی برای کسورات پیچیده", "تعیین دوره زمانی برای اعمال هر یک از کسورات"] },
        { icon: "ReportsIcon", title: "گزارش‌گیری دقیق", points: ["گزارش خلاصه و تفصیلی از تمام کسورات ماهانه", "گزارش مانده وام و تعداد اقساط باقی‌مانده", "چاپ دفترچه قسط برای پرسنل"] }
      ]
    },
    integrations: {
      title: "یکپارچگی کامل با سایر بخش‌ها",
      items: [
        { icon: "PayrollIcon", name: "سیستم حقوق و دستمزد" },
        { icon: "FinanceIcon", name: "سیستم حسابداری مالی" },
        { icon: "TreasuryIcon", name: "سیستم خزانه‌داری" }
      ]
    },
    advancedFeatures: {
      title: "قابلیت‌های پیشرفته",
      items: [
        "امکان تعریف ضامن برای وام‌ها و گزارش‌گیری بر اساس آن.",
        "قابلیت توقف موقت کسر اقساط برای یک یا چند ماه.",
        "تسویه پیش از موعد وام و محاسبه تخفیف مربوطه.",
        "اعمال خودکار کسورات در محاسبات عیدی و سنوات."
      ],
      examples: {
        title: 'مثال‌های کاربردی',
        items: []
      }
    },
    finalCta: {
      title: "مدیریت تعهدات مالی پرسنل را ساده و دقیق کنید",
      subtitle: "با زیرسیستم کسر از حقوق جوان وب ای، با اطمینان کامل و بدون نیاز به محاسبات دستی، تمام وام‌ها، مساعده‌ها و سایر کسورات را مدیریت نمایید.",
      cta: "دریافت مشاوره رایگان"
    }
  },
  orderRegistrationPage: {
    hero: {
      badge: "زیرسیستم یکپارچه و کارآمد",
      title: "زیرسیستم ثبت سفارش در نرم‌افزار جوان وب ای",
      subtitle: "مدیریت هوشمند و متمرکز سفارشات مشتریان، از ثبت اولیه و اعتبارسنجی تا تخصیص کالا، صدور فاکتور و ارسال. با این زیرسیستم، فرآیند فروش خود را بهینه‌سازی کرده و رضایت مشتریان را افزایش دهید.",
      ctaPrimary: "درخواست مشاوره تخصصی",
      ctaSecondary: "بررسی قابلیت‌ها",
      imageUrl: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=2070&auto=format&fit=crop"
    },
    introduction: "زیرسیستم ثبت سفارش یک ابزار قدرتمند برای شرکت‌های بازرگانی، تولیدی و پخش است که فرآیند دریافت، پردازش و اجرای سفارشات مشتریان را به صورت کاملاً سیستماتیک مدیریت می‌کند. این سیستم به عنوان پل ارتباطی بین واحد فروش، انبار و مالی عمل کرده و هماهنگی بی‌نقصی را در کل چرخه فروش ایجاد می‌نماید.",
    keyObjectives: {
      title: "اهداف کلیدی زیرسیستم",
      items: [
        "افزایش سرعت و دقت در ثبت و پردازش سفارشات.",
        "کنترل دقیق موجودی کالا و جلوگیری از فروش کالای ناموجود.",
        "مدیریت اعتبار مشتریان و جلوگیری از فروش نسیه بیش از حد.",
        "بهبود هماهنگی بین تیم فروش، انبار و توزیع.",
        "ارائه گزارشات دقیق برای تحلیل عملکرد فروش و پیش‌بینی تقاضا."
      ]
    },
    features: {
      title: "امکانات کلیدی زیرسیستم ثبت سفارش",
      items: [
        { icon: "DocumentDuplicateIcon", title: "ثبت و مدیریت سفارشات", points: ["ثبت سفارش با جزئیات کامل (کالا، تعداد، قیمت، تخفیف)", "امکان ثبت سفارش توسط بازاریاب از طریق اپلیکیشن موبایل", "تبدیل پیش‌فاکتور به سفارش فروش", "پیگیری وضعیت هر سفارش (ثبت‌شده، تاییدشده، در حال ارسال)"] },
        { icon: "CrmIcon", title: "کنترل اعتبار مشتریان", points: ["بررسی آنی سقف اعتبار و مانده بدهی مشتری هنگام ثبت سفارش", "جلوگیری از ثبت سفارش برای مشتریان بدحساب یا خارج از سقف اعتبار", "نمایش تاریخچه مالی مشتری به مسئول فروش"] },
        { icon: "WarehouseIcon", title: "مدیریت موجودی و تخصیص کالا", points: ["نمایش موجودی قابل فروش در لحظه ثبت سفارش", "رزرو و تخصیص کالا در انبار پس از تایید سفارش", "اولویت‌بندی تخصیص کالا بر اساس تاریخ سفارش", "جلوگیری از تداخل در تخصیص یک کالا به چند سفارش"] },
        { icon: "SalesIcon", title: "صدور فاکتور و اسناد مرتبط", points: ["تبدیل یک یا چند سفارش به فاکتور فروش با یک کلیک", "صدور خودکار حواله خروج از انبار", "امکان صدور فاکتور تجمیعی برای چند سفارش یک مشتری"] }
      ]
    },
    integrations: {
      title: "یکپارچگی کامل با سایر بخش‌ها",
      items: [
        { icon: "SalesIcon", name: "سیستم فروش و پخش" },
        { icon: "WarehouseIcon", name: "سیستم انبارداری" },
        { icon: "FinanceIcon", name: "سیستم حسابداری مالی" },
        { icon: "TreasuryIcon", name: "سیستم خزانه‌داری" }
      ]
    },
    reports: {
      title: "گزارش‌های کاربردی و مدیریتی",
      items: [
        "گزارش سفارشات باز و در جریان",
        "گزارش کالاهای پرفروش و کم‌فروش",
        "تحلیل عملکرد بازاریابان و مناطق فروش",
        "گزارش دلایل عدم تایید یا لغو سفارشات",
        "پیش‌بینی فروش بر اساس سوابق سفارشات"
      ]
    },
    benefits: {
      title: "مزایای پیاده‌سازی زیرسیستم ثبت سفارش",
      items: [
        "کاهش خطاهای انسانی در ثبت سفارش و صدور فاکتور.",
        "افزایش رضایت مشتریان از طریق پردازش سریع و دقیق سفارشات.",
        "بهبود مدیریت نقدینگی با کنترل فروش‌های اعتباری.",
        "بهینه‌سازی سطح موجودی انبار و کاهش هزینه‌های نگهداری.",
        "افزایش شفافیت و هماهنگی در فرآیند فروش."
      ]
    },
    summary: "زیرسیستم ثبت سفارش جوان وب ای، با ایجاد یک فرآیند استاندارد و کنترل‌شده، به شما کمک می‌کند تا سفارشات مشتریان را به بهترین شکل ممکن مدیریت کرده و با افزایش بهره‌وری، سودآوری کسب‌وکار خود را تضمین نمایید.",
    finalCta: {
      title: "فرآیند فروش خود را متحول کنید",
      subtitle: "با زیرسیستم ثبت سفارش جوان وب ای، نظم و دقت را به قلب عملیات فروش خود بیاورید و یک گام بزرگ به سوی رشد پایدار بردارید.",
      cta: "دریافت مشاوره رایگان"
    }
  }
};