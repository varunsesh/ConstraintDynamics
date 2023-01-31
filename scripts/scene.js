import {Vector} from './vector.js'

export class Ball{
    constructor(params){
        this.pos= params && params.pos || new Vector(0.0, 0.0);
        this.m = params && params.m || 0.0;
        this.vel = params && params.vel || new Vector(0.0, 0.0);
        this.r = params && params.r || 1.0;
    }

    simulate(g, dt){
        g = g.scale(dt);
        this.vel = this.vel.addVector(g);
        var velUpdate = this.vel.scale(dt);
        this.pos = this.pos.addVector(velUpdate);

        var params = {pos:this.pos, vel:this.vel, m:this.m, r:this.r}
        var ball = new Ball(params);
        return ball;
    }

    handleWallCollisions(scale, width, height){
        if(this.pos.x*scale < 0 || this.pos.x*scale > width){
            this.vel = this.vel.scaleX(-1);
        }
        if(this.pos.y < 0){
            this.pos = this.pos.scaleY(0);
            this.vel = this.vel.scaleY(-1);
        }
    }

    handleBallCollisions(){
        
    }
}

function cX(pos, cScale){
    return pos.x*cScale;
}

function cY(pos, cScale, height){
    return height - pos.y*cScale ;
}

export class SetupScene{
    constructor(nballs, cScale, width, height){
        this.nballs = nballs && nballs || 10;        
        this.balls = [];
        this.cScale = cScale && cScale || 1.0;;
        this.width = width;
        this.height = height; 

    }

    defineBalls(){
        for(var i = 1; i<this.nballs; i++){
            var pos = new Vector(Math.random()*10.0, Math.random()*10);
            var vel = new Vector(Math.random()*10, Math.random()*10);
            var params = {pos:pos, vel:vel, m:0.5, r:0.5}; 
            this.balls.push(new Ball(params));
        }
        this.balls[0] = new Ball({pos:new Vector(0.2, 0.2), vel:new Vector(10.0, 12.0), m:1.0, r:1.0});

        return this.balls;
    }

    drawBall(ctx, colour, radius, pos){
        ctx.fillStyle = colour;
        ctx.beginPath();
        ctx.arc(cX(pos, this.cScale), cY(pos, this.cScale, this.height), radius*this.cScale, 0, 2*Math.PI);
        ctx.fill();
    }

    drawScene(ctx, balls){
        ctx.clearRect(0,0, this.width, this.height);
        this.drawBall(ctx, '#FF0000', balls[0].r, balls[0].pos);

        for (var i = 1; i<balls.length; i++){
            this.drawBall(ctx, '#00FF00', balls[i].r, balls[i].pos);
        }
    }
}






