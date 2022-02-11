const pg = require("pg");

const options = {
	database: "todo-app",
	host: "localhost",
	port: 5432,
	max: 10,
	idleTimeoutMillis: 30_000,
};

const pool = new pg.Pool(options);

pool.on("connect", () => {
	console.log("Connected to database todo-app");
});

pool.on("error", (err) => {
	console.error("Error with database todo-app:", err);
});

module.exports = pool;
