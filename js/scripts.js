function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  if (document.getElementsByClassName('mySlides').length) {
    showSlides(slideIndex);
  }
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (!slides.length) return;
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (dots.length) {
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      if (captionText) captionText.innerHTML = dots[slideIndex-1].alt;
    } else {
      slides[slideIndex-1].style.display = "block";
      if (captionText) captionText.innerHTML = "";
    }
  }

(function(){
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('return-to-top');
    if (!btn) return;
    const THRESHOLD = 200;

    btn.style.display = 'none';

    const onScroll = () => {
      btn.style.display = (window.scrollY > THRESHOLD) ? 'block' : 'none';
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
})();