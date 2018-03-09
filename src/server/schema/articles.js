import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/articles');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
	body: {type: String},
	title: {type: String},
	date: {type: Date, default: Date.now},
	author: {type: String},
	comments: [{
		body: {type: String},
		date: {type: Date},
		author: {type: String}
	}]
});

export const Article = mongoose.model('Article', articleSchema);

// for(let i=1;i<=10;i++){
// 	new Article({
// 		title: `Title ${i}`,
// 		author: 'Test author',
// 		body: 'Lorem ipsum body text'
// 	}).save();
// }
