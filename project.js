var time=window.localStorage.getItem('time');
var level=window.localStorage.getItem('level');
score=document.getElementById('score');
levelElement=document.getElementById("level");
timeElement=document.getElementById("sec");
startPlay=document.getElementById('starting');
startBtn=document.getElementById('Btnn') ;
timeElement.innerHTML=time;
levelElement.innerHTML=level;
let selectLevel=()=>{ 
    level=document.getElementById('choose').value;
    if (level==1){
        window.localStorage.setItem('time','20')
        window.localStorage.setItem('level','Easy')
    }
    else if(level==2){
        window.localStorage.setItem('time','15')
        window.localStorage.setItem('level','Meduim')
    }else{
        window.localStorage.setItem('time','10')
        window.localStorage.setItem('level','Hard')
    }
    time=window.localStorage.getItem('time');
    timeElement.innerHTML=time;
    levelElement.innerHTML=window.localStorage.getItem('level');
}


let Generating = () => {
    let arr=['week' , 'Congratulations','Bee' , 'Location' , 'Shopping' ,'Collage' , 'graduation' , 'Love' , 'Money' , 'suggestions' , 'Charger' , 'Bag' , 'Mobile' , 'scarf' , 'TV' , 'Computer' ]
     let ran = Math.ceil(Math.random() * arr.length-1);
    return arr[ran] ; 
}
let startGame =()=>{
    time=window.localStorage.getItem('time');
    score.innerHTML=0;
    var Timer=setInterval(function(){
        if(time <= 0){
            clearInterval(Timer);
        }
        timeElement.innerHTML=time;
        time -=1;
    },1000)
    var word = Generating() ;
    startPlay . innerHTML = word ;
    startBtn. innerHTML =  `<input type="text" id='text' onkeyup='validate()'>`; 
    setTimeout(function(){
        startPlay. innerHTML =`Time Out`;
        startBtn. innerHTML =`<button type="button" class="btn btn-lg " onclick="startGame()" >Start again</button>`
    },time*1000)
}
let validate=()=>{
    var text=document.getElementById('text').value;
    word=startPlay. innerHTML;
    if(text.toLowerCase() == word.toLowerCase()){
        word=Generating();
        startPlay. innerHTML = word;
        document.getElementById('text').value='';
        document.getElementById('score') . innerHTML =Number(document.getElementById('score') . innerHTML)+1;
    }
}
