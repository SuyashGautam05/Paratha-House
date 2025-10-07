import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-paratha-brown">{product.name}</h3>
          <span className="bg-paratha-gold text-white px-2 py-1 rounded-full text-sm font-bold">
            ₹{product.price}
          </span>
        </div>
        
        <p className="text-gray-600 mt-2 text-sm h-12 overflow-hidden">
          {product.description}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center border border-gray-300 rounded">
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-3 py-1">{quantity}</span>
            <button 
              onClick={() => setQuantity(q => q + 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="bg-paratha-brown text-white px-4 py-2 rounded-lg hover:bg-paratha-gold transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;