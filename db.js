import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGOOSE_URL, { useNewUrlParser: true });

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    const greeting = this.name ? "Meow name is" + this.name : "I don't have a name";
    console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence'});
console.log(silence.name);

silence.save();


const mimi = new Kitten({ name: 'mimi' });
mimi.speak();

mimi.save((err, fluffy) => {
    if (err) return console.log(err);
    mimi.speak();
})

Kitten.find((err, kittens) => {
    /* 와 여기 kitten이 아니라 kitten s인거봡.. 
    collections에서도 kitten이 아니라 kittens라고 뜨네 ㄷㄷ
    */
    if (err) return console.log(err);
    console.log(kittens);
})


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: jb.. '));
db.once('open', function() {
    //we're connected!
});

