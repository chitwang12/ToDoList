// require the library
const mongoose = require('mongoose');

// connect to the database
const db = mongoose.connect(process.env.Secret_Key).then(()=>{
    console.log('Successfully Connected to Database');
}).catch((err)=>{
    console.log('Error in connecting to Db ' , err);
})

// // aquire the connection (to check if it is successful)
// //const db = mongoose.connection;

// // error
// db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));

// // up and running then print the message
// db.once('open', function(){
//     console.log('Connected to Database');
// });

// exporting the database
module.exports = db;