const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const appPort = 4004;
const mongoUrl = "mongodb+srv://admin:12345@cluster0.ahnr3lu.mongodb.net/?retryWrites=true&w=majority";


const app = express();
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200,
};

const UsersSchema = new mongoose.Schema({
	id: String,
	name: String,
	nickName: String,
	imgUrl: String,
});

mongoose.model("Users", UsersSchema);

const Users = mongoose.model("Users");

const getAllUsers = (req, res) => {
	Users.find()
		.exec()
		.then((users) => res.json(users))
		.catch((err) => res.status(500).json(err));
};

const createUser = (req, res) => {
	Users.create(req.body)
		.then((createUsers) => res.json(createUsers))
		.catch((err) => res.status(500).json(err));
};

const updateUsers = (req, res) => {
	Users.updateOne({ _id: req.params.id }, { $set: req.body })
		.exec()
		.then((user) => res.json(user))
		.catch((err) => res.status(500).json(err));
};

app.get("/users", cors(corsOptions), getAllUsers);
app.post("/users", cors(corsOptions), createUser);
app.put("/users/:id", cors(corsOptions), updateUsers);

mongoose
	.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(appPort, () => console.log(`Listening on port ${appPort} ...`)))
	.catch((err) => console.error(`Error connecting to mongo: ${mongoUrl}`, err));