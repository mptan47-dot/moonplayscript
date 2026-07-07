const telegramBtn = document.getElementById("telegramBtn");
const youtubeBtn = document.getElementById("youtubeBtn");

const timerBox = document.getElementById("timer");
const countdown = document.getElementById("countdown");

const scriptCode = document.getElementById("scriptCode");
const copyBtn = document.getElementById("copyBtn");

let verified = false;
let clicks = 0;

const realScript = "loadstring(game:HttpGet('https://raw.smokingscripts.org/vertex.lua'))()";

telegramBtn.onclick = () => {

    window.open(
        "https://t.me/+5BGGE1G9kWoyM2I0",
        "_blank"
    );

    startVerify();

};


youtubeBtn.onclick = () => {

    window.open(
        "https://youtube.com/@moonplay-y7t?si=EXUM2hL54fEdWjB-",
        "_blank"
    );

    startVerify();

};


function startVerify(){

    if(verified) return;

    clicks++;

    if(clicks >= 2){

        timerBox.style.display = "block";

        let time = 10;

        countdown.innerHTML = time;


        let interval = setInterval(()=>{

            time--;

            countdown.innerHTML = time;


            if(time <= 0){

                clearInterval(interval);

                unlockScript();

            }

        },1000);

    }

}


function unlockScript(){

    verified = true;

    scriptCode.innerHTML = realScript;

    copyBtn.disabled = false;

}


copyBtn.onclick = ()=>{

    navigator.clipboard.writeText(realScript);

    copyBtn.innerHTML = "COPIED!";

    setTimeout(()=>{

        copyBtn.innerHTML = "COPY SCRIPT";

    },2000);

};
