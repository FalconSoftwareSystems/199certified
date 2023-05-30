/* Sticky Navigation Bar */
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Show Password Button */
function showPass() {
  var pass = document.getElementById("pword");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}