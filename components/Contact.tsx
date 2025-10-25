
import React from 'react';
import PageHeader from './PageHeader';
import { MapPinIcon, PhoneIcon, MailIcon } from './icons';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start gap-4">
        <div className="text-brand-pink text-2xl mt-1">{icon}</div>
        <div>
            <h4 className="font-bold text-lg">{title}</h4>
            <div className="text-gray-400">{children}</div>
        </div>
    </div>
);

const Contact: React.FC = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Contact form submitted! (This is a demo)');
    };

    return (
        <>
            <PageHeader title="Contact" onNavigate={() => {}} />
            <div className="py-20 bg-dark-secondary">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                             <div className="text-left mb-12">
                                <h2 className="text-3xl font-black uppercase tracking-wider">Contact Info</h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-brand-purple to-brand-pink mt-2"></div>
                            </div>
                            <div className="space-y-6">
                                <ContactInfoItem title="Address" icon={<MapPinIcon />}>
                                    <p>123 Gaming Street, Suite 456</p>
                                    <p>Metropolis, GA 12345</p>
                                </ContactInfoItem>
                                <ContactInfoItem title="Phone" icon={<PhoneIcon />}>
                                    <p>+1 (555) 123-4567</p>
                                </ContactInfoItem>
                                <ContactInfoItem title="Email" icon={<MailIcon />}>
                                    <p>contact@endgame.com</p>
                                </ContactInfoItem>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                             <div className="text-left mb-12">
                                <h2 className="text-3xl font-black uppercase tracking-wider">Get in touch</h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-brand-purple to-brand-pink mt-2"></div>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Your Name" required className="w-full bg-dark-tertiary border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-pink" />
                                    <input type="email" placeholder="Your Email" required className="w-full bg-dark-tertiary border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-pink" />
                                </div>
                                <textarea placeholder="Your Message" rows={6} required className="w-full bg-dark-tertiary border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-pink"></textarea>
                                <button type="submit" className="bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold py-3 px-8 rounded-md uppercase tracking-wider hover:opacity-90 transition-opacity">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
             <div className="w-full h-96 bg-dark-tertiary">
                <img src="https://picsum.photos/seed/map/1920/400?grayscale" alt="Map Placeholder" className="w-full h-full object-cover opacity-30" />
            </div>
        </>
    );
};

export default Contact;
