// sketch.js
let socket;
// Classifier Variable
let classifier;
  // Model URL
  let imageModelURL = './'//'https://teachablemachine.withgoogle.com/models/FKh-hJ_jc/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}


function setup() {
    createCanvas(400, 400);
    createCanvas(320, 260);
    // Create the video
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
    background(200);

    socket = io.connect('http://localhost:3000');

    socket.on('serialdata', (data) => {
        console.log('Serial Data:', data);
    });
}

function draw() {
    background(0);
    // Draw the video
    image(flippedVideo, 0, 0);

    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);

    let message = '0';
    if (label == 'Class 2')
        message = '1'
    socket.emit('sendToSerial', message);
}

function mousePressed() {

}

 // Get a prediction for the current video frame
 function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  }