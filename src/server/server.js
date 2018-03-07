import express from 'express';
import mongoose from 'mongoose';
import {Article} from './schema/articles';
import {User} from './schema/user';
import bodyParser from 'body-parser';
import url from 'url';

const app = express();
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/articles');

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
	next()
});

// app.post('/add-post/', (req, res) => {
// 	// console.log(req.body)
//
//     User.update({_id: '5a9a8f78db450b0b3c121f6b'}, {$push: {articles: ['qwe']}});
//
//     res.send('success');
// });

app.use(bodyParser.json());

app.get('/api/articles', (req, res) => {
	Article.find().sort({date: 'desc'}).limit(5).then(art => res.json(art));
});

app.get('/api/article-post', (req, res) => {
	const querys = url.parse(req.url, true).query;
	Article.findOne({_id: querys.id}, function (err, a) {
		if (err) res.send({error: true});
		res.send(a);
	});
});

app.get('/api/delete-post', (req, res) => {
	const querys = url.parse(req.url, true).query;
	Article.findOne({_id: querys.id}).remove(function (err) {
		if (err) {
			res.send({error: true});
		} else {
			res.send({success: true});
		}
	});
});

app.post('/api/articles/newpost', (req, res) => {
	const article = new Article({
		body: req.body.body,
		title: req.body.title,
		author: req.body.author
	});
	article.save(function (err, post) {
		if (err) {
			res.send({error: true});
		}
		else {
			User.findByIdAndUpdate(req.body.idAuthor, {$push: {articles: post._id}}, function (err) {
				if (err) {
					res.send({error: true});
				}
			});
			res.send({
				success: true
			});
		}
	});
});

// app.get('/api/postadmin', (req, res) => {
// 	const querys = url.parse(req.url, true).query;
// 	const articlesAdmin = [];
// 	User.findOne({_id: querys.id}, function (err, info) {
// 		info.articles.forEach((id) => {
// 			Article.findOne({_id: id}, function (err, post) {
// 				func(post)
// 			});
// 		});
// 	});
// 	function func(post) {
// 		articlesAdmin.push(post);
// 	}
// 	console.log('ARTICLES',articlesAdmin);
// 	res.send(articlesAdmin);
// });

app.get("/api/postadmin", async (req, res) => {
	const querys = await url.parse(req.url, true).query;
	const user = await User.findOne({ _id: querys.id });
	const articles = await Article.find({ _id: { $in: user.articles } });
	res.send(articles);
});

app.post('/api/user', (req, res) => {
	const user = new User({
		login: req.body.login,
		password: req.body.password,
		name: req.body.name,
		family: req.body.family,
		gender: req.body.gender
	});

	user.save(function (err) {
		if (err) res.send({error: true});
		res.send({success: true});
	});
});

app.get('/api/user', (req, res) => {
	const querys = url.parse(req.url, true).query;

	User.findOne({login: querys.login, password: querys.password}, function (err, u) {
		if (err) res.send({error: true});
		res.send({user: u});
	});
});


app.listen(3001, () => {
	console.log('Server connect...')
});
