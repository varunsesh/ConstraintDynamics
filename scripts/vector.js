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
    
}


