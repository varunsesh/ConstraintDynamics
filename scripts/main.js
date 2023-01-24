var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 100;

var simMinWidth = 20;
var cScale = Math.min(canvas.width, canvas.height)/simMinWidth;

var dt = 1/100;
var g = {x:0, y:-10};

var ball = {
    pos : {x:0.2, y:0.2}, 
    radius : 0.2,
    velocity:{x:5, y:6}
}

function cX(pos){
    return ball.pos.x*cScale;
}

function cY(pos){
    return canvas.height - ball.pos.y*cScale ;
}

function draw(){
    c.clearRect(0,0,canvas.width, canvas.height);
    c.fillStyle = "#FF0000";

    c.beginPath();
    c.arc(cX(ball.pos), cY(ball.pos), ball.radius*cScale, 0, 2*Math.PI);
    c.fill();
}


function simulate(){

    ball.velocity.x += g.x*dt;
    ball.velocity.y += g.y*dt;
    

    ball.pos.x += ball.velocity.x*dt;
    ball.pos.y += ball.velocity.y*dt;

    if(ball.pos.x*cScale < 0 || ball.pos.x*cScale > canvas.width){
        ball.velocity.x = -ball.velocity.x;
        console.log(ball.velocity.x);
        
    }

    if(ball.pos.y < 0){
        ball.pos.y = 0;
        ball.velocity.y = -ball.velocity.y;
    }
}

function update(){
    simulate();
    draw();
    requestAnimationFrame(update);
}

update();

