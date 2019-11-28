let inputHours = document.getElementById("hours");
let inputMinutes = document.getElementById("minutes");
let inputSeconds = document.getElementById("seconds");

let hours;
let minutes;
let seconds;

    function clock(){

        const date = new Date();

        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        inputHours.innerHTML = hours;
        inputMinutes.innerHTML = minutes;
        inputSeconds.innerHTML = seconds;

        if(minutes < 10){inputMinutes.innerHTML = "0" + minutes;}
        if(seconds < 10){inputSeconds.innerHTML = "0" + seconds;}
    }

setInterval(() => clock(), 100);


