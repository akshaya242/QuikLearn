const Teacher = require('../models/Teacher');

// Get all teachers
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Create new teacher
exports.createTeacher = async (req, res) => {
    const { name, qualification, email } = req.body;
    try {
        const teacher = new Teacher({ name, qualification, email });
        await teacher.save();
        res.status(201).json(teacher);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
