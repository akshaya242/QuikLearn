const Course = require('../models/Course');

// Get all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Create new course
exports.createCourse = async (req, res) => {
    const { name, description, teacher } = req.body;
    try {
        const course = new Course({ name, description, teacher });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get a course by ID
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
