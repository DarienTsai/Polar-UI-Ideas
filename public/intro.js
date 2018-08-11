/**
 * logic for polar.html (mostly DOM)
 */

 //The intro section DOM
 let start = document.getElementById('intro');
 let intro = document.getElementById("intro-nav");
 let outro= document.getElementById("intro");
 let bg = document.getElementById("intro-bg");
 intro.addEventListener('click',clickIntro);
 outro.addEventListener('click', clickOutro, true);

function clickIntro(){
    intro.className = "on";
    intro.children[0].className = "off";
    intro.children[1].className = "on";
    intro.children[2].className = "on";
    bg.className = "off";
}
function clickOutro(){
    intro.className = "off";
    intro.children[0].className = "on";
    intro.children[1].className = "off";
    intro.children[2].className = "off";
    bg.className = "on";
}

let pass = document.getElementById('intro-form');
pass.children[0].addEventListener(
    'focusin',
    function(){
        pass.children[0].className = "";
        pass.children[1].className = "on";
    }
)
pass.children[0].addEventListener(
    'focusout',
    function(){
        pass.children[1].className = "off";
    }
)

//Passing area, beginning of home DOM
let entry = document.getElementById("intro-entry");
let home = document.getElementById('home');
entry.addEventListener(
    'mousedown',
    function(e){
        if(pass.children[0].value == "Polar"){
            intro.removeEventListener('click', clickIntro);
            e.path[3].className = "load";
            e.path[2].className = "load";
            start.className = "load";
            intro.children[1].className = "off";
            intro.children[2].className = "off";
            document.getElementById('home').className="on";
            setTimeout(function(){location.assign("app.html#")}, 1000);
        }
        else{
            pass.children[0].className = "shake";
            pass.children[0].blur();
        }
    }
);
pass.children[0].addEventListener(
    'keypress',
    function(e){
        var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        function triggerEvent(el, type){
            if ('createEvent' in document) {
                 // modern browsers, IE9+
                 var e = document.createEvent('HTMLEvents');
                 e.initEvent(type, false, true);
                 el.dispatchEvent(e);
             } else {
                 // IE 8
                 var e = document.createEventObject();
                 e.eventType = type;
                 el.fireEvent('on'+e.eventType, e);
             }
         }
         triggerEvent(entry, 'mousedown');
    }
    }
);
