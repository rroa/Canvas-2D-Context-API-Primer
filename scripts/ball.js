/**
* Created with Canvas 2D Context API Primer.
* User: raulroa
* Date: 2014-07-19
* Time: 11:53 PM
* This file was extracted from the examples in the book 'Foundation HTML5 Animation with JavaScript' by Billy Lamberta
* http://www.amazon.com/dp/1430236655/ref=cm_sw_su_dp?tag=html5anim-20 
*/

var Position = {
    LEFT : 0,
    MIDDLE : 1,
    RIGHT : 2
}

function Ball (radius, color) {
  if (radius === undefined) { radius = 40; }
  if (color === undefined) { color = "#ff0000"; }
  this.x = 0;
  this.y = 0;
  this.radius = radius;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.color = utils.parseColor(color);
  this.lineWidth = 1;
  this.position = Position.MIDDLE;
  this.previousPosition = Position.MIDDLE;
}

Ball.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.beginPath();
  //x, y, radius, start_angle, end_angle, anti-clockwise
  context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
  context.closePath();
  context.fill();
  if (this.lineWidth > 0) {
    context.stroke();
  }
  context.restore();
};
