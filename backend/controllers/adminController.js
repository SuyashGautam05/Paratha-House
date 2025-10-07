const Product = require('../models/Product');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Add new product
exports.addProduct = [
  upload.single('image'),
  async (req, res) => {
    try {
      const { name, description, price, category } = req.body;
      
      if (!req.file) {
        return res.status(400).json({ message: 'Image is required' });
      }
      
      const newProduct = new Product({
        name,
        description,
        price,
        image: `/uploads/${req.file.filename}`,
        category
      });
      
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
];

// Update product
exports.updateProduct = [
  upload.single('image'),
  async (req, res) => {
    try {
      const { name, description, price, category, inStock } = req.body;
      const productId = req.params.id;
      
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      
      // Update fields
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.category = category || product.category;
      product.inStock = inStock !== undefined ? inStock : product.inStock;
      
      if (req.file) {
        product.image = `/uploads/${req.file.filename}`;
      }
      
      const updatedProduct = await product.save();
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
];

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    await product.remove();
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all products (for admin)
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};