const Student = require('../models/Student');

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Create new student
exports.createStudent = async (req, res) => {
    const { name, email, course } = req.body;
    try {
        const student = new Student({ name, email, course });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
