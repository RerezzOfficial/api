document.getElementById("getDataButton").addEventListener("click", function() {
  fetch('/profile')
    .then(response => response.json())
    .then(data => {
      const resultDiv = document.getElementById("result");
      if (data.status === false) {
        resultDiv.innerHTML = `<p>Error: ${data.msg}</p>`;
      } else {
        resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      }
    })
    .catch(error => {
      console.error("Error fetching data from API:", error);
      document.getElementById("result").innerHTML = "<p>Error fetching data from API</p>";
    });
});
