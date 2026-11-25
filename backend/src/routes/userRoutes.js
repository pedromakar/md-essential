const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

// User private endpoints (MUST be defined before /:id to avoid collision)
router.get('/profile', auth, userController.getProfile);
router.put('/profile', auth, userController.updateProfile);

router.get('/cart', auth, userController.getCart);
router.post('/cart', auth, userController.updateCart);
router.put('/cart', auth, userController.updateCart);

// Admin-only user management endpoints
router.get('/', auth, admin, userController.getUsers);
router.put('/:id/role', auth, admin, userController.updateUserRole);
router.put('/:id', auth, admin, userController.updateUser);
router.delete('/:id', auth, admin, userController.deleteUser);

module.exports = router;
