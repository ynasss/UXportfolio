function menuToggle () {
    var x = document.getElementById("myNavtoggle");
    if (x.className === "navtoggle" && $(window).width() < 640) {
        x.className += " responsive";
    }
    else {
        x.className = "navtoggle"
    }
}
$(document).ready(function() {
$(".toggle-button").click(function() {
    var combineId = $(this).data("id");
    var textButton = $(this).text();

    $("#" + combineId).toggle();

    if (textButton === $(this).data("read-more")) {
        $(this).text($(this).data("read-less"));
    }
    else {
        $(this).text($(this).data("read-more"));
    }


});
});

let topbutton = document.getElementById("gototop_button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}