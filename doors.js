const telegramBtn = document.getElementById("telegramBtn");
const youtubeBtn = document.getElementById("youtubeBtn");

const verifyText = document.getElementById("verifyText");
const loader = document.querySelector(".loader");

const scriptCode = document.getElementById("scriptCode");
const copyBtn = document.getElementById("copyBtn");


let clicked = 0;
let started = false;


const realScript = "loadstring(game:HttpGet('https://raw.smokingscripts.org/vertex.lua'))()";


telegramBtn.onclick = () => {

window.open(
"https://t.me/+5BGGE1G9kWoyM2I0",
"_blank"
);

check();

};


youtubeBtn.onclick = () => {

window.open(
"https://youtube.com/@moonplay-y7t?si=EXUM2hL54fEdWjB-",
"_blank"
);

check();

};


function check(){

clicked++;


if(clicked >= 2 && !started){

started = true;

startLoading();

}

}



function startLoading(){

verifyText.innerHTML = "VERIFYING...";

loader.style.display = "block";


setTimeout(()=>{


verifyText.innerHTML = "VERIFIED ✓";

loader.style.display = "none";


scriptCode.innerHTML = realScript;


copyBtn.disabled = false;


},10000);


}



copyBtn.onclick = ()=>{


navigator.clipboard.writeText(realScript);


copyBtn.innerHTML = "COPIED ✓";


setTimeout(()=>{

copyBtn.innerHTML="COPY";

},2000);


};
