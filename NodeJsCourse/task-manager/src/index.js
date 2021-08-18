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

const jwt = require('jsonwebtoken');

const myFunction = async () => {
    const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '7 days'});
    console.log(token);

    console.log(jwt.verify(token, 'thisismynewcourse'));


}

myFunction();
