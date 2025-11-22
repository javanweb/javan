import React, { useState } from 'react';
import { JavanWebiLogo, MenuIcon, CloseIcon, ChevronDownIcon, ChevronLeftIcon } from './Icons';
import type { NavLink as NavLinkType, Sublink } from '../siteData';

interface HeaderProps {
  setView: (view: 'homepage' | 'login' | 'dashboard') => void;
  navLinks: NavLinkType[];
  onNavigate: (page: NavLinkType | Sublink) => void;
  onGoHome: () => void;
  isEditorMode?: boolean;
}

const DropdownItem: React.FC<{
  item: Sublink;
  onNavigate: (page: Sublink) => void;
  isEditorMode?: boolean;
}> = ({ item, onNavigate, isEditorMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, page: Sublink) => {
    e.preventDefault();
    if (isEditorMode) return;
    onNavigate(page);
  };

  if (!item.sublinks || item.sublinks.length === 0) {
    return (
      <a
        href={item.href}
        onClick={(e) => handleLinkClick(e, item)}
        className="block px-4 py-2 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-on-primary)] transition-colors duration-200"
      >
        {item.name}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => !isEditorMode && setIsOpen(true)}
      onMouseLeave={() => !isEditorMode && setIsOpen(false)}
    >
      <button
        onClick={(e) => handleLinkClick(e, item)}
        className="w-full flex justify-between items-center px-4 py-2 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-on-primary)] transition-colors duration-200"
      >
        <span>{item.name}</span>
        <ChevronLeftIcon className="w-4 h-4" />
      </button>
      {isOpen && !isEditorMode && (
        <div className="absolute top-0 right-full w-48 bg-[var(--color-card-background)] rounded-md shadow-lg py-2 z-40 border border-[var(--color-border)]">
          {item.sublinks.map((subItem) => (
            <DropdownItem key={subItem.name} item={subItem} onNavigate={onNavigate} isEditorMode={isEditorMode} />
          ))}
        </div>
      )}
    </div>
  );
};


interface NavLinkProps {
  link: NavLinkType;
  onNavigate: (page: NavLinkType | Sublink) => void;
  isEditorMode?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ link, onNavigate, isEditorMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasContent = link.content && link.content.trim() !== '<p><br></p>' && link.content.trim() !== '';

  const handleLinkClick = (e: React.MouseEvent, page: NavLinkType | Sublink) => {
    e.preventDefault();
    if (isEditorMode) return;
    onNavigate(page);
  };

  if (!link.sublinks || link.sublinks.length === 0) {
    return (
      <a href={link.href} onClick={(e) => handleLinkClick(e, link)} className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors duration-300 py-2">
        {link.name}
      </a>
    );
  }

  return (
    <div 
      className="relative"
      onMouseEnter={!isEditorMode ? () => setIsOpen(true) : undefined}
      onMouseLeave={!isEditorMode ? () => setIsOpen(false) : undefined}
    >
      <button 
        onClick={(e) => { if(hasContent) handleLinkClick(e, link) }} 
        className={`flex items-center gap-1 text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors duration-300 py-2 ${hasContent ? '' : 'cursor-default'}`}
        disabled={isEditorMode}
      >
        <span>{link.name}</span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen && !isEditorMode ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && !isEditorMode && (
        <div className="absolute top-full right-0 w-48 bg-[var(--color-card-background)] rounded-md shadow-lg py-2 z-30 border border-[var(--color-border)]">
          {link.sublinks.map((sublink: Sublink) => (
            <DropdownItem key={sublink.name} item={sublink} onNavigate={onNavigate as (page: Sublink) => void} isEditorMode={isEditorMode} />
          ))}
        </div>
      )}
    </div>
  );
};


interface MobileSubmenuItemProps {
  item: Sublink;
  onNavigate: (page: NavLinkType | Sublink) => void;
  closeMenu: () => void;
  isEditorMode?: boolean;
  depth: number;
}

