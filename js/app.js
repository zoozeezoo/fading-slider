document.addEventListener("DOMContentLoaded", function () {

  var slideCounter = 0
  carousel();

  function carousel() {
    var slides = document.getElementsByClassName('slide')[0].children;
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display="none";
    }
    slideCounter++;
    if (slideCounter>slides.length) {
      slideCounter=1
    }
    slides[slideCounter-1].style.display="inline-block";
    setTimeout(carousel, 6000);
  }
})
