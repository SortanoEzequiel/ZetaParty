const server = require('./src/app');
const {conn} = require('./src/db');
require('dotenv').config();
const {DB_PORT} = process.env;

// const PORT = 3001;

conn.sync({force: true}).then(() => {
	server.listen(3001, () => {
		console.log(`listening on 3001`);
	});
});
