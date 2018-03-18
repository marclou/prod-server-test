const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello');
});

app.get('/users', (req, res) => {
	res
          .status(200)
		.send([
               {
				name: 'Marc',
				age: 24
			},
			{
				name: 'Wonji',
				age: 25
			}
		]);
});

app.listen(3000);
module.exports.app = app;
