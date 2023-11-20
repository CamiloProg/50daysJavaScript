
function nextJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      const joke = data.joke;
      document.getElementById('joke').innerHTML = joke;
    });
}


fetch('https://icanhazdadjoke.com/', {
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    const joke = data.joke;
    document.getElementById('joke').innerHTML = joke;
  });
