const play = document.getElementById('play');

play.addEventListener('mouseenter', function () {
  play.classList.add('selected')
})
play.addEventListener('mouseleave', function () {
  play.classList.remove('selected')
})
const xbox = document.getElementById('xbox');

xbox.addEventListener('mouseenter', function () {
  xbox.classList.add('selected')
})
xbox.addEventListener('mouseleave', function () {
  xbox.classList.remove('selected')
})
