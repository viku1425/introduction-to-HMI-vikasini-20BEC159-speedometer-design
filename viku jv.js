var speed = 0;
var prevspeed = 0;
/* var currentscale=1; */

function increaseSpeed(){
    if(speed<180){
        speed=speed+10;
        addclass();
    }
}
function decreaseSpeed(){
    if(speed>0){
        speed=speed-10;
        addclass();
    }
}
function addclass(){
    let newclass= "speed-" +speed;
    let prevclass= "speed-" +prevspeed;
    let e1=document.getElementsByClassName("container")[0];
    if(e1.classList.contains(prevclass)){
        e1.classList.remove(prevclass);
        e1.classList.add(newclass);
    }
    prevspeed=speed;
}