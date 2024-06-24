const express = require('express');
const router = express.Router();
const adminAuthController = require('../controllers/adminAuthController');
const adminController = require('../controllers/adminController');
const { protectAdmin } = require('../middleware/adminAuthMiddleware');
const multer = require('multer');
const path = require('path');



// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Admin Signup route with file upload
router.post('/signup', upload.single('profilePhoto'), adminAuthController.adminSignup);

router.post('/signin', adminAuthController.adminSignin);

// Admin-only routes
router.get('/users', protectAdmin, adminController.getUsers);
router.get('/services', protectAdmin, adminController.getServices);
router.get('/profile', protectAdmin, adminController.getAdminProfile);
router.delete('/users/:userId', protectAdmin, adminController.deleteUser);
router.delete('/services/:serviceId', protectAdmin, adminController.deleteService);

module.exports = router;
