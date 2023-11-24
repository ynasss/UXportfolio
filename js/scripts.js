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