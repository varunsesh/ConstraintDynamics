import {Vector} from './vector.js'
import { SetupScene, Ball } from './scene.js';


var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 100;

var simMinWidth = 20;
var cScale = Math.min(canvas.width, canvas.height)/simMinWidth;

var dt = 1/60;

var g = new Vector(0, -10);

var pauseClick = document.getElementById("pause");

var slider = document.getElementById("myRange");

var pause = false;

var scene = new SetupScene(3, cScale, canvas.width, canvas.height);
var balls = scene.defineBalls();

function simUpdate(e){
    for(var i = 0; i<balls.length; i++){
        balls[i] = balls[i].simulate(g, dt);
        balls[i].handleWallCollisions(cScale, canvas.width, canvas.height);
    }
    for(var i = 0; i<balls.length; i++){
        for(var j = i+1; j<balls.length; j++){
            balls[i].handleBallCollisions(balls[j], e);
        }
            
    }
}




function update(){
   pauseClick.onclick=(()=>{pause=!pause;});
    if(!pause){
        simUpdate(slider.value/10);
        ;
    }
    console.log(slider.value/10);
    scene.drawScene(c, balls);
    
    requestAnimationFrame(update);
};


update();

