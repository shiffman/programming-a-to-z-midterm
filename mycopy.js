var imgElt;
var graphics;
var canvas;

function setup() {
  canvas = createCanvas(400, 300);
  devicePixelScaling(false);
  background(215);

  imgElt = createImg('https://upload.wikimedia.org/wikipedia/commons/2/27/Hillary_Clinton_official_Secretary_of_State_portrait_crop.jpg', created);
  imgElt.size(300,300);
  // imgElt.hide();
}

function created() {
  graphics = createGraphics(imgElt.width, imgElt.height);
  graphics.image(imgElt, 0, 0, graphics.width, graphics.height);

  var slice = graphics.get(0, 0, 100, 100);
  image(slice, 100, 100);

  //mycopy(graphics, 0, 0, 100, 100, 100, 100, 100, 100);
}

function mycopy(s, sx, sy, sw, sh, dx, dy, dw, dh) {
  var ctx = canvas.elt.getContext('2d');
  ctx.drawImage(s.elt, sx, sy, sw, sh, dx, dy, dw, dh);
}