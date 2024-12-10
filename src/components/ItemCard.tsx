import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  onAddToCart: (item: Item) => void;
}

export function ItemCard({ item, onAddToCart }: ItemCardProps) {
  const rarityColors = {
    common: 'bg-gray-100',
    uncommon: 'bg-green-100',
    rare: 'bg-blue-100',
    legendary: 'bg-purple-100'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <span className={`${rarityColors[item.rarity]} px-2 py-1 rounded-full text-xs`}>
            {item.rarity}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${item.price}</span>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}