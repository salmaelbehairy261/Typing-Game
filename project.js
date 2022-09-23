var time = window.localStorage.getItem('time');
var level = window.localStorage.getItem('level');
score = document.getElementById('score');
levelElement = document.getElementById("level");
timeElement = document.getElementById("sec");
startPlay = document.getElementById('starting');
startBtn = document.getElementById('Btnn');
timeElement.innerHTML = time;
levelElement.innerHTML = level;
let selectLevel = () => {
    level = document.getElementById('choose').value;
    if (level == 1) {
        window.localStorage.setItem('time', '20')
        window.localStorage.setItem('level', 'Easy')
    }
    else if (level == 2) {
        window.localStorage.setItem('time', '15')
        window.localStorage.setItem('level', 'Meduim')
    } else {
        window.localStorage.setItem('time', '10')
        window.localStorage.setItem('level', 'Hard')
    }
    time = window.localStorage.getItem('time');
    timeElement.innerHTML = time;
    levelElement.innerHTML = window.localStorage.getItem('level');
}


let Generating = () => {
    let arr = ['week', 'Congratulations', 'Bee', 'Location', 'Shopping', 'Collage', 'graduation', 'Love', 'Money', 'suggestions', 'Charger', 'Bag', 'Mobile', 'scarf', 'TV', 'Computer']
    let ran = Math.ceil(Math.random() * arr.length - 1);
    return arr[ran];
}
let startGame = () => {
    time = window.localStorage.getItem('time');
    score.innerHTML = 0;
    var Timer = setInterval(function () {
        if (time <= 0) {
            clearInterval(Timer);
        }
        timeElement.innerHTML = time;
        time -= 1;
    }, 1000)
    var word = Generating();
    startPlay.innerHTML = word;
    startBtn.innerHTML = `<input type="text" id='text' onkeyup='validate()'>`;
    setTimeout(function () {
        startPlay.innerHTML = `Time Out`;
        startBtn.innerHTML = `<button type="button" class="btn btn-lg " onclick="startGame()" >Start again</button>`
    }, time * 1000)
}
let validate = () => {
    var text = document.getElementById('text').value;
    word = startPlay.innerHTML;
    if (text.toLowerCase() == word.toLowerCase()) {
        word = Generating();
        startPlay.innerHTML = word;
        document.getElementById('text').value = '';
        document.getElementById('score').innerHTML = Number(document.getElementById('score').innerHTML) + 1;
    }
}

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
});

window.onload = function () {
    document.getElementById("my_audio").play();
    audioElement.loop = true;

}

function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById('intro').style.backgroundColor = "blue";
}

function sound() {
    let Audio = document.getElementById('my_audio');
    let audioBtn = document.getElementById('audio');


 Audio.remove();
    audioBtn.innerHTML = `<button onclick="sound" style='font-size:24px' class="btn set" id="audio"><i class="fa-solid fa-volume-xmark"></i></button>`;



    // if (audioBtn.innerHTML = `<button onclick="sound" style='font-size:24px' class="btn set" id="audio"><i class="fa-solid fa-volume-xmark"></i></button>`) {
    //     document.getElementById('audio').innerHTML = `<button onclick="sound()" style='font-size:24px' class="btn set" id="audio"><i class='fas fa-volume-up'></i></button>`
    //     Audio.remove();

    // }
    // else {
    //     document.getElementById('audio').innerHTML = `<button onclick="sound" style='font-size:24px' class="btn set" id="audio"><i class="fa-solid fa-volume-xmark"></i></button>`
    //     playSound("Horizon.mp3") 
    // }


   
}
   