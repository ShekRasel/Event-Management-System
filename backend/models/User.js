// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePhoto: { type: String },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }] // Add services field
});

const User = mongoose.model('User', userSchema);

module.exports = User;
