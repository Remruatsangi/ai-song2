function draw(){
image(video,0,0,600,500)

}
function setup(){
    Canvas=createCanvas(600,500);
    Canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
song="";
song2="";
function preload(){
song=loadSound("music.mp3");
song2=loadSound("music.mp3");
}
