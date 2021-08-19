require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete('611a5db24632aa4814086a27').then(() => {
//     console.log("Deleted task with id: 611a5db24632aa4814086a27!");
//     return Task.countDocuments({completed: false});
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
};

deleteTaskAndCount('611b5c14c29de32e344a64a0').then ((count) => {
    console.log(count);
}).catch((e) =>{
    console.log(e);
})
