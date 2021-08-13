const express = require("express");
const path = require('path');

//console.log(path.join(__dirname, '../public'));

const app = express();

app.set('view engine', 'hms');
app.use(express.static(path.join(__dirname, '../public')))

app.get('/weather', (req,res)=>{
    res.send({
        forecast : 'It is snowing',
        location: 'Cluj'
    });
});

app.listen(3000, () =>{
    console.log('Server is listening on port 3000!');
});

//app.com
//app.com/help
//app.com/about
