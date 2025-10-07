import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product._id === product._id);
      
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        calculateTotal(updatedItems);
        return updatedItems;
      } else {
        const newItems = [...prevItems, { product, quantity }];
        calculateTotal(newItems);
        return newItems;
      }
    });
  };

  const removeFromCart = (productId) => {
    const updatedItems = cartItems.filter(item => item.product._id !== productId);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    const updatedItems = cartItems.map(item =>
      item.product._id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    setTotalPrice(total);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      totalPrice,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};