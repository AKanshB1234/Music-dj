/**sr = 0;
sl = 0;
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", showresult);
}

function modelLoaded(){
    console.log("Model is linked");
}
function showresult(result){
    console.log(result);
    sl = result[0].pose.keypoints[9].score;
    sr = result[0].pose.keypoints[10].score;
    lwx = result[0].pose.leftWrist.x;
    lwy = result[0].pose.leftWrist.y;
    rwx = result[0].pose.rightWrist.x;
    rwy = result[0].pose.rightWrist.y;
    
}
function draw(){
    image(video, 0, 0, 600, 400);
    fill("yellow");
    stroke("yellow");
    if(sl > 0.1){
        circle(lwx, lwy-100, 20);
    }
    if(sr > 0.1){
        circle(rwx, rwy-100, 20);
    }
}**/
sl = 0;
sr = 0;
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;

function preload(){
    song1 = loadSound("In the end.mp3");
    song2 = loadSound("Unstoppable.mp3");
    song3 = loadSound("CT.mp3");
}

function setup() {
	canvas =  createCanvas(600, 400);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
    
    model = ml5.poseNet(video , modelLoaded);
	model.on("pose" , showResult);
}

function modelLoaded(){
    console.log("Model is linked");
}

function showResult(results){
   console.log(results);
   sl = results[0].pose.keypoints[9].score;
   sr = results[0].pose.keypoints[10].score;
   lwx = results[0].pose.leftWrist.x;
   lwy = results[0].pose.leftWrist.y;
   rwx = results[0].pose.rightWrist.x;
   rwy = results[0].pose.rightWrist.y;
}


function draw(){
    image(video , 0, 0, 600,400);
    fill("yellow");
    stroke("yellow");
    if(sr > 0.1){
        circle(rwx , rwy , 20);
    } 

    if(sl > 0.1){
        circle(lwx , lwy , 20);
    }

}

function play(){
    ush = document.getElementById("slt").value;
    if(ush == "In the end"){
        song1.setVolume(0.5);
        song1.rate(1);
        song1.play();
    }
    if(ush =="Unstoppable"){
        song2.setVolume(0.5);
        song2.rate(1);
        song2.play();
    }
    if(ush == "Cheap thrills"){
        song3.setVolume(0.5);
        song3.rate(1);
        song3.play();
    }
}
function stop(){
    song1.stop();
}