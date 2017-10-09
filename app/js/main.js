(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
