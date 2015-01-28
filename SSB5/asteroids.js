log("Asteroid class loaded");

var all_asteroids={};
var next_asteroid_id=1;

function Asteroid(){
this.x = Math.random()*WIDTH;
this.y = Math.random()*HEIGHT;
this.angle = Math.random()*Math.PI*2;
this.radius = Math.random()*30+5;
this.speed = 3;

this.id= next_asteroid_id++
all_asteroids[this.id] = this;
}
Asteroid.prototype.draw = function(){
c.beginPath();
c.arc(this.x,this.y,this.radius,Math.PI*2);
c.closePath();

c.strokeStyle = 'black';
c.stroke();
}
Asteroid.prototype.move = function() {
this.x += this.speed * Math.cos(this.angle);
this.y += this.speed * Math.sin(this.angle);

if(this.x<-this.radius)