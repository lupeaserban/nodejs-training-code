const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send(e.message);
    }

    // Task.find({}).then((tasks) => {
    //     res.send(tasks);
    // }).catch((e) => {
    //     res.status(500).send(e.message);
    // });
});

router.get("/tasks/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);

        if (!task) {
            return res.status(404).send();
        }

        res.send(task);

    } catch (e) {
        res.status(404).send(e.message);
    }

    // Task.findById(_id).then((task) => {
    //     res.send(task);
    // }).catch((e) => {
    //     res.status(404).send(e.message);
    // });
});



router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).send({error: "No  task with id: " + req.params.id});
        }

        res.send(task);
    } catch (e) {
        res.status(500).send(e.message);
    }
})

router.patch('/tasks/:id', async (req, res) => {

    const updates = Object.keys(req.body);
    const allowedUpdates = ['completed', 'description'];

    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    })

    if (!isValidOperation) {
        return res.status(400).send({error: "Not a valid update operation!!"});
    }

    try {

        const task = await Task.findById(req.params.id);

        updates.forEach((update) => task[update] = req.body[update]);
        await task.save();

        //const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch (e) {
        res.status(400).send(e.message);
    }
})


router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }

    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch((e) => {
    //     res.status(400).send(e.message);
    // });
})

module.exports = router;
