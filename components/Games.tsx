
import React from 'react';
import PageHeader from './PageHeader';
import { CommentIcon, EyeIcon } from './icons';

export interface Game {
    id: number;
    title: string;
    imageUrl: string;
    comments: number;
    views: string;
    price: number;
}

const latestGames: Game[] = [
    { id: 1, title: 'Cyberpunk Shield', imageUrl: 'https://picsum.photos/seed/game1/400/500', comments: 15, views: '2.5k', price: 59.99 },
    { id: 2, title: 'Galactic Odyssey', imageUrl: 'https://picsum.photos/seed/game2/400/500', comments: 23, views: '4.1k', price: 49.99 },
    { id: 3, title: 'Wasteland Runners', imageUrl: 'https://picsum.photos/seed/game3/400/500', comments: 8, views: '1.8k', price: 29.99 },
    { id: 4, title: 'Neon Racer X', imageUrl: 'https://picsum.photos/seed/game4/400/500', comments: 31, views: '6.2k', price: 19.99 },
    { id: 5, title: 'Voidfall Chronicles', imageUrl: 'https://picsum.photos/seed/game5/400/500', comments: 19, views: '3.3k', price: 39.99 },
    { id: 6, title: 'Mech Warriors 4', imageUrl: 'https://picsum.photos/seed/game6/400/500', comments: 45, views: '9.7k', price: 59.99 },
];

const prereleasedGames: Game[] = [
    { id: 7, title: 'Project Chimera', imageUrl: 'https://picsum.photos/seed/game7/400/500', comments: 12, views: '1.2k', price: 69.99 },
    { id: 8, title: 'Starfield Legacy', imageUrl: 'https://picsum.photos/seed/game8/400/500', comments: 5, views: '980', price: 69.99 },
    { id: 9, title: 'Aetheria Online', imageUrl: 'https://picsum.photos/seed/game9/400/500', comments: 28, views: '5.5k', price: 49.99 },
];

interface GameCardProps {
    game: Game;
    onAddToCart: (game: Game) => void;
    isInCart: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, onAddToCart, isInCart }) => (
    <div className="relative group overflow-hidden rounded-md bg-dark-tertiary flex flex-col">
        <div className="relative overflow-hidden">
            <img src={game.imageUrl} alt={game.title} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold uppercase text-white">{game.title}</h3>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                <div className="flex items-center gap-1.5">
                    <CommentIcon className="w-4 h-4" />
                    <span>{game.comments} Comments</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <EyeIcon className="w-4 h-4" />
                    <span>{game.views} Views</span>
                </div>
            </div>
            <div className="mt-auto pt-4 flex justify-between items-center">
                 <span className="text-3xl font-bold text-brand-pink">${game.price.toFixed(2)}</span>
                 <button 
                    onClick={() => onAddToCart(game)}
                    disabled={isInCart}
                    className={`px-6 py-2 uppercase text-sm font-bold tracking-wider rounded-md transition-all duration-300 ${isInCart ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-brand-purple text-white hover:bg-brand-pink'}`}
                >
                    {isInCart ? 'In Cart' : 'Add to Cart'}
                </button>
            </div>
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

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
     <div className="text-center mb-12">
        <h2 className="text-4xl font-black uppercase tracking-wider">{children}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-brand-purple to-brand-pink mx-auto mt-2"></div>
    </div>
);

interface GamesProps {
    cartItems: Game[];
    onAddToCart: (game: Game) => void;
}

const Games: React.FC<GamesProps> = ({ cartItems, onAddToCart }) => {
  const gameIsInCart = (gameId: number) => cartItems.some(item => item.id === gameId);
  
  return (
    <>
      <PageHeader title="Games" onNavigate={() => {}} />
      <div className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4">
            <section>
                <SectionTitle>Latest Games</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestGames.map(game => <GameCard key={game.id} game={game} onAddToCart={onAddToCart} isInCart={gameIsInCart(game.id)} />)}
                </div>
            </section>
            
            <section className="mt-24">
                <SectionTitle>Pre-released Games</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {prereleasedGames.map(game => <GameCard key={game.id} game={game} onAddToCart={onAddToCart} isInCart={gameIsInCart(game.id)} />)}
                </div>
            </section>

            <Pagination />
        </div>
      </div>
    </>
  );
};

export default Games;
