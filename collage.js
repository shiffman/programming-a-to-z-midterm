var c;
var slider;
var imgSize;

var imgURLS = ['https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg','https://upload.wikimedia.org/wikipedia/commons/9/90/Sunset_Marina.JPG','http://weknowyourdreams.com/images/sunset/sunset-02.jpg'];

function setup() {
  c = createCanvas(windowWidth,windowHeight);
  background(0);

  for (var i =0; i<imgURLS.length; i++) {
    loadImage(imgURLS[0], imageCollage);
  }


  // var section

  // slider = createSlider(0,20,10);
  // slider.position(100,100);
 


}

function imageCollage(img){

  image(imgURLS[0],0,0);
  // var c = get(50, 90, 50, 50);
  // fill(c);
  // image(img,0,0, 200, 200);

}















