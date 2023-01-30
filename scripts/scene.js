import {Vector} from './vector.js'

class Ball{
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
        this.pos += velUpdate;
    }
}


class SetupScene{
    constructor(nballs){
        this.nballs = nballs && 10 || nballs;        
    }
}

var pos = new Vector(1.0, 2.0);
var vel = new Vector(10.0, 20.0);
var params = {pos:pos, vel:vel, m:1.0, r:1.0};
var ball1 = new Ball(params);




