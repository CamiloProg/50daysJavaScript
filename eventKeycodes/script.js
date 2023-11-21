const key = document.getElementById('key')

document.addEventListener('keypress', function (event) {
  var keyPressed = event.key;
  var keyCodePressed = event.keyCode;
  var codePressed = event.code;
  key.innerHTML = keyPressed;
  keyCode.innerHTML = keyCodePressed;
  code.innerHTML = codePressed;

})
