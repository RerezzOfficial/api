const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Pastikan mengarah ke file index.html di folder public
});

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

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
