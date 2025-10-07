const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Add new product
router.post('/products', adminController.addProduct);

// Update product
router.put('/products/:id', adminController.updateProduct);

// Delete product
router.delete('/products/:id', adminController.deleteProduct);

// Get all products (for admin)
router.get('/products', adminController.getAllProducts);

module.exports = router;