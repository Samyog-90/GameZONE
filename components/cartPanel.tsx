
import React from 'react';
import type { Game } from './Games';
import { CloseIcon, TrashIcon } from './icons';

interface CartPanelProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: Game[];
    onRemoveFromCart: (gameId: number) => void;
}

const CartPanel: React.FC<CartPanelProps> = ({ isOpen, onClose, cartItems, onRemoveFromCart }) => {
    
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            <div 
                className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
                aria-hidden="true"
            ></div>
            <aside 
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-dark-secondary shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="cart-panel-title"
            >
                <div className="flex flex-col h-full text-white">
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-gray-700">
                        <h2 id="cart-panel-title" className="text-xl font-bold uppercase tracking-wider">Your Cart</h2>
                        <button onClick={onClose} aria-label="Close cart" className="text-gray-400 hover:text-white transition-colors">
                            <CloseIcon />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-grow overflow-y-auto p-6">
                        {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <p>Your cart is empty.</p>
                            </div>
                        ) : (
                            <ul className="space-y-4">
                                {cartItems.map(item => (
                                    <li key={item.id} className="flex items-center gap-4">
                                        <img src={item.imageUrl} alt={item.title} className="w-20 h-24 object-cover rounded-md" />
                                        <div className="flex-grow">
                                            <h3 className="font-semibold">{item.title}</h3>
                                            <p className="text-brand-pink font-bold">${item.price.toFixed(2)}</p>
                                        </div>
                                        <button onClick={() => onRemoveFromCart(item.id)} aria-label={`Remove ${item.title} from cart`} className="text-gray-500 hover:text-red-500 transition-colors p-2">
                                            <TrashIcon />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    
                    {/* Footer */}
                    {cartItems.length > 0 && (
                        <div className="p-6 border-t border-gray-700">
                            <div className="flex justify-between items-center font-bold text-lg mb-4">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button 
                                onClick={() => alert('Checkout is not implemented in this demo.')}
                                className="w-full bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold py-3 px-4 rounded-md uppercase tracking-wider hover:opacity-90 transition-opacity"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
};

export default CartPanel;
