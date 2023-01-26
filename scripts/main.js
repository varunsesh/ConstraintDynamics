var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 100;

var simMinWidth = 20;
var cScale = Math.min(canvas.width, canvas.height)/simMinWidth;

var dt = 1/60;
var g = {x:0, y:-10};


class ballObj{
    constructor(pos, m, vel, r){
        if(pos === null){
            this.pos = {x:0, y:0}
        }
        if(m === null){
            this.m = 0.0;
        }
        if(vel === null){
            this.vel = {x:0, y:0};
        }
        if(r === null){
            r = 1.0;
        }

        this.pos=pos;
        this.m = m;
        this.vel = vel;
        this.r = r;
    }
}


function cX(pos){
    return pos.x*cScale;
}

function cY(pos){
    return canvas.height - pos.y*cScale ;
}

nballs = 2;

var balls = [];

function spawnBalls(){
    var dx = 1.0
    var ball1 = new ballObj({x:1.0, y:1.0}, 1.0, {x:10.0, y:12.0}, 0.5)
    var ball2 = new ballObj({x:2.0, y:1.0}, 1.0, {x:5.0, y:12.0}, 0.5)
    balls.push(ball1);
    balls.push(ball2);
}

function computeCollisions(){

}

function circle(colour, radius, pos){
    c.fillStyle = colour;
    c.beginPath();
    c.arc(cX(pos), cY(pos), radius*cScale, 0, 2*Math.PI);
    c.fill();
}

var ball = new ballObj({x:1.0, y:1.0}, 1.0, {x:5.0, y:6.0}, 0.75);

function draw(){
    c.clearRect(0,0, canvas.width, canvas.height);
    circle('#FF0000', ball.r, ball.pos);

    for (var i = 0; i<balls.length; i++){
        circle('#00FF00', balls[i].r, balls[i].pos);
    }
}

function simulate(){
    for (var i = 0; i<balls.length; i++){
        balls[i].vel.x += g.x*dt;
        balls[i].vel.y += g.y*dt;

        balls[i].pos.x += balls[i].vel.x*dt;
        balls[i].pos.y += balls[i].vel.y*dt;

        if(balls[i].pos.x*cScale < 0 || balls[i].pos.x*cScale > canvas.width){
            balls[i].vel.x = -balls[i].vel.x;
        }

        if(balls[i].pos.y < 0){
            balls[i].pos.y = 0;
            balls[i].vel.y = -balls[i].vel.y;
        }

    }

    ball.vel.x += g.x*dt;
    ball.vel.y += g.y*dt;
    
    ball.pos.x += ball.vel.x*dt;
    ball.pos.y += ball.vel.y*dt;

    if(ball.pos.x*cScale < 0 || ball.pos.x*cScale > canvas.width){
        ball.vel.x = -ball.vel.x;
    }

    if(ball.pos.y < 0){
        ball.pos.y = 0;
        ball.vel.y = -ball.vel.y;
    }
}

function update(){
    simulate();
    draw();
    requestAnimationFrame(update);
}

spawnBalls();
update();

