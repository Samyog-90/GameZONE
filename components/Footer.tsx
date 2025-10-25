
import React from 'react';
import { Page } from '../App';
import { FacebookIcon, TwitterIcon, PinterestIcon, BehanceIcon, MapPinIcon, PhoneIcon, MailIcon } from './icons';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-dark-tertiary text-gray-400">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Widget */}
                    <div>
                        <button onClick={() => onNavigate('Home')} className="flex items-center focus:outline-none mb-4">
                            <h1 className="text-3xl font-black tracking-widest uppercase text-white">
                                <span className="bg-gradient-to-r from-brand-purple to-brand-pink text-transparent bg-clip-text">End</span>game
                            </h1>
                        </button>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Latest News Widget */}
                    <div>
                        <h4 className="text-lg font-bold uppercase text-white mb-6">Latest News</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <button onClick={() => onNavigate('News')} className="hover:text-brand-pink transition-colors">A new online game is out now!</button>
                                <p className="text-xs text-gray-500 mt-1">June 21, 2024</p>
                            </li>
                            <li>
                                <button onClick={() => onNavigate('News')} className="hover:text-brand-pink transition-colors">E3 is finally back!</button>
                                <p className="text-xs text-gray-500 mt-1">June 17, 2024</p>
                            </li>
                        </ul>
                    </div>

                    {/* Top Comments Widget */}
                    <div>
                        <h4 className="text-lg font-bold uppercase text-white mb-6">Top Comments</h4>
                         <ul className="space-y-4 text-sm">
                            <li>
                                <p><span className="text-white font-semibold">James Smith</span> on <button onClick={() => onNavigate('News')} className="text-brand-pink hover:underline">The best online game is out now!</button></p>
                                <p className="text-xs text-gray-500 mt-1">June 21, 2024</p>
                            </li>
                             <li>
                                <p><span className="text-white font-semibold">Jane Doe</span> on <button onClick={() => onNavigate('Reviews')} className="text-brand-pink hover:underline">Cybernetic Horizon Review</button></p>
                                <p className="text-xs text-gray-500 mt-1">June 18, 2024</p>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Contact Widget */}
                     <div>
                        <h4 className="text-lg font-bold uppercase text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                           <li className="flex items-start gap-3">
                                <MapPinIcon className="w-4 h-4 text-brand-pink mt-1 flex-shrink-0" />
                                <span>123 Gaming Street, Suite 456, Metropolis, GA 12345</span>
                           </li>
                            <li className="flex items-start gap-3">
                                <PhoneIcon className="w-4 h-4 text-brand-pink mt-1 flex-shrink-0" />
                                <span>+1 (555) 123-4567</span>
                           </li>
                            <li className="flex items-start gap-3">
                                <MailIcon className="w-4 h-4 text-brand-pink mt-1 flex-shrink-0" />
                                <span>contact@endgame.com</span>
                           </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="bg-dark-primary py-4 border-t border-gray-800">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Endgame. All rights reserved.</p>
                     <div className="flex items-center space-x-5 mt-4 md:mt-0">
                          <a href="#" className="hover:text-white transition-colors"><PinterestIcon /></a>
                          <a href="#" className="hover:text-white transition-colors"><FacebookIcon /></a>
                          <a href="#" className="hover:text-white transition-colors"><TwitterIcon /></a>
                          <a href="#" className="hover:text-white transition-colors"><BehanceIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
