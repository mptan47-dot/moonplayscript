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
/* =========================
   DOORS NEW DESIGN
========================= */

.verify-buttons{

display:flex;

gap:20px;

justify-content:center;

margin:35px 0;

}


.verify-btn{

display:flex;

align-items:center;

gap:10px;

padding:18px 30px;

border-radius:15px;

background:#111;

border:1px solid #ff0000;

color:white;

text-decoration:none;

font-weight:700;

box-shadow:0 0 15px rgba(255,0,0,.3);

transition:.3s;

}


.verify-btn:hover{

transform:scale(1.05);

box-shadow:0 0 30px red;

}


.icon{

font-size:25px;

}



/* Loading */

.loading-area{

display:flex;

justify-content:center;

align-items:center;

gap:15px;

font-size:20px;

font-weight:700;

color:white;

}


.loader{

width:25px;

height:25px;

border:4px solid #333;

border-top:4px solid red;

border-radius:50%;

animation:spin 1s linear infinite;

}


@keyframes spin{

100%{

transform:rotate(360deg);

}

}



/* Code */

.script-box{

display:flex;

align-items:center;

gap:15px;

margin-top:30px;

background:#080808;

padding:20px;

border-radius:20px;

border:1px solid rgba(255,0,0,.3);

}


.code-area{

flex:1;

overflow:hidden;

}


#scriptCode{

background:#000;

padding:20px;

border-radius:15px;

color:#777;

filter:blur(4px);

font-size:15px;

}


#copyBtn{

width:120px;

height:55px;

border:none;

border-radius:15px;

background:red;

color:white;

font-weight:800;

cursor:pointer;

}


#copyBtn:disabled{

opacity:.5;

cursor:not-allowed;

}


@media(max-width:700px){

.verify-buttons{

flex-direction:column;

}


.script-box{

flex-direction:column;

}


#copyBtn{

width:100%;

}

  }
