fetch('https://api.medanpedia.co.id/profile')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // tampilkan data di halaman
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    alert('Error fetching data from API');
  });
