import express from 'express';
import mongoose from 'mongoose';
import {Article} from './schema/articles';

const app = express();
mongoose.connect('mongodb://localhost/articles');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next()
});

app.get('/api/articles', (req, res) => {
	Article.find().then(art=>res.json(art));
});

app.listen(3001, ()=>{console.log('Server connect...')});


