const Order = require('../models/Order');
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create new order
exports.createOrder = async (req, res) => {
  try {
    const { items, customerInfo, totalAmount } = req.body;
    
    // Create order in database
    const newOrder = new Order({
      items,
      customerInfo,
      totalAmount
    });
    
    const savedOrder = await newOrder.save();
    
    // Create Razorpay order
    const options = {
      amount: totalAmount * 100, // in paise
      currency: 'INR',
      receipt: savedOrder._id.toString(),
    };
    
    razorpay.orders.create(options, (err, razorpayOrder) => {
      if (err) {
        return res.status(500).json({ message: 'Payment initiation failed', error: err.message });
      }
      
      res.status(201).json({
        orderId: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        dbOrderId: savedOrder._id
      });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Verify payment
exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, dbOrderId } = req.body;
    
    // Find order in database
    const order = await Order.findById(dbOrderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    // Verify signature (simplified for demo)
    const crypto = require('crypto');
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');
    
    if (generatedSignature === razorpay_signature) {
      // Update order status
      order.paymentId = razorpay_payment_id;
      order.orderId = razorpay_order_id;
      order.paymentStatus = 'paid';
      await order.save();
      
      res.status(200).json({ success: true, message: 'Payment verified successfully' });
    } else {
      order.paymentStatus = 'failed';
      await order.save();
      res.status(400).json({ success: false, message: 'Payment verification failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.product');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};