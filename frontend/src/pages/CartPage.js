import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-paratha-brown mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link 
          to="/products" 
          className="bg-paratha-gold text-paratha-brown px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition inline-block"
        >
          Browse Our Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-paratha-brown mb-8">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-paratha-brown">Cart Items</h2>
              <button 
                onClick={clearCart}
                className="text-paratha-red hover:text-red-700 transition"
              >
                Clear Cart
              </button>
            </div>
            
            <div className="space-y-4">
              {cartItems.map(item => (
                <CartItem key={item.product._id} item={item} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-paratha-brown mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">₹30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">₹{(totalPrice * 0.05).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{(totalPrice + 30 + (totalPrice * 0.05)).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <Link 
              to="/checkout" 
              className="w-full bg-paratha-brown text-white py-3 rounded-lg font-bold text-center block hover:bg-yellow-900 transition"
            >
              Proceed to Checkout
            </Link>
            
            <Link 
              to="/products" 
              className="w-full mt-4 bg-white text-paratha-brown border border-paratha-brown py-3 rounded-lg font-bold text-center block hover:bg-paratha-beige transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;