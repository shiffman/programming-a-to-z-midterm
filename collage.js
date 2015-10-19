var c;
var slider;
var imgSize;

var imgURLS = ['https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg','https://upload.wikimedia.org/wikipedia/commons/9/90/Sunset_Marina.JPG','http://weknowyourdreams.com/images/sunset/sunset-02.jpg'];

function setup() {
  c = createCanvas(windowWidth,windowHeight);
  background(0);

  for (var i =0; i<imgURLS.length; i++) {
    loadImage(imgURLS[i], imageCollage);
  }

  copy(imgURLS[0], 7, 22, 10, 10, 35, 25, 50, 50);

  // slider = createSlider(0,20,10);
  // slider.position(100,100);
 


}

function imageCollage(img){

  image(img,0,0, 200, 200);

}















