const pg = require("pg");

// database info here
const options = {
	database: "todo-app",
	host: "localhost",
	port: 5432,
	max: 10,
	idleTimeoutMillis: 30_000,
};

const pool = new pg.Pool(options);

// verify connection
pool.on("connect", () => {
	console.log("Connected to database todo-app");
});

// error handling
pool.on("error", (err) => {
	console.error("Error with database todo-app:", err);
});

// export pool module
module.exports = pool;
