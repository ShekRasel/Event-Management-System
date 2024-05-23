const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Static folder for profile photos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

// Routes
app.use('/api', authRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/EventManagement')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
