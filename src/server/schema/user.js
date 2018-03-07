import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/users');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	login: {type: String},
	password: {type: String},
	name: {type: String},
	family: {type: String},
	gender: {type: String},
	articles: []
});

export const User = mongoose.model('User', userSchema);