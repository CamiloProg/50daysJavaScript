window.onscroll = function () {
  var navbar = document.getElementById('navbar');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};