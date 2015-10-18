
var input;
var bttn;
var searchTerm;


function setup() {
  noCanvas();

  createElement('h1','Enter a word or phrase to search for an image');
 
  //create my search field
  input = createInput(' ');
 
  //create my search button
  bttn = createButton('search');
  bttn.mousePressed(imageSearch);

}


function imageSearch(){

  searchTerm = input.value(); //my search term which i will send to the google image api

  var my_key = 'AIzaSyBdeOzPYln1iX1B4lJrgeBFbrqzsx8Cj2A';

  var query = "https://www.googleapis.com/customsearch/v1?key=" + my_key + "&searchType=image" + "&cx=017113430126644414771:wwhvz3sxr2q" + "&q=" + searchTerm  + "&num=12&start=1&imgSize=large";
  var url = encodeURI(query); //encode url if you get multiple search terms

  loadJSON(url, gotData);

//https://www.googleapis.com/customsearch/v1?q=drone&cx=017113430126644414771%3Awwhvz3sxr2q&imgSize=large&imgType=photo&num=20&searchType=image&key={YOUR_API_KEY}




}


function gotData(data){

  console.log(data);

}



















// //STUFF FROM SHIFFMAN OFFICE HOURS LOOK AT THIS LATER
// var imgElt;

// function setup() {

//   createCanvas(300,300);
//   background(0);	

//   imgElt = createImg('http://dreamatico.com/data_images/apple/apple-6.jpg');
//   imgElt.hide();

//   //loadImage('http://weknowyourdreams.com/images/apple/apple-02.jpg', loaded);
// }

// function mousePressed() {

// 	var graphics = createGraphics(300, 300);

// 	// THis is actually resizing the pixels of imgElt onto "graphics"
// 	graphics.image(imgElt,0,0,300,300);

//   // This not working, p5 bug?
// 	//copy(graphics, 0, 0, 100, 100, 0, 0, 100, 100);

// }
// 			