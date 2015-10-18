
var input;
var bttn;
var searchTerm;

var startNum = 1; //keeps track of where we are starting so we can make multiple API calls
var searchResults = []; //array that stores all of our search results as objects when we make multiple API calls 

var allURLS = []; //create an empty array that will hold all the image URLs


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


  
  //we need to make 10 different API calls (to get 100 images)
  //this loop will first make us 10 different urls and then call loadJSON 10 times
  //startNum will increment by 10 each time

  for (var i=0; i<1; i++) { 
    var query = "https://www.googleapis.com/customsearch/v1?key=" + my_key + "&searchType=image&imgSize=large&imgType=photo" +  "&cx=017113430126644414771:wwhvz3sxr2q" + "&q=" + searchTerm  + "&num=10&start=" + startNum + "&imgSize=large";
    var url = encodeURI(query); //encode url if you get multiple search terms
    // console.log(url);

    startNum = startNum+10;
    loadJSON(url, gotData); //make 10 calls to the API, each with a different URL

  }




}


function gotData(data){

  console.log(data.items);

  // var imgInfo = data.items; //imgInfo array of objects -- each image is an object with metadata

  // //for every image, grab the link from the object print out all the links
  // for (var i = 0; i < imgInfo.length; i++) {

  //    var imgURL = imgInfo[i].link; //create a variable to hold the image URL

  //    createP(imgURL);
  //    var imgThumbnail = createImg(imgURL);
  //    imgThumbnail.size(100,100);

  //    allURLS.push(imgURL);  //store all the URLs in that array
  // }
  
  // console.log(allURLS);


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