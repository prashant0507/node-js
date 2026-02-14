const mongoose = require('mongoose');

// NOTE:- 
// tasks is a collection in mongo which is equal to table in mysql
// tasks collection automatically created in mongo once you save here
// to target db we need to pass db name in connection string
// if you will not pass db name in connection string iit will create new db with name of test
const tasks = mongoose.Schema(
    {
        taskName : {
            type: String,
            required: [true, 'Please add a Task Name value']
        }
    },
    {
        timesstamps: true
    }
)

module.exports = mongoose.model('tasks', tasks);
