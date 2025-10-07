import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium text-paratha-brown">{product.name}</h3>
          <span className="text-lg font-bold text-paratha-gold">₹{product.price * quantity}</span>
        </div>
        
        <p className="text-gray-600 mt-1 text-sm">{product.description}</p>
        
        <div className="flex items-center mt-3">
          <div className="flex items-center border border-gray-300 rounded">
            <button 
              onClick={() => updateQuantity(product._id, quantity - 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-3 py-1">{quantity}</span>
            <button 
              onClick={() => updateQuantity(product._id, quantity + 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={() => removeFromCart(product._id)}
            className="ml-4 text-paratha-red hover:text-red-700 transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;