require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.json({
		message: "cdg-sh- url shortenenr",
	});
});

// app.get("/url/:id", (req, res) => {
// 	// Todo : get a short url by id
// });

// app.get("/:id", (req, res) => {
// 	// Todo : redirect to url
// });

// app.post("/url", (req, res) => {
// 	// Todo : create a short url
// });

const port = process.env.port || 3000;
app.listen(port, () => {
	console.log(`Listenig at http://localhost:${port}`);
});
