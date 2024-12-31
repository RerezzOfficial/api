document.getElementById('getDataButton').addEventListener('click', async () => {
  try {
    const response = await fetch('/profile'); // Panggil endpoint di server lokal Anda
    const data = await response.json();
    
    // Cek apakah API mengembalikan data yang valid
    if (data.status === false) {
      document.getElementById('result').innerHTML = `<p>${data.msg}</p>`;
    } else {
      document.getElementById('result').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }
  } catch (error) {
    document.getElementById('result').innerHTML = `<p>Terjadi kesalahan saat mengambil data API</p>`;
  }
});
