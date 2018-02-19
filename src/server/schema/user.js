import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/users');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	login: {type: String, required: true},
	password: {type: String, required: true},
	name: {type: String},
	family: {type: String},
	gender: {type: String}
});

export const User = mongoose.model('User', userSchema);