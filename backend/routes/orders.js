const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create new order
router.post('/', orderController.createOrder);

// Verify payment
router.post('/verify', orderController.verifyPayment);

// Get order by ID
router.get('/:id', orderController.getOrderById);

module.exports = router;