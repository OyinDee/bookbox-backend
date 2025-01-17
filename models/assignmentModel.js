

const mongoose = require("mongoose");

const AssignmentSchema = mongoose.Schema({
    document: String,
    courseID: Number,
    title: String,
    body: String,
    deadline: Date,
    ID: Number,
});

const assignmentModel = mongoose.model("assignments", AssignmentSchema);

module.exports = assignmentModel;