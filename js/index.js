$(".search .container .row .box button ").click(function() {
    $(".search .result").fadeIn();
    $(".search .container .row .box input").css('border',' 2px solid #E6686B');
    $(".search .result").css("display", "flex")

});
$(".search .result button").click(function() {
    $(this).css("background-color", "#3A3053");
    $(this).html("copied !");
});