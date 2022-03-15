const start = document.getElementById("js--start");
const stopTimer = document.getElementById("js--stop");
const reset = document.getElementById("js--reset");


let seconds = 0;
let minutes = 0;
let miliseconden = 0;
let running = false;
let timer;



const secondsTimer = document.getElementById("js--seconds");
const minutesTimer = document.getElementById("js--minutes");
const milisecondenTimer = document.getElementById("js--miliseconds")


start.onclick = function(){
    if(running == true){
        return;
    }
    running = true; 
    timer = setInterval(function(){
        miliseconden = miliseconden + 1;
        if(miliseconden === 100){
            miliseconden = miliseconden = 0;
            seconds = seconds + 1;
            if(seconds < 10){
                secondsTimer.innerText = "0" + seconds
                return;
            }

            secondsTimer.innerText = seconds
        }
        if(seconds === 60 ){
            seconds = seconds = 0;
            minutes = minutes + 1;
            minutesTimer.innerText = minutes
        }
        if(miliseconden < 10){
            milisecondenTimer.innerText = "0" + miliseconden;
            return;    
        }

        milisecondenTimer.innerText = miliseconden /* Dit laat ie zin in de HTML */
        
    }, 1/*Dit is in miliseconden dus 1000ms = 1sec*/ ); 
  
}

stopTimer.onclick = function(){
    clearInterval(timer);
    running = false;
}

reset.onclick = function(){
   minutes = 0;
   seconds = 0;
   miliseconden = 0;
   minutesTimer.innerText = minutes;
   secondsTimer.innerText = seconds;
   milisecondenTimer.innerText = miliseconden;
   clearInterval(timer);
   running = false;

}


/* hier begint de slider */


const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body =  document.getElementById("js--body")


slider.value = 2
rangeValue.innerText= slider.value + "x";
console.log(slider.value);

slider.oninput = function(){
    rangeValue.innerText= slider.value + "x";
    body.style.fontSize= slider.value + "rem";
   
}

