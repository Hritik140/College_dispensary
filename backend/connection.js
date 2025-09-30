//require('dotenv').config(); // Load environment variables


//const mongoose = require('mongoose')


//const mongoDBURL = process.env.mongoDBURL;
//mongoose.connect(mongoDBURL)
   // .then(res=>{
     //   console.log("DataBase Connected Successfully")
//}).catch(err=>{
  //      console.log(err)
//})

require('dotenv').config();
const mongoose = require('mongoose');

const mongoDBURL = process.env.mongoDBURL; // ✅ must match your env variable name exactly

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBURL, {
      useNewUrlParser: true,       // ✅ important for connection string parsing
      useUnifiedTopology: true,    // ✅ ensures stable connection in production
    });
    console.log("✅ Database Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // stop server if DB fails to connect
  }
};

module.exports = connectDB;


