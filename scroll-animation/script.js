document.addEventListener("DOMContentLoaded", function () {

  var boxes = document.querySelectorAll(".box");

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= -100 &&

      rect.bottom <= (window.innerHeight + 100)

    );
  }


  function handleScroll() {
    boxes.forEach(function (box, index) {
      if (isInViewport(box)) {
        box.style.transform = "translateX(0)";
        box.style.opacity = 1;
      } else {
        box.style.transform = index % 2 === 0 ? "translateX(-100%)" : "translateX(100%)";
        box.style.opacity = 0;

      }
    });
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);
});
