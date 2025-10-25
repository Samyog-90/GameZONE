
import React from 'react';
import { Page } from '../App';
import PageHeader from './PageHeader';
import { CommentIcon, EyeIcon } from './icons';

interface Review {
    id: number;
    title: string;
    imageUrl: string;
    date: string;
    comments: number;
    views: string;
    description: string;
    score: number;
}

const reviewsData: Review[] = [
    {
        id: 1,
        title: 'Ashes of the Singularity: Escalation',
        imageUrl: 'https://picsum.photos/seed/review1/500/350',
        date: 'June 20, 2024',
        comments: 21,
        views: '3.8k',
        description: 'A new era of strategic warfare has begun. In Ashes of the Singularity: Escalation, you are in command of the entire war, with massive armies and powerful abilities.',
        score: 9.3
    },
    {
        id: 2,
        title: 'Cybernetic Horizon',
        imageUrl: 'https://picsum.photos/seed/review2/500/350',
        date: 'June 18, 2024',
        comments: 35,
        views: '5.2k',
        description: 'Explore a neon-drenched metropolis in this open-world RPG. The choices you make will shape the future of the city and its inhabitants.',
        score: 8.8
    },
    {
        id: 3,
        title: 'Valorant Champions',
        imageUrl: 'https://picsum.photos/seed/review3/500/350',
        date: 'June 15, 2024',
        comments: 42,
        views: '7.1k',
        description: 'The tactical shooter that has taken the world by storm. With a diverse cast of agents and razor-sharp gunplay, every match is a new challenge.',
        score: 9.1
    }
];

const RatingCircle: React.FC<{ score: number }> = ({ score }) => {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (score / 10) * circumference;

    return (
        <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="absolute w-full h-full transform -rotate-90">
                <circle cx="50%" cy="50%" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="transparent" />
                <circle
                    cx="50%"
                    cy="50%"
                    r="45"
                    stroke="url(#grad)"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                />
                 <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#e100ff', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#a600ff', stopOpacity: 1}} />
                    </linearGradient>
                </defs>
            </svg>
            <span className="text-2xl font-bold text-white">{score.toFixed(1)}</span>
        </div>
    );
};


const ReviewItem: React.FC<{ review: Review }> = ({ review }) => (
    <div className="bg-dark-tertiary rounded-lg overflow-hidden flex flex-col md:flex-row items-center gap-8 p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-purple/20">
        <div className="flex-shrink-0 relative">
            <img src={review.imageUrl} alt={review.title} className="w-full md:w-80 h-auto object-cover rounded-md" />
        </div>
        <div className="flex-grow">
            <h3 className="text-2xl font-bold uppercase hover:text-brand-pink transition-colors cursor-pointer">{review.title}</h3>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                <span>{review.date}</span>
                <div className="flex items-center gap-1.5">
                    <CommentIcon className="w-4 h-4" />
                    <span>{review.comments} Comments</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <EyeIcon className="w-4 h-4" />
                    <span>{review.views} Views</span>
                </div>
            </div>
            <p className="mt-4 text-gray-300">{review.description}</p>
            <button className="mt-6 text-brand-pink font-semibold uppercase text-sm tracking-wider">
                Read More &raquo;
            </button>
        </div>
        <div className="flex-shrink-0">
             <RatingCircle score={review.score} />
        </div>
    </div>
);


const Pagination: React.FC = () => (
    <div className="flex justify-center items-center gap-2 mt-12">
        <button className="w-10 h-10 flex items-center justify-center bg-dark-tertiary text-white rounded-md hover:bg-brand-pink transition-colors">&laquo;</button>
        <button className="w-10 h-10 flex items-center justify-center bg-brand-pink text-white rounded-md">1</button>
        <button className="w-10 h-10 flex items-center justify-center bg-dark-tertiary text-white rounded-md hover:bg-brand-pink transition-colors">2</button>
        <button className="w-10 h-10 flex items-center justify-center bg-dark-tertiary text-white rounded-md hover:bg-brand-pink transition-colors">3</button>
        <button className="w-10 h-10 flex items-center justify-center bg-dark-tertiary text-white rounded-md hover:bg-brand-pink transition-colors">&raquo;</button>
    </div>
);

const Reviews: React.FC = () => {
    return (
        <>
            <PageHeader title="Reviews" onNavigate={() => {}} />
            <div className="py-20 bg-dark-secondary">
                <div className="container mx-auto px-4">
                    <div className="space-y-8">
                        {reviewsData.map(review => <ReviewItem key={review.id} review={review} />)}
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default Reviews;
