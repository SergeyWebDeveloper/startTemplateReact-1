import express from 'express';
import mongoose from 'mongoose';
import {Article} from './schema/articles';
import {User} from './schema/user';
import bodyParser from 'body-parser';
import url from 'url';

const app = express();
mongoose.connect('mongodb://localhost/articles');

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
	next()
});
app.use(bodyParser.json());

app.get('/api/articles', (req, res) => {
	Article.find().limit(5).then(art => res.json(art));
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
		// saved!
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
