const questions = [
{
question:"🎂 1. Meri Birthday kya hai? (DD MMM YYYY)",
answer:"14 apr 2008"
},
{
question:"😌 2. Kya tum ek samajdar ladki ki behen ho? (yes)",
answer:"yes"
},
{
question:"🤪 3. Kya tum pagal ho? (yes)",
answer:"yes"
},
{
question:"👦 4. Kya tumhara male best friend hai? Agar hai to uska naam likho.",
answer:"krutagna"
}
];

const photos = [
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg"
];

let currentQuestion = 0;
let currentPhoto = 0;

window.onload = function(){

document.getElementById("progress").innerHTML="Question 1 / 4";
document.getElementById("question").innerHTML=questions[0].question;

}

function startQuiz(){

document.getElementById("startScreen").style.display="none";
document.getElementById("quizScreen").style.display="block";

}

function checkAnswer(){

let ans=document.getElementById("answer").value.trim().toLowerCase();

if(ans==questions[currentQuestion].answer){

currentQuestion++;

if(currentQuestion<questions.length){

document.getElementById("progress").innerHTML="Question "+(currentQuestion+1)+" / 4";

document.getElementById("question").innerHTML=questions[currentQuestion].question;

document.getElementById("answer").value="";

}else{

document.getElementById("quizScreen").style.display="none";

document.getElementById("photoScreen").style.display="block";

showPhoto();

}

}else{

alert("😂 Wrong Answer! Dobara Try Karo.");

}

}

function showPhoto(){

document.getElementById("photoNumber").innerHTML="📸 Photo "+(currentPhoto+1)+" / 4";

document.getElementById("photo").src=photos[currentPhoto];

}

document.getElementById("goodBtn").onclick=function(){

currentPhoto++;

if(currentPhoto<photos.length){

showPhoto();

}else{

loadingAnimation();

}

}

function loadingAnimation(){

document.getElementById("photoScreen").style.display="none";

document.getElementById("loadingScreen").style.display="block";

let bar=document.getElementById("progressBar");

let percent=document.getElementById("percent");

let text=document.getElementById("loadingText");

let value=0;

let timer=setInterval(function(){

value++;

bar.style.width=value+"%";

percent.innerHTML=value+"%";

if(value==20)
text.innerHTML="😂 Detecting Funny Photos...";

if(value==50)
text.innerHTML="🤣 Calculating Embarrassment...";

if(value==80)
text.innerHTML="😜 Almost Done...";

if(value>=100){

clearInterval(timer);

text.innerHTML="🎉 Verification Complete!";

setTimeout(function(){

document.getElementById("loadingScreen").style.display="none";

document.getElementById("finalScreen").style.display="block";

},1000);

}

},30);

}

document.getElementById("yesBtn").onclick=function(){

document.getElementById("finalScreen").style.display="none";

document.getElementById("endScreen").style.display="block";

}

function moveBad(){

let btn=document.getElementById("badBtn");

btn.style.position="absolute";

btn.style.left=Math.random()*250+"px";

btn.style.top=Math.random()*250+"px";

}

document.getElementById("badBtn").addEventListener("mouseover",moveBad);

document.getElementById("badBtn").addEventListener("touchstart",moveBad);

function moveNo(){

let btn=document.getElementById("noBtn");

btn.style.position="absolute";

btn.style.left=Math.random()*250+"px";

btn.style.top=Math.random()*250+"px";

}

document.getElementById("noBtn").addEventListener("mouseover",moveNo);

document.getElementById("noBtn").addEventListener("touchstart",moveNo);