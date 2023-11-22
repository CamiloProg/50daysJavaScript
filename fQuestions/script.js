function show(number) {
  document.getElementById(`answer_${number}`).classList.toggle('show')
  document.getElementById(`button_${number}`).classList.toggle('buttonShow')
}
