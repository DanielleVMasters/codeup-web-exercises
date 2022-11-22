$(function() {
    $("dd")
        .addClass("invisible")

    $("dt")
        .click(function(){
            $(this).css("color","blue")
            $("dd").toggleClass("invisible")
    });
});