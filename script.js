let minElement = document.getElementById("min");
let secElement = document.getElementById("sec");
let msecElement = document.getElementById("msec");
let interval;
let min = 0;
let sec = 0;
let msec = 0;


function timer (){
    msec ++
msecElement.innerHTML = msec;
if(msec>=100){
sec ++
secElement.innerHTML = sec
msec = 0
}
else if(sec>=60){
min ++
minElement.innerHTML = min
sec = 0

}

let stopElement = document.getElementById("stopBtn")
let resetElement = document.getElementById("resetBtn")


}
function startTimer (){
let startElement = document.getElementById("startBtn")

    interval = setInterval(timer,10)
    startElement.style.pointerEvents = "none"
}
function stopTimer (){
let startElement = document.getElementById("startBtn")
   startElement.style.pointerEvents = "auto"
clearInterval(interval)




}
function resetTimer(){
    let startElement = document.getElementById("startBtn")
   startElement.style.pointerEvents = "auto"
clearInterval(interval);
msec = 0;
sec =0
min=0
minElement.innerHTML = "00"
secElement.innerHTML = "00"
msecElement.innerHTML = "00"
}
