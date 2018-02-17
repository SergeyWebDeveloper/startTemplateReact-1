import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/articles');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    login: {type: String, required: true},
    password: {type: String, required: true},
	body: {type: String, required: true},
	date: {type: Date, default: Date.now},
	comments: [{
		body: {type: String, required: true},
		date: {type: Date},
		author: {type: String, required: true}
	}]
});

export const Article = mongoose.model('Article',articleSchema);

// for(let i=1;i<=10;i++){
// 	new Article({
// 		title: `Title ${i}`,
// 		author: 'Test author',
// 		body: 'Lorem ipsum body text'
// 	}).save();
// }
