// require the library
const mongoose = require('mongoose');

// connect to the database
const db = mongoose.connect({{ secrets.MONGODB_URI }}).then(()=>{
    console.log('Successfully Connected to Database');
}).catch((err)=>{
    console.log('Error in connecting to Db ' , err);
})
// exporting the database
module.exports = db;
