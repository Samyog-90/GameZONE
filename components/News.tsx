
import React from 'react';
import PageHeader from './PageHeader';
import { CommentIcon, EyeIcon } from './icons';

interface NewsArticle {
    id: number;
    title: string;
    imageUrl: string;
    date: string;
    author: string;
    comments: number;
    description: string;
}

const newsData: NewsArticle[] = [
    {
        id: 1,
        title: 'The best online game is out now!',
        imageUrl: 'https://picsum.photos/seed/news1/500/350',
        date: 'June 21, 2024',
        author: 'Admin',
        comments: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
    },
    {
        id: 2,
        title: 'Top 5 best games in the world',
        imageUrl: 'https://picsum.photos/seed/news2/500/350',
        date: 'June 19, 2024',
        author: 'Admin',
        comments: 25,
        description: 'Vestibulum quam justo, pretium eu tempus ut, semper vel magna. Sed scelerisque, odio eu blandit congue, justo odio congue nisi, in interdum ex leo sed ex.'
    },
    {
        id: 3,
        title: 'E3 2024: All the biggest announcements',
        imageUrl: 'https://picsum.photos/seed/news3/500/350',
        date: 'June 17, 2024',
        author: 'Admin',
        comments: 38,
        description: 'Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.'
    },
];

const NewsItem: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <div className="bg-dark-tertiary rounded-lg overflow-hidden flex flex-col md:flex-row items-center gap-8 p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-purple/20">
        <div className="flex-shrink-0">
            <img src={article.imageUrl} alt={article.title} className="w-full md:w-80 h-auto object-cover rounded-md" />
        </div>
        <div className="flex-grow">
            <h3 className="text-2xl font-bold uppercase hover:text-brand-pink transition-colors cursor-pointer">{article.title}</h3>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                <span>{article.date}</span>
                <span>by {article.author}</span>
                <div className="flex items-center gap-1.5">
                    <CommentIcon className="w-4 h-4" />
                    <span>{article.comments} Comments</span>
                </div>
            </div>
            <p className="mt-4 text-gray-300">{article.description}</p>
            <button className="mt-6 text-brand-pink font-semibold uppercase text-sm tracking-wider">
                Read More &raquo;
            </button>
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

const News: React.FC = () => {
    return (
        <>
            <PageHeader title="News" onNavigate={() => {}} />
            <div className="py-20 bg-dark-secondary">
                <div className="container mx-auto px-4">
                    <div className="space-y-8">
                        {newsData.map(article => <NewsItem key={article.id} article={article} />)}
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default News;
