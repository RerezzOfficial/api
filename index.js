const express = require('express');
const cors = require('cors');  // Add CORS package
const app = express();
const path = require('path');
const fetch = require('node-fetch');

// Enable CORS for all requests
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk mengambil data API
app.get('/profile', async (req, res) => {
  try {
    const apiUrl = 'https://api.medanpedia.co.id/profile';
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ status: false, msg: "Error fetching data from API" });
  }
});

// Run server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
