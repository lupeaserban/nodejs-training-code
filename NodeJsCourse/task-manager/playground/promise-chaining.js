require('../src/db/mongoose');

const User = require('../src/models/user');

//611a5c9d1ce84448608698c4

// User.findByIdAndUpdate('611a5c9d1ce84448608698c4', {age: 1}).then((user) => {
//     console.log(user);
//     return User.countDocuments({age: 1});
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});
    return count;
}

updateAgeAndCount('611a5c9d1ce84448608698c4', 2).then((count) => {
   console.log(count);
}).catch((e) => {
    console.log(e);
});
