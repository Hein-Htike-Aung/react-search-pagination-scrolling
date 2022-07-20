import express from 'express';
const app = express();
import { users } from './users.js';
import cors from 'cors';

app.use(cors());

app.get('/', (req, res) => {
	const { keyword } = req.query;

	const keys = ['first_name', 'last_name', 'email'];

	const search = (data) => {
		return data.filter((item) =>
			keys.some((key) =>
				item[key].toLowerCase().includes(keyword.toLowerCase()),
			),
		);
	};

    // mongoose
    // const users = User.find({$regex: keyword}) 

	keyword ? res.json(search(users).slice(0, 10)) : res.json(users.slice(0, 10));
});

app.listen(5000, () => console.log('API is working!'));
