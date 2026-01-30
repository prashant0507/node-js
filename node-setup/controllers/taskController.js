const getTasks = (req, res) => {
    res.status(200).json({
        message:'Get All Tasks 1'
    })
};

const createTasks = (req, res) => {
    // console.log('11111', req.body);
    // if(!req.body.fullname) {
    //     console.log('2222222');
    //     throw new Error ('Please Create the task');
    // }
    // console.log('3333333');
    res.status(200).json({
        message:'Create Tasks 1'
    })
};

const updateTask = (req, res) => {
    res.status(200).json({
        message:'Update Task 1'
    })
}

const deleteTask = (req, res) => {
    res.status(200).json({
        message:'Delete Task 1'
    })
}

module.exports = {
    getTasks,
    createTasks,
    updateTask,
    deleteTask
}