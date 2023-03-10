export class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    
    dot(other){
        return (this.x*other.x + this.y*other.y);
    }
    
    length(){
        return (Math.sqrt(this.x*this.x + this.y*this.y));
    }
    
    addVector(other){
        var result = new Vector(0,0);
        result.x = this.x+other.x;
        result.y = this.y+other.y;
        return result;
    }
    
    clone(){
        return new Vector(this.x, this.y);
    }

    scale(s){
        return new Vector(s*this.x, s*this.y);
    }

    add(other, s){
        this.x+=s*other.x;
        this.y+=s*other.y;
        return this;
    }

    subtractVector(other){
        return new Vector(other.x-this.x, other.y-this.y);
    }

    scaleX(sx){
        return new Vector(sx*this.x, this.y);
    }

    scaleY(sy){
        return new Vector(this.x, sy*this.y);
    }

    dir(v2){
        return v2.addVector(this.scale(-1));
    }
    
}


