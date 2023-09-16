const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://naren:123qaz@cluster0.hkou9wx.mongodb.net/polling');


// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;