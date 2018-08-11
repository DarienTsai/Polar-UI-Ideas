/**
 * for the main screen
 */

//nav
let side = document.getElementById('nav');
let sides = document.getElementsByClassName('nav-item');
let mod = document.getElementById('module');
let mods = document.getElementsByClassName('mod-item');
let descs = document.getElementsByClassName('desc');
let active = 0;

//click navigation
for(let i = 0; i < sides.length; i++){
    sides[i].addEventListener('click',
function(){
    for(let j = 0; j < sides.length; j++){
        sides[j].className = "nav-item";
        mods[j].className = "mod-item off";
        descs[j].className = "desc off";
    }
    sides[i].className = "nav-item active";
    mods[i].className = "mod-item on";
    descs[i].className = "desc on";
    active = i;
});
}

//scroll navigation
side.addEventListener('wheel',
function(e){
    scrolled(e);
}
);
mod.addEventListener('wheel',
function(e){
    scrolled(e);
}
);
function scrolled(WheelEvent){
    if(WheelEvent.wheelDelta < 0){
        if(active == sides.length - 1){
          sides[0].click();
          active = 0;
        } 
        else {
            active++;
            sides[active].click();
        }
    }
    else if(WheelEvent.wheelDelta > 0){
        if(active == 0){
            active = sides.length - 1;
            sides[active].click();
        }
        else{
            active--;
            sides[active].click();
        }
    }
}

//check pass
if(location.href.indexOf("app.html#ui") > 0){
    location.replace("404.html");
}
else if(location.href.indexOf("app.html#d") > 0){
    location.href.replace("app.html#", "app.html");
    location.hash = 'ui';
}
else{
    location.replace("404.html");
}