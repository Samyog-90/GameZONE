
import React, { useState } from 'react';
import { FacebookIcon, TwitterIcon, PinterestIcon, BehanceIcon, ChevronDownIcon, MenuIcon, CloseIcon, CartIcon } from './icons';
import { Page } from '../App';

interface NavLink {
  id: Page;
  name: string;
  hasDropdown: boolean;
}

const navLinks: NavLink[] = [
  { id: 'Home', name: 'Home', hasDropdown: true },
  { id: 'Games', name: 'Games', hasDropdown: true },
  { id: 'Reviews', name: 'Reviews', hasDropdown: true },
  { id: 'News', name: 'News', hasDropdown: true },
  { id: 'Contact', name: 'Contact', hasDropdown: false },
];

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">{children}</a>
);

const DesktopNavLink: React.FC<{ link: NavLink, isActive: boolean, onNavigate: (page: Page) => void }> = ({ link, isActive, onNavigate }) => (
  <li className="relative group">
    <button onClick={() => onNavigate(link.id)} className={`flex items-center gap-1 uppercase font-semibold tracking-wider text-sm transition-colors duration-300 ${isActive ? 'text-brand-pink' : 'text-white hover:text-brand-pink'}`}>
      {link.name}
      {link.hasDropdown && <ChevronDownIcon />}
    </button>
    {link.hasDropdown && (
      <ul className="absolute left-0 mt-2 w-48 bg-dark-secondary shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <li><a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-tertiary hover:text-white">Submenu Item 1</a></li>
        <li><a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-tertiary hover:text-white">Submenu Item 2</a></li>
      </ul>
    )}
  </li>
);

const MobileNavLink: React.FC<{ link: NavLink, isActive: boolean, onNavigate: (page: Page) => void }> = ({ link, isActive, onNavigate }) => {
    const handleClick = () => {
        onNavigate(link.id);
    };

    return (
        <li>
            <button onClick={handleClick} className={`w-full flex items-center justify-between gap-1 uppercase font-semibold tracking-wider py-3 text-lg text-left ${isActive ? 'text-brand-pink' : 'text-white'}`}>
                {link.name}
                {link.hasDropdown && <ChevronDownIcon />}
            </button>
        </li>
    );
};


interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLoginRegisterClick: () => void;
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onLoginRegisterClick, cartItemCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileLoginClick = () => {
    onLoginRegisterClick();
    setIsMenuOpen(false);
  }
  
  const handleMobileNavigation = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  }

  const handleMobileCartClick = () => {
    onCartClick();
    setIsMenuOpen(false);
  }

  return (
    <header>
      <div className="bg-dark-primary border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="text-gray-400 text-sm">
              Follow us:
            </div>
            <div className="flex items-center space-x-5">
              <SocialLink href="#"><PinterestIcon /></SocialLink>
              <SocialLink href="#"><FacebookIcon /></SocialLink>
              <SocialLink href="#"><TwitterIcon /></SocialLink>
              <SocialLink href="#"><BehanceIcon /></SocialLink>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-secondary relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button onClick={() => onNavigate('Home')} className="flex items-center focus:outline-none">
              <h1 className="text-3xl font-black tracking-widest uppercase">
                <span className="bg-gradient-to-r from-brand-purple to-brand-pink text-transparent bg-clip-text">End</span>game
              </h1>
              <div className="ml-2 mt-1 relative">
                <p className="text-xs uppercase text-gray-400 tracking-[0.2em]">Gaming Theme</p>
                <div className="absolute top-full left-0 w-1/2 h-[2px] bg-gradient-to-r from-brand-purple to-brand-pink mt-1"></div>
              </div>
            </button>
            
            <div className="hidden lg:flex items-center gap-10">
                <nav>
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => <DesktopNavLink key={link.id} link={link} isActive={currentPage === link.id} onNavigate={onNavigate} />)}
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                  <button onClick={onCartClick} className="relative text-white hover:text-brand-pink transition-colors">
                      <CartIcon />
                      {cartItemCount > 0 && (
                          <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-pink text-white text-xs font-bold rounded-full flex items-center justify-center">
                              {cartItemCount}
                          </span>
                      )}
                  </button>
                  <button onClick={onLoginRegisterClick} className="bg-black text-white px-6 py-3 uppercase text-sm font-bold tracking-wider hover:bg-brand-pink transition-colors duration-300">Login / Register</button>
                </div>
            </div>

            <div className="lg:hidden flex items-center gap-4">
               <button onClick={onCartClick} className="relative text-white hover:text-brand-pink transition-colors">
                  <CartIcon />
                  {cartItemCount > 0 && (
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-pink text-white text-xs font-bold rounded-full flex items-center justify-center">
                          {cartItemCount}
                      </span>
                  )}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white" aria-label="Open menu">
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
             <button onClick={() => handleMobileNavigation('Home')} className="flex items-center focus:outline-none">
              <h1 className="text-3xl font-black tracking-widest uppercase">
                <span className="bg-gradient-to-r from-brand-purple to-brand-pink text-transparent bg-clip-text">End</span>game
              </h1>
            </button>
            <button onClick={() => setIsMenuOpen(false)} className="text-white text-2xl" aria-label="Close menu">
                <CloseIcon />
            </button>
          </div>
          <nav className="mt-10 px-4 sm:px-6 lg:px-8">
              <ul className="flex flex-col gap-4 divide-y divide-gray-800">
                  {navLinks.map((link) => <MobileNavLink key={link.id} link={link} isActive={currentPage === link.id} onNavigate={handleMobileNavigation} />)}
                  <li>
                    <button onClick={handleMobileLoginClick} className="w-full text-center mt-6 bg-brand-pink text-white px-6 py-4 uppercase text-lg font-bold tracking-wider hover:bg-opacity-80 transition-colors duration-300">Login / Register</button>
                  </li>
              </ul>
          </nav>
      </div>

      <div className="bg-dark-tertiary hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end items-center h-12">
                 <button className="bg-black text-white px-4 py-2 uppercase text-xs font-bold tracking-wider flex items-center gap-2">
                    Menu
                    <MenuIcon />
                 </button>
            </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
