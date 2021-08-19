const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;


//middleware

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled!');
//     } else {
//         next();
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('WebSite in maintenance!');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//Without middleware : new request -> run route handler
//With middleware: new request -> do something -> run route handler

app.listen(port, () => {
    console.log("Server is up on " + port);
});

const Task = require('./models/task');
const User = require('./models/user');

// const main = async () => {
//     // const task = await Task.findById('611e153c667eea2c90371135');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);
//
//     const user = await User.findById('611e1473abfe5240cc68a61e');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
//
// }
//
// main();
