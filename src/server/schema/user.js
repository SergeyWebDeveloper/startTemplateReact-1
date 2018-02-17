import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/users');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {type: String, required: true},
    password: {type: String, required: true},
    // body: {type: String, required: true},
    // date: {type: Date, default: Date.now},
    // comments: [{
    //     body: {type: String, required: true},
    //     date: {type: Date},
    //     author: {type: String, required: true}
    // }]
});

export const User = mongoose.model('User', userSchema);