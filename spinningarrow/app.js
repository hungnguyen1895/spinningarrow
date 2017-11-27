

img = document.getElementById('target');

(function() {
  var screenHeight = screen.height,
      screenWidth = screen.width,
      imgHeight = img.height,
      imgWidth = img.width;

      img.style.left = (screenWidth-imgWidth)/2 + "px";
      img.style.top = (screenHeight-imgHeight)/2 + "px";

})();

var check = true;

function run() {
  document.getElementById("instruction").style.display = "none";
  if(check === true) {
  check = false;
  var x = 0;
  var stopTime = Math.floor(Math.random() * 3000) + 2000;
  
  interval = setInterval(function() {
    x = x + 5;
    img.style.transform = "rotate(" + x + "deg)";
  }, 10);
  setTimeout(function() {
    clearInterval(interval);
    check = true;
  }, stopTime);
  }
}

