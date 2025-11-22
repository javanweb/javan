import React from 'react';
import { JavanWebiLogo, YouTubeIcon, InstagramIcon, TelegramIcon, WhatsAppIcon, AparatIcon } from './Icons';
import type { SiteContent } from '../siteData';

interface FooterProps {
  content: SiteContent['footer'];
  isEditorMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ content, isEditorMode }) => {
  const socialLinks = [
    { icon: YouTubeIcon, href: '#' },
    { icon: AparatIcon, href: '#' },
    { icon: TelegramIcon, href: '#' },
    { icon: WhatsAppIcon, href: '#' },
    { icon: InstagramIcon, href: '#' },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-text-on-primary)'}}>
      <div className={`${isEditorMode ? 'w-full' : 'container'} mx-auto px-4 sm:px-6 pt-16 pb-8`}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <JavanWebiLogo className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold">جوان وب ای</h3>
                <p className="text-sm opacity-80">طراحی و توسعه نرم افزار</p>
              </div>
            </div>
            <p className="opacity-90 leading-relaxed max-w-md">
              {content.description}
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">لینک‌های سریع</h4>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-80 hover:text-[var(--color-primary)] transition-colors">محصولات</a></li>
              <li><a href="#" className="opacity-80 hover:text-[var(--color-primary)] transition-colors">پشتیبانی</a></li>
              <li><a href="#" className="opacity-80 hover:text-[var(--color-primary)] transition-colors">بلاگ</a></li>
              <li><a href="#" className="opacity-80 hover:text-[var(--color-primary)] transition-colors">تماس با ما</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">{content.contact.title}</h4>
            <div className="space-y-4 opacity-80">
                {content.contact.address && <p>{content.contact.address}</p>}
                <p>{content.contact.phone}</p>
                <p>{content.contact.email}</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="bg-white/10 hover:bg-[var(--color-primary)] p-3 rounded-full transition-colors group">
                  <social.icon className="w-5 h-5" style={{ color: 'var(--color-text-on-primary)' }} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center opacity-90 text-sm">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;