const express = require('express');
const router = express.Router();
const {
  addItemToCart,
  getUserCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

// Protected routes
router.post('/add', protect, addItemToCart);
router.get('/', protect, getUserCart);
router.post('/remove', protect, removeItemFromCart);
router.post('/update', protect, updateItemQuantity);
router.delete('/clear', protect, clearCart);

module.exports = router;
