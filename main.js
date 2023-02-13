song_1 = ""
song_2 = ""

function preload(){
    song = loadSound("CupSong.mp3");
    song = loadSound("Sunflower.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
  }

  function draw(){
      Image(video, 0, 0, 600, 500);
  }