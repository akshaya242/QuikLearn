const User = require('../models/User'); // Assuming a User model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Login User
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Register User
exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({ name, email, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        res.status(201).json({ message: "User created" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Logout User
exports.logout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
};
