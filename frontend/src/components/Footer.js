import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-paratha-brown text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-paratha-gold">Paratha House</h3>
            <p className="text-paratha-beige">Serving authentic Indian parathas and delicacies since 2023.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-paratha-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-paratha-beige hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-paratha-beige hover:text-white transition">Menu</a></li>
              <li><a href="#" className="text-paratha-beige hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-paratha-beige hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-paratha-gold">Contact Us</h3>
            <address className="text-paratha-beige not-italic">
              <p>123 Food Street, Delhi, India</p>
              <p className="mt-2">Phone: +91 98765 43210</p>
              <p>Email: info@parathahouse.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-paratha-gold mt-8 pt-6 text-center text-paratha-beige">
          <p>&copy; {new Date().getFullYear()} Paratha House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;