const MobileSubmenuItem: React.FC<MobileSubmenuItemProps> = ({ item, onNavigate, closeMenu, isEditorMode, depth }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleLinkClick = (page: Sublink) => {
    if (isEditorMode) return;
    const hasContent = page.content && page.content.trim() !== '<p><br></p>' && page.content.trim() !== '';
    if (hasContent || !page.sublinks || page.sublinks.length === 0) {
      onNavigate(page);
      closeMenu();
    } else {
        setIsOpen(!isOpen);
    }
  };

  if (!item.sublinks || item.sublinks.length === 0) {
    return (
      <a
        href={item.href}
        onClick={(e) => { e.preventDefault(); handleLinkClick(item); }}
        className="block py-2 text-sm w-full text-right text-gray-200 hover:text-[var(--color-primary)] transition-colors"
        style={{ paddingRight: `${2 + depth * 1}rem` }}
      >
        {item.name}
      </a>
    );
  }

  return (
    <div className="w-full">
      <div
        className="w-full flex justify-between items-center text-sm py-2"
        style={{ paddingRight: `${2 + (depth - 1) * 1}rem`, paddingLeft: '1rem' }}
      >
        <a
          href={item.href}
          onClick={(e) => { e.preventDefault(); handleLinkClick(item); }}
          className="hover:text-[var(--color-primary)] transition-colors duration-300 flex-grow"
        >
          <span>{item.name}</span>
        </a>
        <button
          onClick={() => !isEditorMode && setIsOpen(!isOpen)}
          className="p-2 -mr-2"
          aria-label="Toggle submenu"
          disabled={isEditorMode}
        >
          <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen && !isEditorMode ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-black/10 ${isOpen && !isEditorMode ? 'max-h-96' : 'max-h-0'}`}>
        <div className="py-1 flex flex-col">
          {item.sublinks.map((subItem) => (
            <MobileSubmenuItem key={subItem.name} item={subItem} onNavigate={onNavigate} closeMenu={closeMenu} isEditorMode={isEditorMode} depth={depth + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface MobileNavLinkProps {
  link: NavLinkType;
  onNavigate: (page: NavLinkType | Sublink) => void;
  closeMenu: () => void;
  isEditorMode?: boolean;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ link, onNavigate, closeMenu, isEditorMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasContent = link.content && link.content.trim() !== '<p><br></p>' && link.content.trim() !== '';

  const handleLinkClick = (page: NavLinkType | Sublink) => {
    if (isEditorMode) return;
    onNavigate(page);
    closeMenu();
  };

  if (!link.sublinks || link.sublinks.length === 0) {
    return (
      <a href={link.href} onClick={(e) => { e.preventDefault(); handleLinkClick(link); }} className="text-base font-medium hover:text-[var(--color-primary)] transition-colors duration-300 w-full text-right py-3 px-4 border-b border-white/10">
        {link.name}
      </a>
    );
  }

  return (
    <div className="w-full border-b border-white/10">
      <div className="w-full flex justify-between items-center px-4 text-base font-medium text-right py-3">
        <a 
            href={link.href} 
            onClick={(e) => { e.preventDefault(); if (hasContent && !isEditorMode) { handleLinkClick(link); } else if (!isEditorMode) { setIsOpen(!isOpen); } }} 
            className="hover:text-[var(--color-primary)] transition-colors duration-300 flex-grow"
        >
            <span>{link.name}</span>
        </a>
        <button
            onClick={() => !isEditorMode && setIsOpen(!isOpen)}
            className="p-2 -mr-2"
            aria-label="Toggle submenu"
            disabled={isEditorMode}
        >
            <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${isOpen && !isEditorMode ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-black/10 ${isOpen && !isEditorMode ? 'max-h-96' : 'max-h-0'}`}>
        <div className="py-2 flex flex-col">
          {link.sublinks.map((sublink: Sublink) => (
            <MobileSubmenuItem key={sublink.name} item={sublink} onNavigate={onNavigate} closeMenu={closeMenu} isEditorMode={isEditorMode} depth={1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Header: React.FC<HeaderProps> = ({ setView, navLinks, onNavigate, onGoHome, isEditorMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`bg-[var(--color-card-background)] text-[var(--color-text-primary)] shadow-sm w-full ${isEditorMode ? 'relative' : 'fixed top-0 z-50'}`}>
      <div className={`${isEditorMode ? 'w-full' : 'container'} mx-auto px-4 sm:px-6 py-3 flex justify-between items-center`}>
        <div onClick={!isEditorMode ? onGoHome : undefined} className={`flex items-center gap-4 ${!isEditorMode ? 'cursor-pointer' : 'cursor-default'}`}>
          <JavanWebiLogo className="h-12 w-auto text-[var(--color-primary)]" />
          <div className="hidden sm:flex flex-col items-start -space-y-1">
            <span className="text-xl font-bold">جوان وب ای</span>
            <span className="text-[10px] opacity-80 whitespace-nowrap">طراحی و توسعه نرم افزار</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-x-8">
          {(navLinks || []).map((link) => (
            <NavLink key={link.name} link={link} onNavigate={onNavigate} isEditorMode={isEditorMode} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <button
            onClick={() => !isEditorMode && setView('login')}
            disabled={isEditorMode}
            className="hidden lg:inline-block bg-[var(--color-primary)] text-[var(--color-text-on-primary)] font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 hover:bg-[var(--color-primary-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            داشبورد مدیریت
          </button>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden bg-[var(--color-secondary)] text-[var(--color-text-on-primary)] absolute top-full right-0 left-0 transition-all duration-300 ease-in-out overflow-y-auto ${isMenuOpen ? 'opacity-100 visible translate-y-0 max-h-[calc(100vh-5rem)]' : 'opacity-0 invisible -translate-y-4 max-h-0'}`}>
        <nav className="flex flex-col items-start pt-2 pb-4">
           <a onClick={(e) => { e.preventDefault(); if (!isEditorMode) { setView('login'); setIsMenuOpen(false); } }} href="#" className="text-base font-medium hover:text-[var(--color-primary)] transition-colors duration-300 w-full text-right py-3 px-4 border-b border-white/10">
              داشبورد مدیریت
           </a>
          {(navLinks || []).map((link) => (
             <MobileNavLink key={link.name} link={link} onNavigate={onNavigate} closeMenu={() => setIsMenuOpen(false)} isEditorMode={isEditorMode} />
          ))}
        </nav>
      </div>
    </header>
  );
};