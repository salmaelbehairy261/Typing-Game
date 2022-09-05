var time=window.localStorage.getItem('time');
document.getElementById("sec").innerHTML=time;
document.getElementById("level").innerHTML=window.localStorage.getItem('level');
let selectLevel=()=>{ 
    var level=document.getElementById('choose').value;
    var lev;
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
    document.getElementById("sec").innerHTML=time;
    document.getElementById("level").innerHTML=window.localStorage.getItem('level');
}


let Generating = () => {
    var arr=['week' , 'Congratulations','Bee' , 'Location' , 'Shopping' ,'Collage' , 'graduation' , 'Love' , 'Money' , 'suggestions']
     let ran = Math.ceil(Math.random() * arr.length-1);
    return arr[ran] ; 
}
let startGame =()=>{
    time=window.localStorage.getItem('time');
    document.getElementById('score').innerHTML=0;
    var Timer=setInterval(function(){
        if(time <= 0){
            clearInterval(Timer);
        }
        document.getElementById("sec").innerHTML=time;
        time -=1;
    },1000)
    var word = Generating() ;
    document.getElementById('starting') . innerHTML = word ;
    document.getElementById('Btnn') . innerHTML =  `<input type="text" id='text' onkeyup='validate()'>`; 
    setTimeout(function(){
        document.getElementById('starting') . innerHTML =`Time Out`;
        document.getElementById('Btnn') . innerHTML =`<button type="button" class="btn btn-lg " onclick="startGame()" >Start again</button>`
    },time*1000)
}
let validate=()=>{
    var text=document.getElementById('text').value;
    word=document.getElementById('starting') . innerHTML;
    if(text.toLowerCase() == word.toLowerCase()){
        word=Generating();
        document.getElementById('starting') . innerHTML = word;
        document.getElementById('text').value='';
        document.getElementById('score') . innerHTML =Number(document.getElementById('score') . innerHTML)+1;
    }
}
