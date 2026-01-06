const express = require("express");
const Student = require("../models/Student");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

/* ADD STUDENT */
router.post("/add", auth, async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json({ msg: "Student added successfully" });
  } catch (err) {
    res.status(400).json({ msg: "Error adding student" });
  }
});

/* GET ALL STUDENTS */
router.get("/", auth, async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

/* UPDATE STUDENT */
router.put("/:id", auth, async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: "Student updated successfully" });
  } catch (err) {
    res.status(400).json({ msg: "Error updating student" });
  }
});

/* DELETE STUDENT */
router.delete("/:id", auth, async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ msg: "Student deleted successfully" });
  } catch (err) {
    res.status(400).json({ msg: "Error deleting student" });
  }
});

module.exports = router;
