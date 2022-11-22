$(function() {
    $("dd")
        .addClass("invisible")

    $("#btn-2").click(function(){
        $("dd").toggleClass("invisible")
    })
});