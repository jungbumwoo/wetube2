import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: jb.. '));
db.once('open', function() {
    console.log(`db connected at db.js`);
    //we're connected!
});

