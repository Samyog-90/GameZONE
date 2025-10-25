
import React from 'react';
import { Page } from '../App';

interface PageHeaderProps {
    title: string;
    onNavigate: (page: Page) => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, onNavigate }) => {
    return (
        <section 
            className="relative py-24 bg-cover bg-center text-white text-center"
            style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=1')`}}
        >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">{title}</h2>
                <div className="mt-4 text-gray-400">
                    <button onClick={() => onNavigate('Home')} className="hover:text-white transition-colors">Home</button>
                    <span className="mx-2">&raquo;</span>
                    <span>{title}</span>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
