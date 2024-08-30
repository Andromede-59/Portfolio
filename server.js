const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const sendEmail = require('./sendMail');
const multer = require('multer');
require('dotenv').config();

const app = express();
// const port = 3000;

// app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

const upload = multer();

app.get('/', (req, res) => {
	res.status(200).send('Healthcheck passed');
});

app.get('*', (req, res) => {
  	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/sendMail', upload.none(), async (req, res) => {
	try {
		const { name, email, message } = req.body;
		const emailSent = await sendEmail(name, email, message);
		if (!emailSent) {
			return res.status(500).send('Error sending email');
		}
		res.status(200).send('Email sent');
	}
	catch (error) {
		console.error(error);
		res.status(500).send('Error sending email');
	}
});

app.listen( port => {
	console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;