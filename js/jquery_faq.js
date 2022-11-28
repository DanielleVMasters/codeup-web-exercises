$(function() {
    $("dd")
        .addClass("invisible")

    $("#btn-1").click(function(){
        $("dd").toggleClass("invisible")
    })

    $("#btn-2").click(function(){
        $("ul").each(function(){
            $(this).children().last().css("background", "yellow")
        })
    })

    $("h3").click(function(){
        $(this).next().children().css("font-weight", "bold")
    })

    $("li").click(function(){
        $(this).parent().children().first().css("color", "blue")
    })
});