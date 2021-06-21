const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg)
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    var responseJson = await response.json()
    // write code slice the datetime
    var time = responseJson.datetime
    var time2 = time.slice(11,13)
    // add conditions to change the background images from sunrise to sunset
if(time2>=04 && time2<=06){
    bg = "sunrise1.png"

}else if(time2>=06 && time2<=08){
    bg = "sunrise2.png"

}else if(time2>=08 && time2<=10){
    bg = "sunrise3.png"

}else if(time2>=10 && time2<=12){
    bg = "sunrise4.png"

}else if(time2>=12 && time2<=14){
    bg = "sunrise5.png"

}else if(time2>=14 && time2<=16){
    bg = "sunrise6.png"

}else if(time2>=16 && time2<=18){
    bg = "sunset7.png"

}else if(time2>=18 && time2<=20){
    bg = "sunset8.png"

}else if(time2>=20 && time2<=22){
    bg = "sunset9.png"

}else if(time2>=22 && time2<=0){
    bg = "sunset10.png"

}else if(time2>=0 && time2<=02){
    bg = "sunset11.png"

}else {
    bg = "sunset12.png"

}
    //load the image in backgroundImg variable here
    backgroundImg= loadImage(bg)
}
