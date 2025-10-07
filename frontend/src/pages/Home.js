import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-paratha-brown text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Authentic <span className="text-paratha-gold">Indian Parathas</span> Delivered to Your Doorstep
            </h1>
            <p className="text-xl mb-8 text-paratha-beige">
              Taste the tradition with our freshly made parathas and Indian delicacies
            </p>
            <Link 
              to="/products" 
              className="bg-paratha-gold text-paratha-brown px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition inline-block"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-paratha-brown mb-4">Why Choose Paratha House?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring you the authentic taste of India with our carefully crafted recipes and fresh ingredients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-paratha-beige">
              <div className="bg-paratha-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-paratha-brown mb-2">Authentic Recipes</h3>
              <p className="text-gray-600">Traditional recipes passed down through generations</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-paratha-beige">
              <div className="bg-paratha-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-paratha-brown mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Hot and fresh food delivered to your doorstep in 30 minutes</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-paratha-beige">
              <div className="bg-paratha-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-paratha-brown mb-2">Made with Love</h3>
              <p className="text-gray-600">Each dish is prepared with care and the finest ingredients</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-paratha-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-paratha-brown mb-4">Craving Some Delicious Parathas?</h2>
          <p className="text-paratha-brown mb-8 max-w-2xl mx-auto">
            Order now and satisfy your hunger with our mouth-watering parathas and Indian delicacies
          </p>
          <Link 
            to="/products" 
            className="bg-paratha-brown text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-900 transition inline-block"
          >
            View Our Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;