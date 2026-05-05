const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const sendEmail = require('./sendMail');
const multer = require('multer');
require('dotenv').config();

const app = express();
const CANONICAL_HOST = 'julien.mattot.fr';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

// app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

const upload = multer();

app.set('trust proxy', true);

app.use((req, res, next) => {
	if (process.env.NODE_ENV !== 'production') {
		return next();
	}

	const forwardedHost = req.headers['x-forwarded-host'];
	const host = (typeof forwardedHost === 'string' && forwardedHost) || req.headers.host;

	if (!host) {
		return next();
	}

	const normalizedHost = host.split(':')[0].toLowerCase();
	if (normalizedHost !== CANONICAL_HOST) {
		return res.redirect(301, `${CANONICAL_ORIGIN}${req.originalUrl}`);
	}

	return next();
});

app.get('/health', (req, res) => {
	res.status(200).send('Healthcheck passed');
});

app.use('/projects', (req, res, next) => {
	res.setHeader('X-Robots-Tag', 'noindex, nofollow');
	res.setHeader('Link', `<${CANONICAL_ORIGIN}/>; rel="canonical"`);
	next();
});

app.get(/.*/, (req, res) => {
  	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
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

// The HTTP server is started by `bin/www`.

module.exports = app;