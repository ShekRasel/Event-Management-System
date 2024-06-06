const express = require('express');
const router = express.Router();
const adminAuthController = require('../controllers/adminAuthController');
const adminController = require('../controllers/adminController');
const { protectAdmin } = require('../middleware/adminAuthMiddleware');

router.post('/signup', adminAuthController.adminSignup);
router.post('/signin', adminAuthController.adminSignin);

// Admin-only routes
router.get('/users', protectAdmin, adminController.getUsers);
router.get('/services', protectAdmin, adminController.getServices);
router.delete('/users/:userId', protectAdmin, adminController.deleteUser); // Add this line
router.delete('/services/:serviceId', protectAdmin, adminController.deleteService);

module.exports = router;
