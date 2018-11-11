window.onscroll = function () {
  bloquearnavBar()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function bloquearnavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}