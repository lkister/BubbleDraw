class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 20 + 10;
        this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.maxSpeed = 5;
        this.xspeed = Math.random() * this.maxSpeed - this.maxSpeed;
        this.yspeed = Math.random() * this.maxSpeed - this.maxSpeed;
        if (this.xspeed == 0 && this.yspeed == 0) {
            xspeed = 1;
            yspeed = 1;
        }
    }
    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        if (this.x < 0 || this.x > window.innerWidth) {
            this.xspeed = -1 * this.xspeed;
        }
        if (this.y < 0 || this.y > window.innerHeight) {
            this.yspeed = -1 * yspeed;
        }
    }
}

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

canvas.addEventListener("click", function(event) {

    var bubble = new Bubble(event.x, event.y);

    context.beginPath();
    context.arc(bubble.x, bubble.y, bubble.size, 0 * Math.PI, 2 * Math.PI);
    context.fillStyle = bubble.color;
    context.fill();

    context.stroke();

});