// require the library
const mongoose = require('mongoose');

// connect to the database
<<<<<<< HEAD
const db = mongoose.connect("mongodb+srv://chitwan:Chitwan123@cluster0.1mg6bhi.mongodb.net/?retryWrites=true&w=majority").then(()=>{
=======
const db = mongoose.connect({{"mongodb+srv://chitwan:Chitwan123@cluster0.1mg6bhi.mongodb.net/?retryWrites=true&w=majority"}}).then(()=>{
>>>>>>> 77aa143fde9bbe013544307a559c96abcc39992f
    console.log('Successfully Connected to Database');
}).catch((err)=>{
    console.log('Error in connecting to Db ' , err);
})
// exporting the database
module.exports = db;
