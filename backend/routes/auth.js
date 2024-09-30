const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Signup Route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  console.log('Signup attempt:', { email, password });

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user with the plain text password
    const newUser = new User({
      email,
      password, // Store the password directly
    });

    // Save the user to the database
    await newUser.save();
    console.log('New user created:', newUser);

    // Generate JWT
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log('Token generated for user:', newUser.email);
    res.status(201).json({ token });
  } catch (err) {
    console.error('Error in /signup:', err.message);
    res.status(500).send('Server error');
  }
});

// Signin Route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  console.log('Signin attempt:', { email, password });

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log('Invalid credentials: User not found for email:', email);
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Directly compare the stored password with the entered password
    if (password !== user.password) {
      console.log('Invalid credentials: Password does not match for email:', email);
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log('Token generated for user:', user.email);
    res.json({ token });
  } catch (err) {
    console.error('Error in /signin:', err.message);
    res.status(500).send('Server error');
  }
});

// Check Auth Route
router.get('/check-auth', (req, res) => {
  const token = req.headers['authorization'];

  console.log('Check auth token:', token);

  if (!token) {
    console.log('No token provided');
    return res.json({ isAuthenticated: false });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log('Token verification failed:', err.message);
      return res.json({ isAuthenticated: false });
    }
    console.log('Token verified successfully:', decoded);
    res.json({ isAuthenticated: true });
  });
});

module.exports = router;
