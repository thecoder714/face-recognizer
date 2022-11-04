// Variables

let cam = document.getElementById("camera");
let classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oWswft5wU/model.json", modelLoaded);
let data_uri = "";

Webcam.set({
  width: 720,
  height: 1280,
  img_format: "png",
  png_quality: 90
});

Webcam.attach(cam);

// Function to take a snapshot

function takeSnapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = "<img src=" + data_uri +" id='captured_image'>"
  })
}

// Console the version

function modelLoaded() {
  console.log("ml5 Version:" + ml5.version);
}

// Classify the image

function check() {
  classifier.classify(data_uri, gotResults);
}

function gotResults(err, result) {
  if (err) {
    console.error(err);
  } else {
    document.getElementById("results").innerHTML = result;
  }
}