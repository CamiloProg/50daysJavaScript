
// Declara la variable para llevar el seguimiento del paso actual
var currentStep = 1;

var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

function next() {

  if (currentStep < 4) {
    currentStep++;
  }
  if (currentStep < 4) {
    document.getElementById(`step${currentStep}`).classList.add('actualStep');
    document.getElementById(`line${currentStep}`).classList.add('actualStep');
    nextButton.classList.add('buttonSelected');
    prevButton.classList.remove('buttonSelected');

  } else {
    document.getElementById(`step${currentStep}`).classList.add('actualStep');
    document.getElementById(`line${currentStep}`).classList.add('actualStep');
    nextButton.classList.remove('buttonSelected');

  }

  console.log(currentStep);

}
function prev() {

  if (currentStep > 0) {
    currentStep--
  }
  if (currentStep > 0) {
    document.getElementById(`step${currentStep + 1}`).classList.remove('actualStep');
    document.getElementById(`line${currentStep + 1}`).classList.remove('actualStep');
    prevButton.classList.add('buttonSelected');
    nextButton.classList.remove('buttonSelected');

  } else {
    prevButton.classList.remove('buttonSelected');

  }

  console.log(currentStep);

}
