console.log("Made by Daniel Knopf!");
var finalDate = new Date("April 23, 2021, 17:30:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = finalDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // document.getElementById("hours").innerHTML = hours;
  // document.getElementById("minutes").innerHTML = minutes;
  // document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("hours").innerHTML = 0;
  document.getElementById("minutes").innerHTML = 0;
  document.getElementById("seconds").innerHTML = 0;
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $("nav").addClass("scrolled");
    } else {
      $("nav").removeClass("scrolled");
    }
  });
});

var hamburger = document.getElementById("hamburger");
hamburger.onclick = function () {
  var navbar = document.getElementById("nav");
  if (navbar.classList.contains("expanded")) {
    navbar.classList.remove("expanded");
  } else {
    navbar.classList.add("expanded");
  }
};
