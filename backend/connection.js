require('dotenv').config(); // Load environment variables


const mongoose = require('mongoose')


const mongoDBURL = process.env.mongoDBURL;
mongoose.connect(mongoDBURL)
    .then(res=>{
        console.log("DataBase Connected Successfully")
}).catch(err=>{
        console.log(err)
})

