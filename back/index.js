const server = require('./src/app');
const {conn} = require('./src/db');
require('dotenv').config();

const PORT = process.env.PORT


conn.sync({force: true}).then(() => {
	server.listen(PORT, () => {
		console.log(`listening port`, PORT);
	});
});
