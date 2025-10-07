import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../services/api';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderId = location.state?.orderId;
        if (!orderId) {
          navigate('/');
          return;
        }
        
        const response = await api.get(`/orders/${orderId}`);
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching order:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrder();
  }, [location, navigate]);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-paratha-gold"></div>
      </div>
    );
  }
  
  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-paratha-brown mb-4">Order Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn't find your order details.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-paratha-gold text-paratha-brown px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-paratha-brown mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">Thank you for your order. We're preparing your delicious food.</p>
        
        <div className="bg-paratha-beige rounded-lg p-6 mb-8 text-left">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Order ID:</span>
            <span className="font-medium">#{order._id.substring(order._id.length - 8).toUpperCase()}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Payment Status:</span>
            <span className={`font-medium ${order.paymentStatus === 'paid' ? 'text-green-600' : 'text-yellow-600'}`}>
              {order.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
            </span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Total Amount:</span>
            <span className="font-medium">₹{order.totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Estimated Delivery:</span>
            <span className="font-medium">30-45 minutes</span>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold text-paratha-brown mb-4">Order Details</h2>
          <div className="space-y-3">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between border-b border-gray-200 pb-3">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">{item.quantity}x</span>
                  <span>{item.product.name}</span>
                </div>
                <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold text-paratha-brown mb-4">Delivery Information</h2>
          <div className="text-left bg-gray-50 p-4 rounded-lg">
            <p className="mb-2"><span className="font-medium">Name:</span> {order.customerInfo.name}</p>
            <p className="mb-2"><span className="font-medium">Phone:</span> {order.customerInfo.phone}</p>
            <p><span className="font-medium">Address:</span> {order.customerInfo.address}</p>
          </div>
        </div>
        
        <button 
          onClick={() => navigate('/')}
          className="bg-paratha-brown text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-900 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;