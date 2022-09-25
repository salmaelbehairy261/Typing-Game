let time = window.localStorage.getItem('time');
let level = window.localStorage.getItem('level');
let bestScore=window.localStorage.getItem('bestScore');

let scoreElement = document.getElementById('score');
let score=Number(scoreElement.innerHTML);

let levelElement = document.getElementById("level");
let timeElement = document.getElementById("sec");

let content=document.getElementById('content');
let startPlay = document.getElementById('starting');
let startBtn = document.getElementById('Btnn');
let selectElement=document.getElementById('choose');
let bar=document.getElementById('bar');
let isPaused=false;


timeElement.innerHTML = time;
levelElement.innerHTML = level;

let selectLevel = () => {
    let selectValue=selectElement.value;
    if (selectValue == 1) {
        window.localStorage.setItem('time', '20')
        window.localStorage.setItem('level', 'Easy')
    }
    else if (selectValue == 2) {
        window.localStorage.setItem('time', '15')
        window.localStorage.setItem('level', 'Meduim')
    } else {
        window.localStorage.setItem('time', '10')
        window.localStorage.setItem('level', 'Hard')
    }
    time = window.localStorage.getItem('time');
    level= window.localStorage.getItem('level');
    timeElement.innerHTML = time;
    levelElement.innerHTML = level;
}


let Generating = () => {
    let arr = ['week', 'Congratulations', 'Bee', 'Location', 'Shopping', 'Collage', 'graduation', 'Love', 'Money', 'suggestions', 'Charger', 'Bag', 'Mobile', 'scarf', 'TV', 'Computer']
    let ran = Math.ceil(Math.random() * arr.length - 1);
    return arr[ran];
}

let Timeout =()=>{
    if (score>bestScore){
        bestScore=score;
        window.localStorage.setItem('bestScore', score);
    }
    content.innerHTML = `<h1 class='error'>Time Out !<h1>
    <h3>Your score: ${score}</h3>
    <h5>Best Score: ${bestScore}</h5>`;
    startBtn.innerHTML = `<button type="button" class="btn btn-lg startbtn" onclick="startGame()" >Start again</button>`
    selectElement.removeAttribute("disabled")
}
let startGame = () => {
    time = window.localStorage.getItem('time');
    bar.style.width='100%';
    bar.style.backgroundColor="#1a6db1";
    let totalTime=time;
    let prog
    score= 0;
    scoreElement.innerHTML=score;
    selectElement.setAttribute("disabled","");

    var Timer = setInterval(function () {
        if (time <= 0) {
            clearInterval(Timer);
            Timeout()
        }
        if(!isPaused) {
        timeElement.innerHTML = time;
        time -= 1;
        prog=(time/totalTime)*100
        if (prog<=25){
            bar.style.backgroundColor="#b11a1a"
        }
        else if(prog<=50){
            bar.style.backgroundColor="orange"
        }
        bar.style.width=`${prog}%`;
    }}, 1000)
    var word = Generating();
    content.innerHTML = `<h1>${word}</h1>`;
    startBtn.innerHTML = `<input type="text" id='text'class='text rounded-pill border-0 px-3 py-1' onkeyup='validate()'>
    <div><button type="button" onclick="play()" class='pause mt-5 p-1 px-3' id='pause'  ><i class="fa-solid fa-pause"></i></button></div>`;
}

let validate = () => {
    var text = document.getElementById('text').value;
    word = content.innerText;
    if (text.toLowerCase() == word.toLowerCase()) {
        word = Generating();
        content.innerHTML = `<h1>${word}</h1>`;
        document.getElementById('text').value = '';
        score++;
        scoreElement.innerHTML = score;
    }
}

new TypeIt('#type', {
    speed: 100,
    startDelay: 1000,
    loop: true,
})
    .type('<em class="typing">Typing</em>')
    .pause(1000)
    .type('<em class="game">Game</em>')
    .pause(1500).go();

function play(){
    pause=document.getElementById('pause')
    
    if(isPaused){
    pause.innerHTML=`<i class="fa-solid fa-pause"></i>`
    isPaused = false;
}else 
{
    pause.innerHTML=`<i class="fa-thin fa-play"></i>`
    isPaused = true;
}
}