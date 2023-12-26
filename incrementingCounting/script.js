document.addEventListener('DOMContentLoaded', function () {
  // Obtén todos los elementos con la clase "counter"
  var counterElements = document.querySelectorAll('.counter');

  // Itera sobre cada elemento y aplica la lógica del contador
  counterElements.forEach(function (counterElement) {
    // Obtén el número objetivo del atributo data-target
    var targetNumber = parseInt(counterElement.getAttribute('data-target'));

    // Inicia el contador desde 0
    var currentNumber = 0;

    // Define la función de animación
    function count() {
      // Incrementa el número actual
      currentNumber = currentNumber + 20;

      // Actualiza el contenido del elemento con el número actual
      counterElement.textContent = currentNumber;

      // Si no hemos alcanzado el número objetivo, sigue contando
      if (currentNumber < targetNumber) {
        // Llama a la función de nuevo después de un breve retraso
        setTimeout(count, 1);
      }
    }

    // Inicia la animación
    count();
  });
});
