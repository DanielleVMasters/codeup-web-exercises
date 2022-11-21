let CheatKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    13: 'enter'
};
let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];
let konamiCodePosition = 0;

$(function(){
    $(document).keydown(function(e){
        let key = CheatKeys[e.keyCode];
        let requiredKey = konamiCode[konamiCodePosition];
        if (key == requiredKey) {
            konamiCodePosition++;
            if (konamiCodePosition == konamiCode.length) {
                activateCheats();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    })
    function activateCheats() {
        $("body").css("background-image", "url('pictures/MedicalPeacefulGalapagossealion-size_restricted.gif')");
        let audio = new Audio('audio/Konami.mp3');
        audio.play();
        $('h1').css("color", "white")
    }

});



