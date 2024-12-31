const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// API endpoint
const apiUrl = 'https://api.medanpedia.co.id/profile';

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Route untuk halaman utama
app.get('/', async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.render('index', { data });
  } catch (error) {
    res.status(500).send('Error fetching data from API');
  }
});

// Route untuk halaman profile
app.get('/profile', async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.render('profile', { data });
  } catch (error) {
    res.status(500).send('Error fetching data from API');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
