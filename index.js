// require the express for setting up the server
const express = require('express');
//require the path module 
const path = require('path');

//declare a port to listen the server
const port = process.env.PORT || 7000;

//importing database 
const db = require('./config/mongoose');

//importing the database schema
const Task = require('./models/task');

//using express to start the server processing 
const app = express();

//middleware to use static files
app.use(express.static('./views'));

//middleware to parse the data before the controllers 
app.use(express.urlencoded());

//set up the view Engine 
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

//rendering the home page 
app.get('/',async function(req,res){
    try{
      let tasks =  await Task.find({});
       return res.render('home', {
        title:"To Do List App ",
        task : tasks
    });
}
    catch(err)
    {
        console.log('Error in fetching tasks from db : ',err); 
    }
        });

//make the app to listen on assigned port number
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running successfully on : ${port}`);
});