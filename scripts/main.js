import {Vector} from './vector.js'
import { SetupScene } from './scene.js';
var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 100;

var simMinWidth = 20;
var cScale = Math.min(canvas.width, canvas.height)/simMinWidth;

var dt = 1/60;

var g = new Vector(0, -10);





// function simulate(){
//     for (var i = 0; i<balls.length; i++){
//         balls[i].vel.x += g.x*dt;
//         balls[i].vel.y += g.y*dt;

//         balls[i].pos.x += balls[i].vel.x*dt;
//         balls[i].pos.y += balls[i].vel.y*dt;

//         if(balls[i].pos.x*cScale < 0 || balls[i].pos.x*cScale > canvas.width){
//             balls[i].vel.x = -balls[i].vel.x;
//         }

//         if(balls[i].pos.y < 0){
//             balls[i].pos.y = 0;
//             balls[i].vel.y = -balls[i].vel.y;
//         }

//     }

// }


var scene = new SetupScene(10, cScale, canvas.width, canvas.height);
var balls = scene.defineBalls();

function update(){
    for(var i = 0; i<balls.length; i++){
        balls[i] = balls[i].simulate(g, dt);
    }
    scene.drawScene(c, balls);
    requestAnimationFrame(update);
}


update();