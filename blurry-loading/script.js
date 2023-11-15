const body = document.getElementById('body');

document.addEventListener('DOMContentLoaded', function () {

  setTimeout(function () {
    body.classList.remove('blur')
  }, 500)
})
document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.querySelector(".loading-screen");
  const loadingPercentage = document.getElementById("loadingPercentage");

  let progress = 0;
  const interval = setInterval(function () {
    progress += 1;
    loadingPercentage.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      loadingScreen.style.display = "none";
      document.body.style.overflow = "visible";
    }
  }, 20); 
});
