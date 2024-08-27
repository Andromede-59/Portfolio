const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/projects', (req, res) => {
  const projects = [
    { id: 1, title: 'Projet 1', description: 'Description du projet 1' },
    { id: 2, title: 'Projet 2', description: 'Description du projet 2' }
  ];
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
