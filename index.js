const start = document.querySelector("#start");
const record = document.querySelector("#record");
const show = document.querySelector(".running-time");
const store = document.querySelector(".store");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let miliSec = 00;
let sec = 00;
let min = 00;
let hour = 00;
let timer = null;

function runDispley(){
    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = miliSec < 10 ? "0" + miliSec : miliSec;
    show.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}

function showDisplay(){
    miliSec++;
    if(miliSec >= 100){
        sec++;
        miliSec = 0;
        if(sec >= 60){
            min++;
            sec = 0;
            if(min >= 60){
                hour++;
                min = 0;
            }
        }
    }
    runDispley();
}
function watchStart(){
    if(timer!== null){
        clearInterval(timer)
    }
    timer = setInterval(showDisplay,10);
    start.style.zIndex = "1";
    pause.style.zIndex = "100"
}
start.addEventListener("click",watchStart);

record.addEventListener("click",function(){
    store.innerHTML += `${show.innerHTML} <i class="fa-solid fa-flag"></i><br>`
})
pause.addEventListener("click",function(){
    clearInterval(timer);
    start.style.zIndex = "100";
    pause.style.zIndex = "1"
})
reset.addEventListener("click",function(){
    clearInterval(timer);
    start.style.zIndex = "100";
    pause.style.zIndex = "1"
    miliSec = 00;
    sec = 00;
    min = 00;
    hour = 00;
    runDispley();
    store.innerHTML = 
    `
    <h2>Records</h2> <br>
    Hour : Minute : Second : MiliSecond<br>
    `;
})
