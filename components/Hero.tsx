
import React, { useState, useEffect } from 'react';
import { PlayIcon } from './icons';

const slides = [
    {
        title: "Game on!",
        text: "Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis."
    },
    {
        title: "New World!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    }
]

const Hero: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            className="relative h-[calc(100vh-196px)] min-h-[500px] bg-cover bg-center text-white flex items-center justify-center text-center"
            style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')`}}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#3a0d5e]/70 to-[#1a002e]/90"></div>
            
            <div className="relative z-10 p-4">
                <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter animate-fade-in-down">
                    {slides[activeSlide].title}
                </h2>
                <p className="max-w-2xl mx-auto mt-4 text-gray-300 text-lg animate-fade-in-up">
                    {slides[activeSlide].text}
                </p>
                <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <button className="relative inline-block bg-white text-black font-bold uppercase tracking-wider py-4 pl-8 pr-12 group transition-all duration-300 hover:shadow-lg hover:shadow-brand-pink/50">
                        Read More
                        <span className="absolute right-0 top-0 bottom-0 w-10 bg-brand-pink flex items-center justify-center text-white group-hover:bg-brand-purple transition-colors duration-300">
                           &raquo;
                        </span>
                    </button>
                </div>
            </div>

            <div className="absolute bottom-10 left-10 flex items-center gap-4 text-white z-10">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => setActiveSlide(index)} className={`font-bold text-lg ${activeSlide === index ? 'text-white' : 'text-gray-500'}`}>
                        <div className={`flex items-center justify-center transition-all duration-300 ${activeSlide === index ? 'w-10 h-10 border-2 border-brand-pink rounded-full' : 'w-6 h-6'}`}>
                            0{index + 1}
                        </div>
                    </button>
                ))}
            </div>

             <div className="absolute bottom-10 right-10 z-10">
                <button className="relative w-20 h-20 flex items-center justify-center group">
                    <div className="absolute inset-0 border-2 border-transparent border-l-brand-pink border-t-brand-pink rounded-full animate-spin-slow"></div>
                     <div className="bg-brand-pink p-3 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-pink/50">
                         <PlayIcon />
                    </div>
                </button>
             </div>
        </section>
    );
};

export default Hero;
