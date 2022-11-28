$(function() {
    $("dd")
        .addClass("invisible")

    $("#btn-1").click(function(){
        $("dd").toggleClass("invisible")
    })

    $("#btn-2").click(function(){
        $("ul").children(".4").css("background", "yellow")
    })

    $("h3.h31").click(function(){
        $("ul.ul1").children().css("font-weight", "bold")
    })

    $("h3.h32").click(function(){
        $("ul.ul2").children().css("font-weight", "bold")
    })

    $("h3.h33").click(function(){
        $("ul.ul3").children().css("font-weight", "bold")
    })

    $("ul.ul1").click(function(){
        $("ul.ul1").children(".1").css("color", "blue")
    })

    $("ul.ul2").click(function(){
        $("ul.ul2").children(".1").css("color", "blue")
    })

    $("ul.ul3").click(function(){
        $("ul.ul3").children(".1").css("color", "blue")
    })
});