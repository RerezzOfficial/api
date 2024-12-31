const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const apiUrl = 'https://api.medanpedia.co.id/profile';  // Ganti dengan API endpoint Anda
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: false, msg: "Error fetching data from API" });
  }
};
