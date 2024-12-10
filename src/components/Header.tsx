import React from 'react';
import { ShoppingBag, TestTube } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <TestTube className="text-blue-400" />
          <h1 className="text-xl font-bold">LYKA SCP</h1>
        </div>
        <button
          onClick={onCartClick}
          className="relative flex items-center gap-2 hover:text-blue-400 transition-colors"
        >
          <ShoppingBag />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}