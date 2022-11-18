$(function() {
    // // let contentalert = $("#title").html();
    // // alert(contentalert)
    // // $(".codeup").css("border", "1px solid red")
    // $("li").css("font-size", "20px")
    // $("h1, p, li").css("background-color", "yellow")
    // let elementalert = $("h1").html()
    // alert(elementalert)
    $("h1").click(
        function(){
            $(this).css("background", "peachpuff");
        }
    )
    $("p").dblclick(
        function(){
            $(this).css("font-size", "18px");
        }
    )
    $("li").hover(
        function() {
            $(this).css("color", "red");
        },
        function() {
            $(this).css("color", "black");
        }
    )
});