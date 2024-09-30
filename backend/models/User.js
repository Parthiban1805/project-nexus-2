const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// No pre-save hook for password hashing
UserSchema.pre('save', function(next) {
  // No need to modify the password before saving
  next();
});

module.exports = mongoose.model('User', UserSchema);
