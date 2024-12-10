export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'weapon' | 'armor' | 'consumable' | 'cosmetic';
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
}

export interface CartItem extends Item {
  quantity: number;
}