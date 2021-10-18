song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

function preload(){
    song1 = loadSound("Minions.mp3");
    song2 = loadSound("picachu.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY);
    }
}

function modelLoaded(){
    console.log("posenet is Initialized got it?");
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song1.play();
    song1.setvolume(1);
    song1.rate(1);
    
    song2.play();
    song2.setvolume(1);
    song2.rate(1);

}