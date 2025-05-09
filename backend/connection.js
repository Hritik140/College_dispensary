const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mashhooddanish:otfRG4r52l2IxOfN@cluster0.65lsq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(res=>{
        console.log("DataBase Connected Successfully")
}).catch(err=>{
        console.log(err)
})

