// CRUD

const {MongoClient, ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();
console.log(id);

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    console.log('Connected correctly!');
    const db = client.db(databaseName);

    db.collection('users').deleteMany({
        age: 22
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })


    // db.collection('users').updateOne({
    //     _id: new ObjectId('611a32751bf2837ad04f6ad1')
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
    //
    // db.collection('tasks').updateMany({
    //     completed : false
    // }, {
    //     $set : {
    //         completed: true
    //     }
    // }).then((result) =>{
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').findOne({_id : new ObjectId('611a43200156335f07f64ae4')}, (error, task) => {
    //     if(error){
    //         return console.log("Could not get by id");
    //     }
    //     console.log(task);
    // });
    //
    // db.collection('tasks').find({ completed: false}).toArray((error, tasks) =>{
    //     console.log(tasks);
    // });


    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Sandru',
    //     age: 22
    // }, (error, result) => {
    //     if(error) {
    //         return console.log("Unable to insert user!");
    //     }
    //     console.log(result.insertedId);
    // });

    // db.collection('users').findOne({name:'Jen'}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Jack',
    //         age: 29
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log("Unable to insert documents!!");
    //     }
    //     console.log(result.insertedIds);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description : 'Do laundry!',
    //         completed: false
    //     },
    //     {
    //         description: 'Wash dishes!',
    //         completed: true
    //     },
    //     {
    //         description: 'Walk dog!',
    //         completed : true
    //     }
    // ], (error, result) =>{
    //     if(error) {
    //         return console.log("Could not insert items!");
    //     }
    //     console.log(result.insertedIds);
    // })

});

