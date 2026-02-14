const asyncHandler = require('express-async-handler');
const tasksCollections = require('../models/taskModel');

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await tasksCollections.find();
    res.status(200).json(tasks);
});

const createTasks = asyncHandler(async (req, res) => {
    
    if(!req.body.taskName) {
        res.status(400);
        throw new Error ('Please Create the task');
    }

    const task = await tasksCollections.create({taskName: req.body.taskName})
    
    res.status(200).json(task);
});

const updateTask = asyncHandler(async (req, res) => {
    const task = await tasksCollections.findById(req.params.id);
    if(!task) {
        res.status(400);
        throw new Error ('Task not found');
    }
    const update = await tasksCollections.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(update)
});

const deleteTask = asyncHandler(async (req, res) => {
    const task = await tasksCollections.findById(req.params.id);
    if(!task) {
        res.status(400);
        throw new Error ('Task not found');
    }
    await tasksCollections.findByIdAndDelete(req.params.id);
    res.status(200).json({
        id: req.params.id
    })
});

module.exports = {
    getTasks,
    createTasks,
    updateTask,
    deleteTask
}