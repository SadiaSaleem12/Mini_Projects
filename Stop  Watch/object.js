var min = 0;
var sec = 0;
var msec = 0;

var minh = document.getElementById("min");
var sech = document.getElementById("sec");
var msech = document.getElementById("msec");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");


function timer() {

    msec++;
    msech.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        sech.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        minh.innerHTML = min;
        sec = 0;
    }

}

function start() {
    interval = setInterval(timer, 10);

}

function pause() {
    clearInterval(interval);
}

function reset() {
    sec = 0;
    min = 0;
    msec = 0;
    minh.innerHTML = min;
    sech.innerHTML = sec;
    msech.innerHTML = msec;
    clearInterval(interval);
}

function disablebtn1() {

    btn1.disabled = true;
    btn3.disabled = false;
    btn2.disabled = false;
}

function disablebtn2() {

    btn1.disabled = false;
    btn2.disabled = true;
    btn3.disabled = false;

}

function disablebtn3() {

    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = true;
}