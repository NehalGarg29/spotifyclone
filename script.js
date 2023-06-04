console.log("Welcome to Spotify!");
//initialise the variables
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let MyProgressBar= document.getElementById('MyProgressBar');
let gif= document.getElementById('gif');
let mastersongname= document.getElementById('mastersongname');
let songitem= Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songname : " Let me love you" , filepath : "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : " Baarishein" , filepath : "songs/2.mp3" , coverpath : "covers/2.jpg"},
    {songname : " Hawayein" , filepath : "songs/3.mp3" , coverpath : "covers/3.jpg"},
    {songname : " kho gaye hum kahan" , filepath : "songs/4.mp3" , coverpath : "covers/4.jpg"},
    {songname : " kyon " , filepath : "songs/5.mp3" , coverpath : "covers/5.jpg"},
    {songname : "waqt ki baatein" , filepath : "songs/6.mp3" , coverpath : "covers/6.jpg"},
]
songitem.forEach((element, i)=>{
      element.getElementsByTagName("img")[0].src=songs[i].coverpath;
      element.getElementsByClassName("songname")[0].innertText=songs[i].songname;
})

//audioElement.play();

// handle play / pause click
masterplay.addEventListener('click', ()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
     }
     else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
     }
})
// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    MyProgressBar.value = progress;
})
MyProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= MyProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
     console.log(e.target);
     makeAllPlays();
     songIndex = parseInt(e.target.id);
     e.target.classList.remove('fa-circle-play');
     e.target.classList.add('fa-circle-pause');
     audioElement.src= `songs/${songIndex+1}.mp3`;
     mastersongname.innerText= songs[songIndex].songname;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-circle-pause');
})
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
    songIndex += 1;
    }
     audioElement.src= `songs/${songIndex+1}.mp3`;
     mastersongname.innerText= songs[songIndex].songname;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex -= 1;
    }
     audioElement.src= `songs/${songIndex+1}.mp3`;
     mastersongname.innerText= songs[songIndex].songname;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-circle-pause');
})