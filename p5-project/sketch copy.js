let img;
let numSegment = 50;
let segments = [];
let drawSegment = false;
let imgDrawProps = {aspect: 0, width: 0, height: 0, xOffset:0, yOffset: 0}
let canvasAspectRatio = 0;

function preload(){
  img = loadImage('assets/Mona_Lisa_by_Leonardo_da_Vinci_500_x_700.jpg');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imgDrawProps.aspect = img.width / img.height;
  canvasAspectRatio = width / height;
  calculateImageDrawProps();
}

function draw() {
  background(220);
  image(img, imgDrawProps.xOffset, imgDrawProps.yOffset, imgDrawProps.width, imgDrawProps.height);
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  calculateImageDrawProps();
}

function calculateImageDrawProps(){
  canvasAspectRatio = width / height;
  if(imgDrawProps.aspect > canvasAspectRatio){
    imgDrawProps.width = width;
    imgDrawProps.height = width / imgDrawProps.aspect;
    imgDrawProps.yOffset = (height - imgDrawProps.height) / 2;
    imgDrawProps. xOffset = 0;
  }else if(imgDrawProps.aspect < canvasAspectRatio){
    imgDrawProps.height = height;
    imgDrawProps.width = height * imgDrawProps.aspect;
    imgDrawProps.xOffset = (width - imgDrawProps.width) / 2;
    imgDrawProps.yOffset = 0;
  }else if (imgDrawProps.aspect == canvasAspectRatio) {
      //if the aspect ratios are the same then we can draw the image to the canvas size
      imgDrawProps.width = width;
      imgDrawProps.height = height;
      imgDrawProps.xOffset = 0;
      imgDrawProps.yOffset = 0;
  }
}
