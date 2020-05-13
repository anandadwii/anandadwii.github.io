let toggler = document.querySelector(".toggler");
let fullscreen = document.querySelector(".fullscreen");

toggler.addEventListener('click', () => {
    fullscreen.classList.toggle("light");
})


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }