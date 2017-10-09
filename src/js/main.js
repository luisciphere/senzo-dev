// Sticky Header stats-menu

var h = document.getElementById('sticky-header');
var stbody = document.getElementById('stats-body');
var stuck = false;
var stickPoint = getDistance();

console.log( h );

function getDistance() {
  var topDist = h.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance()  - window.pageYOffset;
  var offset = window.pageYOffset;
  //readout.innerHTML = stickPoint + '   ' + distance + '   ' + offset + '   ' + stuck;
  if ( (distance <= 0) && !stuck) {
    h.style.position = 'fixed';
    h.style.top = '0px';
    h.style.padding = '20px 0'
    stbody.style.margin = '120px 0';
    stuck = true;
  } else if (stuck && (offset <= stickPoint)){
    h.style.position = 'static';
    stbody.style.margin = '0';
    stuck = false;
  }
}
