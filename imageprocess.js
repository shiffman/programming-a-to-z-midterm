var graphics; //var to hold the offscreen (graphics) + onscreen canvas
var canvas;

var w; //set the width and height of the canvas in the browser and offscreen canvas for accessing pixels
var h;

var tileSize = 10; //size of our tiles, eventually will be dynamically controlled by a slider or form
var colNum; //variables to hold column and row numbers
var rowNum;

var imgURLS = [];


function preload(){
  imgURLS = loadStrings('guys.txt'); //for now, load image URLS from a text file so we don't overload the api

}


function setup() {

  w = 400; //set w and h so our on-screen and off-screen canvases will mirror each other
  h = 300;

  colNum = w/tileSize; //set the amount of columns and amount of rows
  rowNum = h/tileSize;

  canvas = createCanvas(w,h); //create a canvas at 0,0
  canvas.position(0,0); 
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


  var i = 0; //variable to keep track of what image we're on in the array of images
  for (var x =0; x < colNum; x++) { //for every column
    for (var y =0; y < rowNum; y++) { //for every row
      processImage(imgURLS[i], x, y); //created this function because of the callbacks in a loop problem -- to revisit later
      i++;  //go to the next image in the array
      if (i === imgURLS.length) { 
        i = 0;
      }
      console.log(imgURLS[i], x, y);
    }
  }

   
}

function processImage(url, x, y) {

  //for every image in the array of URLS
  //1. create an image (HTML) element so we can access pixels later  
  var imgElt = createImg("images/"+url, makeTile);  

  //2. then make a tile by creating an offscreen canvas
  function makeTile() { //for every image, draw it to an off-screen canvas the size of our browser so we can access the pixels
    
    var graphics = createGraphics(w, h); //draw the graphics canvas at the same dimensions as the canvas in the browser so they mirror each other
    graphics.image(imgElt, 0, 0, graphics.width, graphics.height);
    imgElt.hide(); //hide the image element in the browser, show only the tile
  

    x = x*tileSize; //take a tile and assign it to a place in the canvas in our browser
    y = y*tileSize;
    mycopy(graphics, x, y, tileSize, tileSize, x, y, tileSize, tileSize);


  }
}



function mycopy(s, sx, sy, sw, sh, dx, dy, dw, dh) { //shiffman's custom copy function since native p5 copy() function is broken

  var ctx = canvas.elt.getContext('2d');
  ctx.drawImage(s.elt, sx, sy, sw, sh, dx, dy, dw, dh);

}