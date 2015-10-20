var graphics;
var canvas;
var w; //set the width and height of the canvas in the browser and offscreen canvas for accessing pixels
var h;

var tileSize = 10; //size of our tiles, eventually will be dynamically controlled by a slider or form

var colNum; //variables to hold column and row numbers
var rowNum;

var imgURLS = [];

function preload(){

  imgURLS = loadStrings('urls.txt'); //for now, load image URLS from a text file so we don't overload the api

}


function setup() {

  w = 400; //set w and h so our on-screen and off-screen canvases will mirror each other
  h = 300;

  colNum = w/tileSize; //set our column and row numbers
  rowNum = h/tileSize;

  canvas = createCanvas(w,h);
  canvas.position(0,0); //draw the canvas at the top left corner of the browser
  devicePixelScaling(false);
  background(215);


  //set up the underlying grid and display it for now
  for (var x = 0;  x< colNum; x++) {
    for (var y= 0; y<rowNum; y++){
      stroke(200);
      line (x*tileSize, 0, x*tileSize, h);
      line(0, y*tileSize, w, y*tileSize);

    }
  }


  for (var i =0; i<imgURLS.length; i++) { //loop through all of our image URLS and create an image element so we can access pixels later

    processImage(imgURLS[i], i); //created this function because of the callbacks in a loop problem -- to revisit later

  }
   
}

function processImage(url, count) {

  //for every image in the array of URLS
  //1. create an image (HTML) element
  var imgElt = createImg(url, makeTile);  

  //2. then make a tile by creating an offscreen canvas
  function makeTile() { //for every image, draw it to an off-screen canvas the size of our browser so we can access the pixels
    
    var graphics = createGraphics(w, h); //draw the graphics canvas at the same dimensions as the canvas in the browser so they mirror each other
    graphics.image(imgElt, 0, 0, graphics.width, graphics.height);

    var x = count*tileSize; //take a tile and assign it to a place in the canvas in our browser
    var y = count*tileSize;
    mycopy(graphics, x, y, tileSize, tileSize, x, y, tileSize, tileSize);
    

    imgElt.hide(); //hide the image element in the browser, show only the tile

  }

}


function mycopy(s, sx, sy, sw, sh, dx, dy, dw, dh) { //shiffman's custom copy function since native p5 copy() function is broken

  var ctx = canvas.elt.getContext('2d');
  ctx.drawImage(s.elt, sx, sy, sw, sh, dx, dy, dw, dh);

}